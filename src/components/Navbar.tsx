import React, { useState, useEffect, useRef } from "react"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import MenuItems from "./MenuItems"

type Props = {}

const Navbar = (props: Props) => {
  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/services",
      submenu: [
        {
          title: "web design",
          url: "web-design",
        },
        {
          title: "web development",
          url: "web-dev",
          submenu: [
            {
              title: "Frontend",
              submenu: [
                {
                  title: "Reactjs",
                  url: "react",
                },
                {
                  title: "Vuejs",
                  url: "vue",
                },
              ],
            },
            {
              title: "Backend",
              submenu: [
                {
                  title: "NodeJS",
                  url: "node",
                  submenu: [
                    {
                      title: "Express",
                      url: "express",
                    },
                    {
                      title: "NextJs",
                      url: "next",
                    },
                  ],
                },
                {
                  title: "PHP",
                  url: "php",
                },
              ],
            },
          ],
        },
        {
          title: "SEO",
          url: "seo",
        },
      ],
    },
    {
      title: "About",
      url: "/about",
    },
  ]
  const [coord, setCoord] = useState<number>(0)
  const [display, setDisplay] = useState<boolean>(true)
  const liItem = useRef<HTMLUListElement | null>(null)

  const enterHandler = (e: any) => {
    // console.log(e.target)
    // console.log(e.target.classList.contains("item__dropdown"))
    if (
      e.target.classList.contains("item__dropdown") &&
      e.target.children[2].className === "navbar-list__subclass"
    ) {
      // console.log("block")
      e.target.children[2].style.display = "block"
    }
    if (e.target.classList.contains("item__dropdown") && !display) {
      e.target.children[2].style.display = "none"
    }
  }

  const leaveHandler = (e: any) => {
    console.log(e.target.children[2])
    if (!e.target.children[2]) {
      setDisplay(false)
      // e.target.children[2].style.display = "none"
    }
  }

  return (
    <nav className="navbar">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
    // <nav className="navbar">
    //   <ul className="navbar-list">
    //     <li className="navbar-item">Home</li>

    //     <li
    //       className="navbar-item item__dropdown"
    //       onMouseEnter={enterHandler}
    //       onMouseLeave={leaveHandler}
    //     >
    //       <span>Features</span>
    //       <span className="arrow-drop">
    //         <ArrowDropDownIcon />
    //       </span>
    //       <ul className="navbar-list__subclass" ref={liItem}>
    //         <li className="navbar-item__subclass">Multi Dropdown</li>
    //         <li className="navbar-item__subclass">ShortCodes</li>
    //         <li className="navbar-item__subclass">Site map</li>
    //         <li className="navbar-item__subclass">Error page</li>
    //       </ul>
    //     </li>

    //     <li className="navbar-item">
    //       <span>Mega Menu</span>
    //       <span className="arrow-drop">
    //         <ArrowDropDownIcon />
    //       </span>
    //     </li>

    //     <li className="navbar-item item__dropdown" onMouseEnter={enterHandler}>
    //       <span>Documentation</span>
    //       <span className="arrow-drop">
    //         <ArrowDropDownIcon />
    //       </span>
    //       <ul className="navbar-list__subclass" ref={liItem}>
    //         <li className="navbar-item__subclass">Web doc</li>
    //         <li className="navbar-item__subclass">Video doc</li>
    //       </ul>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default Navbar
