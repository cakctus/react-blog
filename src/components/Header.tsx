import React from "react"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Search from "./Search"

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="navbar-header">
            <Hamburger />
            <Logo />
            <Navbar />
            <Search />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
