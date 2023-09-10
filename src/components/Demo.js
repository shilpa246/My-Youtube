import React, { useMemo,useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
  const [text,setText]=useState(0);
    // eslint-disable-next-line
  const [isDarkTheme,setIsDarkTheme]= useState(false)
  // eslint-disable-next-line
  console.log("Rendering....") 
 // eslint-disable-next-line
  const prime= useMemo(()=>findPrime(text),[text]);
  // const prime= findPrime(text)
  return (
    <div 
    className={
      "m-4 p-2 w-96 h-96 border border-black" +(isDarkTheme && " text-white bg-gray-900") }
     >
      <div>
        <button className="m-10 p-2 bg-green-200" onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
      </div>
      <div>
        <input
        className='border border-black w-72 px-2'
         type="number" 
         value={text}
          onChange={(e)=>setText(e.target.value)} />
      </div>
      <div>
        <h1 className='mt-4 font-bold text-xl'>nth Prime : {prime}</h1>
      </div>
    </div>
  )
}

export default Demo
