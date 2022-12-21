import  * as React from "react"
import { RgbContext } from "../Context/RgbContext"
import Range from "./Range"


interface adProps  {
 id:number,label:string,value:number,updating:(e:string,event:React.ChangeEvent<HTMLInputElement>) =>void
}
export interface adjustmentColor {
  adjustment:React.ComponentType<adProps>
}
export const AColor =({Adjustment}:{Adjustment:React.ComponentType<adProps>}) => {
  
  const {red,green,blue,dispatch} = React.useContext(RgbContext)!
  const onChangeColor = (color:string,e:React.ChangeEvent<HTMLInputElement>) => {
     dispatch({type:color,payload:+ e.target.value})
  }
return (
  <div className= {`container w-full `}>
          
        <div className={`p-4 mt-2 flex flex-row rounded-2xl`} style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`}} >
                <Adjustment id={1}  value={red} updating={onChangeColor}  label={'RED'}/>
                <Adjustment id={1022}  value={green} updating={onChangeColor}  label={'GREEN'}/>
                <Adjustment id={9981}  value={blue} updating={onChangeColor}  label={'BLUE'}/> 
            
         
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

export default AColor