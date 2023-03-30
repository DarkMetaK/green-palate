import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { api } from '@/services/api';

import { AsideContent } from '@/components/AsideContent';
import { ContentContainer, GeneralInfoContainer, OtherPostsContainer, PostContainer } from '@/styles/pages/Post';
import { PostsDisplay } from '@/components/PostDisplay';

interface IPost {
  id: string,
  title: string,
  author: string,
  content: {
    subtitle?: string,
    paragraph: string
  }[]
  imageURL: string,
  date: string,
  slug: string,
  otherPosts: {
    id: string,
    title: string,
    imageURL: string,
    date: string,
    slug: string
  }[]
}

export default function Post({
  id,
  title,
  author,
  content,
  imageURL,
  date,
  slug,
  otherPosts
}: IPost) {
  return (
    <PostContainer>
      <div>
        <GeneralInfoContainer>
          <h1>{title}</h1>
          <Image
            src={imageURL}
            alt=''
            width={720}
            height={320}
          />
          <span>
            <p>Por <b>{author}</b> - {date}</p>
            <hr />
          </span>
        </GeneralInfoContainer>
        <ContentContainer>
          {
            content?.map(item => item.subtitle ? (
              <div key={item.paragraph}>
                <h2>{item.subtitle}</h2>
                <p>{item.paragraph}</p>
              </div>
            ) : (
              <p key={item.paragraph}>{item.paragraph}</p>
            ))
          }
        </ContentContainer>
        <div className="other">
            <div className="title">
              <h2>Confira outros posts</h2>
              <hr />
            </div>
            <OtherPostsContainer>
              {otherPosts?.map(item => 
                <PostsDisplay
                  key={item.id}
                  id={item.id}
                  date={item.date}
                  imageURL={item.imageURL}
                  slug={item.slug}
                  title={item.title}
                />
              )}
            </OtherPostsContainer>
        </div>
      </div>
      <AsideContent includePostSearch includeProducts/>
    </PostContainer>
  )
}

export const getServerSideProps: GetServerSideProps<any, {post: string}> = async({params}) => {

  if (!params?.post) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  let postData = {}
  try {
    const postInfo = await api.get(`/api/posts?slug=${params.post}`)
    if (postInfo.data.length) {
      postData = postInfo.data[0]
    }
    else {
      return {
        notFound: true
      }
    }
  }
  catch (error) {
    console.log(error)
    return {
      notFound: true
    }
  }

  let otherPosts = []
  try {
    const retrievedPosts = await api.get('/api/posts?_sort=timeStamp&_order=desc&_limit=4')
    otherPosts = retrievedPosts.data.map((item: any) => (
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
    console.log(error)
  }

  return {
    props: {
      ...postData,
      otherPosts
    }
  }
}

