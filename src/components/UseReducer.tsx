import { useContext, useReducer } from "react"
import { RgbContext } from "../Context/RgbContext"

type NOTE= {
  note:number
  communication:number
  ,cof:number,
}
type payloadType = 'UPDATE_NOTE' | "UPDATE_C" | "UPDATE_COF" | 'ADD'
const finalNote = (data:NOTE) :any => {
  const finalNote:number = (data.note + data.communication) * data.cof
  return {...data,finalNote}
}
const initialState:NOTE= {note:0,cof:1,communication:0}
const reducer =(state:NOTE,action:{type:payloadType,payload?:number}) => {
  if(action.type === 'ADD') {
  
    return finalNote(state)
  }
  if(action.type === 'UPDATE_NOTE') {
    const newNote :number = action.payload !
    
    return {...state,note:newNote}
  }
  if(action.type === 'UPDATE_C') {
    const newNote :number = action.payload !
    return {...state,communication: newNote}
  }
  if(action.type === 'UPDATE_COF') {
    const newNote :number = action.payload!
    return {...state,cof:newNote}
  }
  return state
}
const UserReducer :React.FC= () => {
const [notes,dispatch] = useReducer(reducer,initialState)
const updatingState =()=> (dispatch({type:'ADD'}))
const getRedColor = useContext(RgbContext)
  return (
    <div className="bg-amber-300 block">
      {getRedColor?.red}
      <div className="flex flex-row justify-center p-7">
          <input type="text" className="w-20 h-4 p-4 rounded-full" 
                                  onChange={(e) => 
                                    {
                                      dispatch({type:'UPDATE_NOTE',payload:+ e.target.value})
                                      updatingState()
                                    }
                                  }

          />
          <input type="text" className="w-20  h-4 p-4 rounded-full mx-4"
                             onChange={(e) => {dispatch({type:'UPDATE_C',payload:+ e.target.value});updatingState()}}

          />
          <input type="text" className="w-20 h-4 p-4 rounded-full mx-4"
          
          onChange={(e) => {dispatch({type:'UPDATE_COF',payload:+ e.target.value});updatingState()}}


          />
          
      </div>
        <div className="text-center">
          <p className="font-thin font-serif">Your Result 🤨 </p>
          <div className="text-bold text-4xl p-2">
            {notes.finalNote}
          </div>
        </div>
     
    </div>
  )
}

export default UserReducer