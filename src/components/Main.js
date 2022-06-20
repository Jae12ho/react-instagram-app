import React, { useState } from 'react'
import Story from './Story'
import Recommend from './Recommend'
import './Main.css'
import Post from './Post'

export default function Main({ truncate }) {
  const [posts, setPosts] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <main className="main">
      <section className="section">
        <div>
          <Story />
          {posts.map((post) => (
            <Post truncate={truncate} post={post}/>
          ))}
        </div>
        <Recommend></Recommend>
      </section>
    </main>
  )
}
