
import getSinglePost from '@/lib/getPost';
import React from 'react'

export default async function page({params}) {
    const {id} = params;
    const post = await getSinglePost(id);
  return (
    <div>
      <h1 className='text-xl text-center my-2 text-blue-500'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
