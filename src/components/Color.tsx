import { useContext, useReducer ,useEffect, useState} from "react"
import { Theme } from "../Context/Context.Context"
import { RgbContext } from "../Context/RgbContext"
import Range from "./Range"
type Color = {red:number,green:number,blue:number}
const initialState :Color= {red:255,green:0,blue:0}
export const reducer = (state:Color,action:{type:string,payload:number}) => {
  if(action.type ==='RED') {
    const red:number =action.payload
    return {...state,red}
  }
  if(action.type ==='GREEN') {
    const green:number =action.payload
    return {...state,green}
  }
  
  if(action.type ==='BLUE') {
    const blue:number =action.payload
    return {...state,blue}
  }
  
 return state 
}
const Color :React.FC = () => {
  const {red,green,blue,dispatch} = useContext(RgbContext)!
    const onChangeColor = (color:string,e:React.ChangeEvent<HTMLInputElement>) => {
       dispatch({type:color,payload:+ e.target.value})
    }
  return (
    <div className= {`container w-full `}>
            
          <div className={`p-4 mt-2 flex flex-row rounded-2xl`} style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`}} >
                  <Range id={1}  value={red} updating={onChangeColor}  label={'RED'}/>
                  <Range id={1}  value={green} updating={onChangeColor}  label={'GREEN'}/>
                  <Range id={1}  value={blue} updating={onChangeColor}  label={'BLUE'}/>
              
          
           
          </div>
          <div className="my-4">
            <hr />
              <div className="flex flex-row justify-around font-extrabold">
                <div className="">
                  <p className="my-2">Red</p>
                <input type="number" className="w-20 p-3 rounded-lg h-9  border-4"
                 onChange={e=> dispatch({type:'RED',payload:+ e.target.value})}
                />
                </div>
                <div className="">
                  <p className="my-2">Green</p>
                <input type="number" className="w-20 p-3 rounded-lg h-9  border-4" 
                onChange={e=> dispatch({type:'GREEN',payload:+ e.target.value})}
                />
                </div>
                <div className="">
                  <p className="my-2">Blue</p>
                <input type="number" className="w-20 p-3 rounded-lg h-9  border-4" 
                onChange={e=> dispatch({type:'BLUE',payload:+ e.target.value})}
                />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Color