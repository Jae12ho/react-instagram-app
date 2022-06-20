import React from 'react'
import './Recommend.css'

export default function Recommend() {
    let users = ['User_1', 'User_2', 'User_3', 'User_4', 'User_5'];

  return (
    <div className="recommend">
        <div className="recommend-item">
            <div className="my-info">
                <div className="my-profile-img"></div>
                <span>
                    <div className="font-14 font-bold">y_.jaeho</div>
                    <div className="color-gray font-12">양재호</div>
                </span>
            </div>
            <div className="follow font-12 font-bold">전환</div>
        </div>
        <div className="recommend-box">
            <div className="recommend-title font-bold">
                <span className="font-14 color-gray">회원님을 위한 추천</span>
                <span className="font-12">모두 보기</span>
            </div>
            {users.map((user, index) => (
                <div key={index} className="recommend-item">
                    <div className="profile-img"></div>
                    <span>
                        <div className="font-14 font-bold">{user}</div>
                        <div className="color-gray font-12">instagram님 외 7명이 팔로우합니다.</div>
                    </span>
                    <div className="follow font-12 font-bold">팔로우</div>
                </div>
            ))}
        </div>
    </div>
  )
}
