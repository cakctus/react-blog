import { useContext } from "react"
import SearchIcon from "@mui/icons-material/Search"
import Context from "../context/context"

type Props = {}

const Search = (props: Props) => {
  const context = useContext(Context)

  return (
    <div
      className="navbar-search"
      onClick={() => context?.setShow((prev: boolean) => !prev)}
    >
      <SearchIcon />
    </div>
  )
}

export default Search
