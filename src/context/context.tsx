import React, { createContext } from "react"

export interface AppContextInterface {
  setShow: any
}

const Context = createContext<AppContextInterface | null>(null)

export default Context
