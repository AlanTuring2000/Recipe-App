import { useState } from "react";


function RecipeLikes() {
  const [count, setCount] = useState(0);
  function handleClickMinus() {setCount(prevCount => prevCount-1)}
  function handleClickPlus() {setCount(prevCount => prevCount+1)}

  return(
    <div className="relative inset-x-0 my-8 py-4 flex justify-center
          items-center border-2 rounded-xl border-blue-400 bg-violet-200">
      <span className="text-xl font-semibold text-blue-700">Number of liked
            recipes :</span>
      <div aria-label={`The current number is ${count}`} className="relative
            ml-8 w-12 h-12 flex justify-center items-center bg-blue-800
            text-violet-300 rounded-full">{count}
        <button onClick={handleClickMinus} aria-label="Subtract one"
              className="absolute top-8 -left-2 w-6 h-6 rounded-full
              bg-fuchsia-300 text-blue-800">-</button>
        <button onClick={handleClickPlus} aria-label="Add one"
              className="absolute top-8 -right-2 w-6 h-6 rounded-full
              bg-fuchsia-300 text-blue-800">+</button></div></div>)}


export { RecipeLikes }