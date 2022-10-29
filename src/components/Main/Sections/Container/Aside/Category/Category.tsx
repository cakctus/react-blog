import CategoriesItem from "./CategoriesItem"
import SectionTitle from "../../../../SectionTitle/SectionTitle"

import "./category.scss"

type Props = {}

const Category = (props: Props) => {
  return (
    <>
      <SectionTitle title="Categories" width="100" />
      <CategoriesItem />
    </>
  )
}

export default Category
