/* transform a string which has the form of an array into the corresponding
array */
function parseRecipe(recipeStr) {
  /* splits the input into individual strings (group the characters
  corresponding to true strings and removes the brackets). The first string
  is the title; the following strings are the elements of "ingredients";
  when the first "(" is seen, it is the first couple of "instructions"; when
  the last string arrives it is the "presentation", and it means that the
  couple before it ended "instructions" */
  const cleanedStrings = recipeStr
    .replace(/[']/g, "")    // Remove any single or double quotes
    .split(/[\[\],]+/)      // Split by brackets or commas
    .map(s => s.trim())     // Trim each string
    .filter(s => s);        // Remove empty strings
  
  // the first element is "title"
  const title = cleanedStrings.shift();

  // the following (up to the first tuple start) compose "ingredients"
  const ingredients = [];
  while (!cleanedStrings[0].startsWith('(')) {
        ingredients.push(cleanedStrings.shift())}

  // all the pairs of elements between parentheses are the couples of
  // "instructions"
  const instructions = [];
  while (cleanedStrings[0].startsWith('(')) {
    const tuple = [];
    while (!cleanedStrings[0].endsWith(')')) {
      tuple.push(cleanedStrings.shift().replace(/[()]/g, ''))}
    tuple.push(cleanedStrings.shift().replace(/[()]/g, ''));
    instructions.push(tuple)}

  // the remaining string is "presentation"
  const presentation = cleanedStrings.join(' ');

  // Return the structured recipe object
  return [title, ingredients, instructions, presentation]}


function DisplayRecipe({ recipeStr }) {
  /* "recipeStr" is currently the string that gpt returned; it has the form
  of an array, with the recipe's title, ingredients, instructions and
  presentation located at index 0, 1, 2 and 3 respectively, but it is not an
  array : each character representing the array is a character of the string.
  So the first thing is to replace it with a true array. This is the goal of
  the "parseRecipe" function above that I wrote with ChatGPT */
  const recipe = parseRecipe(recipeStr);
  const title = recipe[0];
  const ingredients = recipe[1];
  const instructions = recipe[2];
  const presentation = recipe[3];


  return (
    <section className="mt-10 border-2 rounded-xl border-blue-400
          bg-cyan-100 p-4 sm:px-20" aria-live="polite">
      <h4 className="text-purple-600 text-sm">Le Chat Recommends :</h4>
      <h1 className="mt-2 mb-14 flex justify-center items-center text-3xl
            font-bold">{title}</h1>
      <h3 className="mt-12 sm:mt-20 mb-4 flex justify-center items-center
            p-4 font-semibold text-purple-600">{presentation}</h3>
      <fieldset className="border border-gray-400 rounded-md p-4
            text-blue-700 font-bold text-xl"><legend>Ingredients</legend>
        <ul className="sm:ml-20 text-base">
                {ingredients.map((ingredient, index) => (
          <li key={index} className="my-1 flex justify-start items-start">
            <div className="flex items-center rounded-lg bg-teal-200 pr-2">
              <span className="m-2 w-1.5 h-1.5 rounded-full bg-blue-800"></span>
              <span className="text-blue-800">{ingredient}</span></div>
          </li>))}</ul></fieldset><br />
      <fieldset className="border border-gray-400 rounded-md p-4
            text-blue-700 font-bold text-xl"><legend>Instructions</legend>
        <ol className="sm:ml-20 text-base">
              {instructions.map((step, index) => (
          <li key={index} className="my-2">
            <span className="font-extrabold">{step[0]}</span>: {step[1]}</li>))}</ol></fieldset>
    </section>)}


export { DisplayRecipe };
