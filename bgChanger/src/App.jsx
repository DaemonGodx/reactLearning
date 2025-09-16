import { useState } from 'react'

import './App.css'

function App() {
  const [bgcolour, setbgchange] = useState("white");

 

  return (
    <>
    <div className='w-full h-screen duration-200 '
    style={{ backgroundColor: bgcolour }}
>
      <div className='fixed bottom-5 left-0 right-0 mx-[auto] w-[60%] bg-amber-400  h-[7vh] rounded-2xl flex items-center justify-around'> 
        <button onClick={()=>setbgchange("red")} className=' bg-red-600 w-[12%] rounded-2xl h-[70%]  text-white'>Red</button>
         <button onClick={()=>setbgchange("blue")} className=' bg-blue-600 w-[12%] rounded-2xl h-[70%]  text-white'>Blue</button>
          <button onClick={()=>setbgchange("pink")} className=' bg-pink-600 w-[12%] rounded-2xl h-[70%]  text-white'>Pink</button>
           <button onClick={()=>setbgchange("black")} className=' bg-black w-[12%] rounded-2xl h-[70%] text-white'>Black</button>
            <button onClick={()=>setbgchange("green")} className=' w-[12%] rounded-2xl h-[70%]  text-white bg-green-600'>Green</button>
      </div>

    </div>
      
      
    </>
  )
}

export default App
