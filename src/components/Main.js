import React from 'react'
import Story from './Story'
import './Main.css'

export default function Main() {
  return (
    <main className="main">
      <section className="section">
        <div>
          <Story />
        </div>
        <div className="recommend"></div>
      </section>
    </main>
  )
}
