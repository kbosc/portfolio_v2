import React from 'react'

export default function Post({post}) {
  return (
      <>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
      </>
  )
}

expo