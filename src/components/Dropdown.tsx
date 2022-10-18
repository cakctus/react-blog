import React from "react"
import MenuItems from "./MenuItems"
import MenuItems2 from "./MenuItems2"
type Props = {
  submenus: any
  dropdown: any
  depthLevel: any
}

const Dropdown = ({ submenus, dropdown, depthLevel }: Props) => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
  return (
    <ul
      className={`${dropdownClass} dropdown-item ${
        dropdown ? "show" : "dropdown"
      }`}
    >
      {submenus.map((submenu: any, index: any) => (
        <MenuItems2 items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  )
}

export default Dropdown
