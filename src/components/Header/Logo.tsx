import React from "react"
import logo from "../../assets/img/logo.png"

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="navbar-logo">
      <img src={logo} alt="" />
    </div>
  )
}

export default Logo
