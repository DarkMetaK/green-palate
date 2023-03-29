import { useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { ButtonsCarousel, CarouselContainer, PostCaroulseItem } from '@/styles/components/Carousel';

interface ICarousel {
  posts: {
    id: string,
    title: string,
    imageURL: string,
    date: string,
    slug: string
  }[]
}

export default function Carousel ({posts}: ICarousel) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    drag: false,
    loop: true,
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 5000)
      }
      slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener('mouseout', () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on('dragStarted', clearNextTimeout)
      slider.on('animationEnded', nextTimeout)
      slider.on('updated', nextTimeout)
    },
  ])

  return (
    <CarouselContainer ref={sliderRef} className='keen-slider'>
      {posts?.map(item => (
        <PostCaroulseItem key={item.id} className='keen-slider__slide' href={`/blog/post/${item.slug}`}>
          <Image
            src={item.imageURL}
            alt=''
            width={720}
            height={360}
          />
          <div>
            <span>{item.date}</span>
            <p>{item.title}</p>
          </div>
        </PostCaroulseItem>
      ))}

      <ButtonsCarousel>
        {Array.from(Array(posts.length).keys())?.map((index) => (
          <button
            key={index}
            onClick={() => {
              sliderInstance.current?.moveToIdx(index)
            }}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </ButtonsCarousel>
    </CarouselContainer>
  )
}
