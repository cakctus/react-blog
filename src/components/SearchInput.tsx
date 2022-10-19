import { useContext } from "react"
import CloseIcon from "@mui/icons-material/Close"
import Context from "../context/context"

type Props = {}

const SearchInput = (props: Props) => {
  const context = useContext(Context)

  return (
    <form className="search-box">
      <div className="search-input">
        <input type="text" placeholder="search..." />
      </div>
      <div
        className="close-icon"
        onClick={() => context?.setShow((prev: boolean) => !prev)}
      >
        <CloseIcon />
      </div>
    </form>
  )
}

export default SearchInput
