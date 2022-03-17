import React, { useState } from 'react'
import './Story.css'

export default function Story() {
  let users = ['유저1', '유저2', '유저3', '유저4', '유저5', '유저6', '유저7', '유저7', '유저8', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', '유저9', ]
  const [storys, setStorys] = useState(users);



  return (
  <div className="story_back">
    <div className="arrow left" onClick={() => {
      document.querySelector(".story_box").scrollLeft -= 310;
    }}>{"<"}</div>
    <div className="story_box">
      {
        storys.map((story, index) => (
          <div className="story" key={index}>
            <div className="profile_img"></div>
            <div>{story}</div>
          </div>
        ))
      }
    </div>
    <div className="arrow right" onClick={() => {
        document.querySelector(".story_box").scrollLeft += 310;
    }}>{">"}</div>
  </div>
  )
}
