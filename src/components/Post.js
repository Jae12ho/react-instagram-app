import React, { useState } from 'react'
import './Post.css'

export default function Post({ truncate, post }) {
  const [comments, setComments] = useState(['멋져요', '우와 !']);
  const text = "안녕하세요. 인스타그램 텍스트 예시글 입니다. 일정 글자 수가 넘어가면 ...으로 표시되며 '더 보기' 버튼이 활성화 됩니다.";
  const [textSpread, setTextSpread] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 300 + 1));

  return (
    <div>
        <div className="post-box" key={post}>
          <div className="post-title">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div className="post-title-profile-img"></div>
              <div className="post-title-username">instagram_{post}</div>
            </div>
            <div>...</div>
          </div>
          <div className="post-img"></div>
          <div className="post-like">
            <div className="post-like-item hover">
              <img src="/heart.png" alt="heart"/>
              <img src="/comment.png" alt="comment"/>
              <img src="/paperairplane.png" alt="paperairplane"/>
            </div>
            <div className="post-like-item hover">
              <img src="/bookmark.png" alt="bookmark"/>
            </div>
          </div>
          <div className="post-comment">
            <div style={{fontSize: '14px', fontWeight: 'bold', paddingLeft: '16px', paddingBottom: '7px'}}>좋아요 {likeCount}개</div>
            <div style={{fontSize: '14px', padding: '0px 16px', paddingBottom: '7px'}}>
              <span style={{fontWeight: 'bold'}}>instagram_{post}</span>
              {textSpread ? text : truncate(text, 20)}
              {!textSpread && (<span className="hover" style={{color: 'GrayText'}} onClick={() => setTextSpread(true)}> 더 보기</span>)}
            </div>
            {
              comments.map((comment) => (
                <div className="post-comment-comment">
                  <span style={{fontSize: '14px', fontWeight: 'bold'}}>insta_</span>
                  <span style={{fontSize: '14px'}}>{comment}</span>
                </div>
              ))
            }
            <span style={{fontSize: '10px', color: 'gray', paddingLeft: '16px'}}>1일 전</span>
          </div>
          <div className="post-comment-input">
            <img src="/smile.png" alt="smile" style={{marginRight: '10px'}}/>
            <input placeholder="댓글 달기 ..."/>
          </div>
        </div>
    </div>
  )
}
