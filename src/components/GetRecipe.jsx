import OpenAI from "openai";
import { useState, useEffect, Suspense } from "react";
import { DisplayRecipe } from "./DisplayRecipe.jsx";
 
const prompt = "You are an assistant that suggests recipes based on a list \
of ingredients provided by the user. Use some or all of the ingredients, \
optionally adding a few extras if needed, but as few as possible. Only use \
SI units. No commas, use dashes instead. Always respond in strict format. \
No explanations, no extra text, no apologies - just the necessary structure.\
The format should have the following structure: first, a title (the name of \
the meal) as the first element; second, a list of ingredients, which can \
vary in number; third, an array of instructions, where each instruction is \
a tuple (summary, details); fourth, a creative description of the meal's \
taste, flavor, and origin as the final string. The structure should be: \
['title', ['ingredient1', 'ingredient2', ...], [(summary1, details1), \
(summary2, details2), ...], 'presentation']";

// Access OpenAI token
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_TOKEN,
        // Enable for local development only since the key will be visible
        dangerouslyAllowBrowser: true});

// Fetch function with the list of ingredients as input
const fetchRecipe = async (ingredients) => {
  const listOfIng = ingredients.map(x => x.ingredient.ingName).join(", ");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: `I have ${listOfIng}. Please give me a
              recipe you'd recommend I make!` }],
      max_tokens: 1024});
    return response.choices[0].message.content}
  catch (error) {
    console.error("Error fetching recipe:", error);
    return {error: "Failed to fetch recipe. Please try again later." }}}

function GetRecipe({ingredients}) {
  // To go fetch the recipe and then store it; "recipe" will be a string
  const [recipe, setRecipe] = useState(null);
  // To know if the recipe is being fetched
  const [isLoading, setIsLoading] = useState(false);
  // To show/hide the recipe
  const [recipeShown, setRecipeShown] = useState(false);

  // Reset "recipe" whenever "ingredients" changes
  useEffect(() => {setRecipeShown(false); setRecipe(null)}, [ingredients]);

  async function askAPI() {
    // we only fetch a recipe if not already fetched
    if (!recipe) {
      setIsLoading(true);
      const fetchedRecipe = await fetchRecipe(ingredients);
      setRecipe(fetchedRecipe);
      setIsLoading(false)}
    setRecipeShown(prev => !prev)}
    
  // useEffect ensures that the scrolling downwards is done after the recipe
  // is displayed, so the page can indeed be scrolled down
  useEffect(() => {isLoading && window.scrollBy(0, 200)}, [isLoading]);  
  useEffect(() => {if (recipeShown)
        {document.getElementById("recipe-container")
              .scrollIntoView({behavior: "smooth"})}}, [recipeShown]);

  return (<>
    <div id="recipe-container" className="mt-20 mb-8 border-2 rounded-xl
          border-blue-400 bg-cyan-100 p-4 sm:p-0 flex flex-col
          sm:flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-blue-700 font-semibold text-xl">Ready for a
              recipe ?</p>
        <p className="text-blue-700 text-xs">Generate a recipe from your
              list of ingredients</p></div>
      <button onClick={askAPI} className="mx-8 my-4 border-2 rounded-md
            border-purple-500 bg-purple-200 p-2 text-purple-900">
            Get a recipe</button></div>
    {isLoading && <div className="flex justify-center items-center h-20">
          <div className="w-12 h-12 border-4 border-blue-500 border-solid
          border-t-transparent rounded-full animate-spin"></div></div>}
    {!recipe ? null : recipeShown && <DisplayRecipe recipeStr={recipe} />}</>)}


export { GetRecipe }