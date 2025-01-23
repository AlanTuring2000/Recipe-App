/* 'useState' is used to manage variables that are part of the component's UI
state (eg inputs); it triggers a re-render of the component whenever such a
variable is modified via its associated setter "useState[1]" (usually named
according to the variable's name, eg "var" -> "setVar"). To be perfectly
precise, React renderings are asynchronous, and multiple state updates might
be batched together for performance; re-renders occur when the new state is
actually used, and only then is the variable updated.
'useRef' is used to manage variables that need to persist across renders (eg
timers); it doesn't trigger re-renders when the value inside the ref changes.
Here we will display a list; in React, it's better if each element of the
list has its own key. So I define a "keyCounter" starting at 0 and managed
by a 'useRef' */
import { useRef } from "react";


function AddIngredient({setIngredients}) {
  // Create a ref to store the key counter, initialized as 0
  const keyCounter = useRef(0);

  // Function to handle the form for adding an ingredient (see
  // "SignupForm.jsx" for explanations)
  function enterIngredient(formData) {
    // Get the value from the input field, and remove spaces before and
    // after the user's input
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient) {
      // Increment the keyCounter for the next unique key
      const newKey = keyCounter.current++;
      // Add the new ingredient to the "ingredients" array with the new
      // unique key
      setIngredients(prevIngredients => [...prevIngredients, { key: newKey,
            ingredient: {ingName: newIngredient, ingState: 1}}])}}


  return (<>
    <form action={enterIngredient} className="mt-10 mb-6 flex flex-col
          sm:flex-row justify-center items-center font-arial">
      <input name="ingredient"
            className="grow max-w-96 min-w-72 mx-2 my-1 border-2 rounded-md
            border-blue-500 bg-cyan-100 px-4 py-2 text-cyan-800
            placeholder-cyan-800 placeholder-opacity-50"
            placeholder="e.g. oregano" />
      <button type="submit" aria-label="click to enter the ingredient"
            className="mx-2 my-1 border-2 rounded-md border-blue-500
            bg-cyan-800 px-4 py-2 text-cyan-100">
            + Add Ingredient</button></form></>)}  


export { AddIngredient };