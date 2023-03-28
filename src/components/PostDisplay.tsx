import Image from 'next/image';

import { PostsDisplayContainer } from '@/styles/components/PostDisplay';

interface IPostsDisplay {
  id: string,
  title: string,
  imageURL: string,
  date: string,
  slug: string,
  imageSize?: 'normal' | 'small'
}

export function PostsDisplay({
  id,
  title,
  imageURL,
  date,
  slug,
  imageSize='normal'
}: IPostsDisplay) {
  return (
    <PostsDisplayContainer href={`/blog/post/${slug}`}>
      <Image
        src={imageURL}
        alt=''
        height={imageSize==='normal' ? 280 : 200}
        width={360}
      />
      <div>
        <span>{date}</span>
        <p>{title}</p>        
      </div>
    </PostsDisplayContainer>
  )
}