import React, { useState } from 'react'
import "./Nav.css"

function Nav() {
  const [isClicked, setIsClicked] = useState(false);
  const [searchText, setSearchText] = useState("검색");

  const searchClick = (e) => {
    setIsClicked(!isClicked);
    console.log(e.target)
  }

  const onChangeSearch = (e) => {
    setSearchText(e.target.value);
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + "..." : str
  }

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
          isClicked ? <input className="search" placeholder="검색" value={searchText} onBlur={searchClick} onChange={onChangeSearch} autoFocus />
          : <div className="search" onClick={searchClick}><img className="magnifier" alt="magnifier" src="/magnifier.png"/>{truncate(searchText, 15)}</div>
        }

        <div className="itemBox">
          <div className="item"><img alt="home" src="/home.png"/></div>
          <div className="item"><img alt="massanger" src="/paperairplane.png"/></div>
          <div className="item"><img alt="more" src="/more.png"/></div>
          <div className="item"><img alt="explore" src="/compass.png"/></div>
          <div className="item"><img alt="heart" src="/heart.png"/></div>
          <div className="item"><img alt="user" src="/user.png"/></div>
        </div>
      </div>
    </nav>
  )
}

export default Nav