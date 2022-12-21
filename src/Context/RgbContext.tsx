import { createContext, useReducer } from "react"

import {reducer} from '../components/Color'

interface RGB {
  red:number,green :number,blue:number
}
const initialState :RGB= {red:255,green:0,blue:0}
type Adjustment = {type:string,payload:number}
interface RgbWithReducer extends RGB {
  dispatch:React.Dispatch<Adjustment>
}

export const RgbContext = createContext<RgbWithReducer | null>(null)
export const RgbContextProvider = ({children}:{children:React.ReactNode}) => {
  const [rgb,dispatch] = useReducer(reducer,initialState)
  return <RgbContext.Provider value={{...rgb,dispatch}}>{children}</RgbContext.Provider>
}