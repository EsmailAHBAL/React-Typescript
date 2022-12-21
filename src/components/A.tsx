import { ReactElement, ReactNode, useEffect, useState } from "react"
import Counter from "./Counter"
import ThisChildren from "./ThisChildren"
const anyDataa:string[]= ['a','b','s']
const A :React.FC <{name:string,asProps :(n:string)=> void,}>= ({name,asProps}) => {
  const [getName,setName] = useState<string>('')
  const [data,setData] = useState<string[]>([...anyDataa])
  const testingAlertName = () => {
    asProps(getName)
  }

  useEffect(() => {
    
    console.log('name changed')
  },[getName])
  return(
    <div>
      <div className="m-4 flex justify-center">
      <Counter />
     <ThisChildren>
        you 😔  😠  🙂 😿 
      </ThisChildren>
      </div>
    <div className="flex justify-center items-center h-full">
      
 {data.map((i:string)=> (
    <div className="" key={i}>
      {i} ++++++++++++
    </div>
  ))}
      <input type="text" className="rounded-lg w-44 p-2 h-8 mt-4 mx-5 my-4" 
      onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-amber-200 p-2 rounded-2xl w-20 h-10 m-3"
      onClick={() => testingAlertName()}
      
      >
        Alert
      </button>
    </div>
    </div>
  )
}

export default A