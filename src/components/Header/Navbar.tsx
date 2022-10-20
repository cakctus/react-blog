import { useContext } from "react"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import MenuItems from "./MenuItems"
import SearchInput from "./SearchInput"
import Context from "../../context/context"

type Props = {}

const Navbar = (props: Props) => {
  const context = useContext(Context)
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
              url: "frontend",
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
              url: "backend",
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
                  submenu: [
                    {
                      title: "Laravel",
                      url: "laravel",
                    },
                    {
                      title: "Symfony ",
                      url: "symfony ",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "SEO",
          url: "/seo",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "Documentation",
      url: "/docs",
      submenu: [
        {
          title: "Web doc",
          url: "/docs",
        },
        {
          title: "Video doc",
          url: "/docs",
        },
      ],
    },
    {
      title: "About",
      url: "/about",
    },
  ]

  return (
    <nav className="navbar">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
