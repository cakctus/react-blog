import React from "react"
import MenuItems3 from "./MenuItems"
type Props = {
  submenus: any
  dropdown: any
  depthLevel: any
}

const Dropdown2 = ({ submenus, dropdown, depthLevel }: Props) => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
  return (
    <ul
      className={`${dropdownClass} dropdown-item2 ${
        dropdown ? "show" : "dropdown"
      }`}
    >
      {submenus.map((submenu: any, index: any) => (
        <MenuItems3 items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default Dropdown2
