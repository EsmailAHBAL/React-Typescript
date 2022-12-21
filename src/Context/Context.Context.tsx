import { createContext } from "react";
type ValueType = {
  dark:string,light:string
}
const defaultValue :ValueType= {
   dark :'bg-amber-400 text-white',
  light:'bg-white text-black'
}
export const Theme = createContext(defaultValue)
export const ThemeProvider =({children}:{children:React.ReactNode}) => {
  return  <Theme.Provider value={defaultValue}>{children}</Theme.Provider>
 }

