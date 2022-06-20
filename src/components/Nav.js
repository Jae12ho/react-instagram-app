import React, { useRef, useState } from 'react'
import Modal from './Modal';
import "./Nav.css"

function Nav({ truncate }) {
  const [isClicked, setIsClicked] = useState(false); // 검색창
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // 모달
  const [followers, setFollowers] = useState(["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8", "user9", "user10", "user11"]); // 팔로워 (하트 버튼 눌렀을때 나오는 것들)

  // 검색창 - 클릭했을때 작동 함수
  const searchClick = (e) => {
    setIsClicked(!isClicked);
    console.log(e.target)
  }
  // 검색창 - 입력할때 value값 바꿔주는 함수
  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
  }

  // 모달 - 새 게시글 작성 버튼 눌렀을때 작동 함수
  const modalOpenHandle = () => {
    document.querySelector('title').innerHTML = "새 게시물 만들기 • Instagram";
    setModalOpen(true);  
  }

  // 드롭다운 (하트, 프로필 버튼)
  const DropdwonClick = (e) => {
    e.target.parentNode.childNodes[1].className = `${e.target.parentNode.childNodes[1].className == "menu" ? "menu active" : "menu"}`;
  };

  return (
    <nav className="Nav">
      <div className="NavBar">
        <div>
            <img
                alt="Instagram-logo"
                src="/logo.png"
                className="nav_logo"
                onClick={() => window.location.reload()}
            />
        </div>
        {
          isClicked ? 
          <div className="menu-container">
            <input className="search outline-none" placeholder="검색" value={searchText} onBlur={searchClick} onChange={onChangeSearch} autoFocus />
            <div className="menu active">
              <ul className="search-dropdown">
                <h3 className="menu-title">최근 검색 항목</h3>
              </ul>
            </div>
          </div>
          : <div className="search" onClick={searchClick}><img className="magnifier" alt="magnifier" src="/magnifier.png"/>{(searchText !== "") ? truncate(searchText, 15) : "검색"}</div>
        }

        <div className="itemBox">
          <div className="item"><img alt="home" src="/home.png"/></div>
          <div className="item"><img alt="massanger" src="/paperairplane.png"/></div>
          <div className="item" onClick={() => { modalOpenHandle() }}><img alt="more" src="/more.png"/></div>
          <div className="item"><img alt="explore" src="/compass.png"/></div>
          <div className="item menu-container">
            <img alt="heart" src="/heart.png"  onClick={DropdwonClick}/>
            <div className="menu">
              <ul className="heart-dropdown">
              <div className="menu-title">이번 달</div>
                {
                  followers.map((follower, index) => (
                    <li key={index}>
                      <div className="follower-img"></div>
                      <p><b>{follower}</b>님이 회원님을 팔로우하기 시작했습니다.</p>
                      <button>팔로잉</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="item menu-container">
            <img onClick={DropdwonClick} alt="user" src="/user.png"/>
            <div className="menu">
              <ul className="profile-dropdown">
                <li><a href="">프로필</a></li>
                <li><a href="">저장됨</a></li>
                <li><a href="">설정</a></li>
                <li><a href="">계정 전환</a></li>
                <li><a href="">로그아웃</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {
        modalOpen && (
          <Modal setModalOpen={setModalOpen}/>
        )
      }
    </nav>
  )
}

export default Nav