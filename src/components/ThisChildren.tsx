import { ReactNode, useEffect, useState } from "react"
type formTp= {data :{name:string,task:string},status:boolean}
const ThisChildren :React.FC<{children :ReactNode}>= ({children }) => {
const [state,setState] = useState<formTp[] | null>(
null  )

const [name,setName] = useState<string>('')
const [task,setTask] = useState<string>('')
const [count,setCount]= useState<number>(0)
useEffect(() => {
  setTimeout(() => {
     setCount(count + 1)
  }, 2000);
},[count])
const addingNewData=() => {
  setState(state  => {
    if(!state) return [{data:{name:name,task:task},status:false}]
    return  [...state,{data:{name:name,task:task},status:false}]
  })
  setName('') 
  setTask('')
}
const HidingItem =(name:string):void => {
 setState((state:any) => {
  const newState = state.map((item:formTp)=> {
    if(item.data.name === name) return ({...item,status:true})
    return item

  })
  return newState
 })

}
  return (
    <div className="bg-sky-50 text-center border border-double border-l-amber-500 p-4">
      {children}
      <div className="text-4xl font-extrabold">
        {count}
      </div>
      <div className=" p-4 flex flex-row justify-center">
        <input type="text"
        value={name} 
        onChange={e => setName(e.target.value)}
        className="w-48 rounded-full mx-4 p-2 border-4 border-pink-400 h-10" />
        <input type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
         className="w-48 px-4 rounded-full p-2 border-4 border-pink-400 h-10"  />

         <button className="bg-sky-500 rounded-lg p-6-h-8 mx-2 w-20 text-white"
         onClick={() => addingNewData()}
         >
          New Data 
         </button>
      </div>
       {
       state && state.map((item:formTp)=> (
         !item.status ? ( <div className="">
         <div className='box-border h-32 border-4  bg-red-200 flex flex-row justify-around p-4 rounded-full text-bold my-4' >
    <div className="mx-4">{item.data.name}</div>
    <div className="">{item.data.task}</div>
    </div>
    <div className="p-4">
      <button className="bg-amber-400 p-3 rounded-lg"
      onClick={() => 
        HidingItem(item.data.name)}
      >
         Remove ❌ 
      </button>
    </div>
      </div>):null
        ))
       }
       </div>
  )
}

export default ThisChildren