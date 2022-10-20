import { useState } from "react"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Search from "./Search"
import SearchInput from "./SearchInput"
import Context from "../../context/context"
import { AppContextInterface } from "../../context/context"
import ProductsSubmenu from "./ProductsSubmenu"

type Props = {}

const Header = (props: Props) => {
  const [show, setShow] = useState<boolean>(false)
  const [products, setProducts] = useState(false)
  const [productsCoords, setProductsCoords] = useState({})

  const sampleAppContext: AppContextInterface = {
    setShow,
    setProducts,
    setProductsCoords,
    productsCoords,
    products,
  }

  return (
    <>
      <Context.Provider value={sampleAppContext}>
        <header className="header">
          <div className="header-container">
            {show ? (
              <SearchInput />
            ) : (
              <>
                <div className="navbar-header">
                  <Hamburger />
                  <Logo />
                  <Navbar />
                  <Search />
                </div>
                {products && <ProductsSubmenu />}
              </>
            )}
          </div>
        </header>
      </Context.Provider>
    </>
  )
}

export default Header
