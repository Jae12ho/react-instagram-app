import React from 'react'
import './Modal.css'

export default function Modal({ setModalOpen }) {
  return (
    <div className="presentation">
        <div className="wrapper-modal">
            <span onClick={() => setModalOpen(false)} className="modal-close">X</span>
            <div className="modal">
                <div className="modal_content">
                    <h4 className="modal_title">새 게시물 만들기</h4>
                    <img/>
                    <div className="modal_body">사진과 동영상을 여기에 끌어다 놓으세요</div>
                    <button className="modal_button">컴퓨터에서 선택</button>
                </div>
            </div>
        </div>
    </div>
  )
}
