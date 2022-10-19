import React, { createContext } from "react"

export interface AppContextInterface {
  setShow: any
  setProducts: any
  setProductsCoords: any
  productsCoords: any
  products: any
}

const Context = createContext<AppContextInterface | null>(null)

export default Context
