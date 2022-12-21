import * as React from 'react'

const Range :React.FC <{id:number,value:number,label:string,
  updating:(s:string,a:React.ChangeEvent<HTMLInputElement>)=>void}> 
  = ({id,value,label,updating}) => {
 
  return (
    <div className="">
      <label className='text-lg font-extrabold mx-2' >
        {label.toLocaleLowerCase()} : 
      </label>
     <input  max={255} type="range" className="" onChange={v => updating(label,v)} value={value}/>
    </div>
  )
}
export default Range