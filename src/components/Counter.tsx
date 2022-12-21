import { useState ,ChangeEvent} from "react"

const Counter :React.FC=() => {
  const [count,setCounter] = useState<number>(0)
  const increment =() => {
    setCounter(count + 1)
  }
  const decrement =() => {
    setCounter(count - 1)
  }
  const SetCounterByValue =(e:ChangeEvent<HTMLInputElement>) => {
    setCounter(+ e.target.value) 
  }
  return (
    <div className="">
       <div className="bg-amber-400">
       {count}
       </div>
       <input type="text"
        value={count} 
        onChange={e => SetCounterByValue(e)} 
        className="w-20 rounded-full mx-4 p-2 border-4 border-pink-400 h-10" />

    </div>
  )
}
export default Counter