import { useState, useContext } from "react"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Search from "./Search"
import SearchInput from "./SearchInput"
import Context from "../context/context"
import { AppContextInterface } from "../context/context"

type Props = {}

const Header = (props: Props) => {
  const [show, setShow] = useState<boolean>(false)

  const sampleAppContext: AppContextInterface = {
    setShow,
  }

  return (
    <>
      <Context.Provider value={sampleAppContext}>
        <header className="header">
          <div className="header-container">
            {show ? (
              <>
                <div className="header-container">
                  <SearchInput />
                </div>
              </>
            ) : (
              <div className="navbar-header">
                <Hamburger />
                <Logo />
                <Navbar />
                <Search />
              </div>
            )}
          </div>
        </header>
      </Context.Provider>
    </>
  )
}

export default Header
