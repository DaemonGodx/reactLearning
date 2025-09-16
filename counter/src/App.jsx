import { useState } from 'react'
import './App.css'




function App() {
  let [count, setCount] = useState(0);

function increment() {
  setCount(count=count + 1);
  if(count>20){
    setCount(count=0);
    alert("count cant be more than 20");
  }
  console.log(count);
}
function Decrement() {
  setCount(count=count - 1);
  if(count<0){
    setCount(count=0);
    alert("count cant be less than 0");
  }


  console.log(count);
}


  return (
    <>
      <h1>Counter App</h1>
      <h2>Currunt count is {count} </h2>

      <button onClick={increment}>Increment {count} </button>
      <br />
      <button onClick={Decrement}>Decrement {count}</button>
     
    </>
  )
}

export default App
