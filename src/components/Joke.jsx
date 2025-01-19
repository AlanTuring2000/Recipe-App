import { useState } from "react";


function Joke() {
  const [isShown, setIsShown] = useState(false);
  const [markComment, setMarkComment] = useState("");

  function toggleShown() {setIsShown(prevIsShown => !prevIsShown)}

  function enterMark(formData) {
    const jokeMark = formData.get("mark").trim();
    if (jokeMark >= 15) {setMarkComment("Oh, thank you! :-)")}
      else if (jokeMark !== "" && jokeMark <= 5)
            {setMarkComment("Oh, sorry! :-(")}
      else {setMarkComment("I'll do better next time!")}}

    return (
      <div className="my-4 border-2 rounded-xl border-blue-400
            bg-cyan-100 p-4">
        <p className="mb-2 flex justify-start items-center text-blue-700">
          <span>What is the difference between a rabbit ?</span>
          <button onClick={toggleShown} className="ml-4 border-2 rounded-md
              border-purple-500 bg-purple-200 p-2 text-purple-900">
                {isShown ? "Hide" : "Show"} punchline</button></p>
        {isShown ? <p className="text-purple-500 font-medium">He has both
              ears the same length, especially the right one</p> : null}
        {/* Although the modern way is with the ternary operator, it is also
        possible to use '&&' : {isShown && <p className="...">...</p>} : */}
        {isShown && <div className="my-2 rounded-md bg-sky-200 flex
              flex-col md:flex-row text-blue-700 p-2">
          <span className="p-2">Your mark for the joke (/20)</span>
          <form action={enterMark}>
            <input name="mark" className="mx-3 w-8 rounded-md
                  border-purple-700 bg-purple-100 px-2 py-1
                  text-blue-800" />
            <button type="submit" aria-label="Click to enter the mark"
                  className="mx-4 border-2 border-purple-500 rounded-md
                  bg-purple-200 p-2 text-purple-900">Enter mark</button>
          </form>
          {markComment ? <span className="p-2">{markComment}</span> : null}
        </div>}</div>)}


export { Joke }