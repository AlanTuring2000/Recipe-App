import { useState } from "react";
import { AddIngredient } from "./AddIngredient.jsx";
import { DisplayIngredients } from "./DisplayIngredients.jsx";
import { GetRecipe } from "./GetRecipe.jsx";


function MainContent() {
  /* "ingredients" is an object with entries
  {key: a key I build to satisfy React when displaying lists ,
    ingredient: {ingName: the ingredient's name,
          ingState: 0 or 1; the user may switch each ingredient entered to
                exclude or include it in the list sent to get a recipe}} */
  const [ingredients, setIngredients] = useState([]);

  return (<div className="min-h-60">
    <AddIngredient setIngredients={setIngredients} />
    {ingredients.length>0 ?
          <><DisplayIngredients ingredients={ingredients}
                setIngredients={setIngredients} />
            <GetRecipe ingredients={ingredients} /></>
          : null}</div>)}


export { MainContent }