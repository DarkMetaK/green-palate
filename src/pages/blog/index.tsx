import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { api } from '@/services/api';

import { BlogContainer, BlogMainContent } from '@/styles/pages/Blog';
import Carousel from '@/components/Carousel';
import { AsideContent } from '@/components/AsideContent';
import { PostsDisplay } from '@/components/PostDisplay';
import { ButtonContainer } from '@/styles/components/Button';

interface IPosts {
  id: string,
  title: string,
  imageURL: string,
  date: string,
  slug: string
}

interface IBlog {
  posts: IPosts[]
}

export default function Blog({posts}: IBlog) {
  const [postsToDisplay, setPostsToDisplay] = useState<IPosts[]>([])
  const [lastPostIndex, setLastPostIndex] = useState<number>(0)

  useEffect(() => {
    const firstEightPosts = posts.slice(0, 8)
    setPostsToDisplay(firstEightPosts)
    setLastPostIndex(firstEightPosts.length)
  }, [posts])

  function loadMorePosts() {
    const eightNextPostsToShow = posts.slice(lastPostIndex, lastPostIndex + 10)
    const lastPostIndexFromOriginalArray = posts.findIndex((item) => item.id === eightNextPostsToShow[eightNextPostsToShow.length-1].id)

    setPostsToDisplay(state => [...state, ...eightNextPostsToShow])
    setLastPostIndex(lastPostIndexFromOriginalArray + 1)
  }

  return (
    <BlogContainer>
      <h1>Blog</h1>
      <BlogMainContent>
        <Carousel posts={posts.reverse().slice(0,3)}/>

        <div className="posts">
          <h2>Últimos Posts</h2>
          <div>
            {postsToDisplay?.map(item => 
            <PostsDisplay
              key={item.id}
              id={item.id}
              date={item.date}
              imageURL={item.imageURL}
              title={item.title}
              slug={item.slug}
            />
            )}
            {
              postsToDisplay.length < posts.length ?(
                <div className='btn'>
                  <hr />
                  <ButtonContainer
                    style={{
                      width: '16.25rem',
                      gridColumn: '1 / -1',
                      margin: '0 auto'
                    }}
                    onClick={() => loadMorePosts()}
                  >
                  Carregar Mais
                  </ButtonContainer>
                  <hr />
                </div>
              )
              : null
            }
          </div>
        </div>
      </BlogMainContent>

      <AsideContent includeProducts={true} includePostSearch={true}/>
    </BlogContainer>
  )
}

export const getStaticProps:GetStaticProps = async() => {
  let posts = []

  try {
    const retrievedPosts = await api.get('/posts?_sort=timeStamp&_order=desc')
    posts = retrievedPosts.data.map((item: any) => (
    {
      id: item.id,
      title: item.title,
      imageURL: item.imageURL,
      date: item.date,
      slug: item.slug
    }
    ))
  }
  catch (error) {
    console.log('Erro ao buscar posts\n' + error)
  }

  return {
    props: {
      posts
    }
  }
}
