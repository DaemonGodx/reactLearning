import { useState,useCallback, useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState(0)
  const [length, setLength] = useState(20)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const characters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (numberAllowed) {
        chars += numbers;
    }
    if (charAllowed) {
        chars += characters;
    }
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber);
    }
    setPassword(password);
}, [length, numberAllowed, charAllowed,setPassword]);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect(() => {
    generatePassword();
}, [generatePassword]);

  return (
    <>
      <div className='fixed m-0 p-0 w-full h-screen bg-[#1d2b399b] ' >
        <div className='mt-50 w-[50%] h-[30%] bg-amber-50 mx-auto  '>
          <h1 className='text-2xl font-bold underline text-center mt-10'>Password Generator</h1>
          <div>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
              ref={passwordRef}
              />
              <button
                onClick={copyPasswordToClipboard}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              >copy</button>
            </div>
          </div>
           <div className='flex text-sm gap-x-2'>
          <div>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
