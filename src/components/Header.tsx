import Link from "next/link"
import "../style/Header.css"

import React from 'react'

const Header = () => {
  return (
    <div className="header">
      {/*left*/}
      <div>
        <h1 className="logo">M.A</h1>
      </div>
      {/*right*/}
      <div className="header-right">
        <ul className="header-links">
        <li >
          <Link className="header-nav" href={"/"}>Home</Link>
        </li>

        <li >
          <Link className="header-nav" href="/About">About Us</Link>
        </li>

        <li >
          <Link className="header-nav" href={"/Contact"}>Contact Us</Link>
        </li>
        
        </ul>
      </div>
    </div>
  )
}

export default Header
