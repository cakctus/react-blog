import { useState, useEffect, useRef, useContext } from "react"
import Dropdown from "./Dropdown"
import Context from "../../context/context"

type Props = {
  items: any
  depthLevel?: any
}

const MenuItems = ({ items, depthLevel }: Props) => {
  const context = useContext(Context)
  const [dropdown, setDropdown] = useState(false)
  // const [products, setProducts] = useState(false)
  // const [productsCoords, setProductsCoords] = useState({})
  let ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [dropdown])

  const onMouseEnter = (event: any) => {
    if (ref.current?.textContent === "Products") {
      context?.setProducts(true)
      const { left, top, right, bottom } = ref.current.getBoundingClientRect()
      context?.setProductsCoords({
        left,
        top,
        right,
        bottom,
      })
    }
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = (e: any) => {
    if (e.relatedTarget.className !== "products-submenu") {
      context?.setProducts(false)
    }
    window.innerWidth > 960 && setDropdown(false)
  }

  const closeDropdown = () => {
    dropdown && setDropdown(false)
  }

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <a href={items.url}>{items.title}</a>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  )
}

export default MenuItems
