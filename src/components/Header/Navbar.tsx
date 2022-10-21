import menuArray from "../../data/navbar"
import MenuItems from "./MenuItems"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <ul className="menus">
        {menuArray.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
