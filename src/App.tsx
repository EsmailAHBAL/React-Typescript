import { Children, useState } from 'react'

import A from './components/A'
import AColor from './components/AColor';
import Color from './components/Color';
import Counter from './components/Counter';
import Range from './components/Range';
import ThisChildren from './components/ThisChildren';
import UserReducer from './components/UseReducer';

function App() {
  const [count, setCount] = useState(0)
  const alertName = (name:string) :void => {
  console.log('hello');
  
    alert(name)
  }
  return (
    <div className="grid gap-4 grid-cols-3">
    <div><UserReducer /></div>
    <div><Color /></div>
     <AColor Adjustment={Range}/>   
  </div>
  )
}

export default App
