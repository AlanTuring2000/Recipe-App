function DisplayIngredients({ingredients, setIngredients}) {
  /* This is a personal touch to play with the appearance of some elements
  on a page; its functional role is : if the ingredient in the list is
  clicked then it becomes somewhat transparent, meaning it won't be in the
  list of ingredients sent to Claude, but still remains available to the
  user if he wants to include it again (he would just need to click it).
    Note that React doesn't mutate variables, so, rather than modifying x,
  we need to build a new object using x */
  function handleClick(index) {setIngredients(prevIngredients =>
    prevIngredients.map((x,i) => (i===index)? {key: x.key,
          ingredient: {ingName: x.ingredient.ingName,
                ingState: x.ingredient.ingState===1? 0 : 1 }} : x))}

  return (<>
    <p className="ml-5 sm:ml-10 mb-3 text-blue-700 font-bold text-2xl">
          Ingredients on hand :</p>
    <ul className="ml-10 sm:ml-20">
          {ingredients.map(({key, ingredient}, index) => (
            <li key={key} className="my-1 flex justify-start items-start">
              {/* Note that, according to ChatGPT, the more concise
              'opacity-${50*(1+ingredient.ingState)}' may not work in
              production, because Tailwind purges classes that are not
              explicit, to be as light as possible (it works in development
              cause no purge is done) */}
              <div onClick={() => handleClick(index)}
                    className={`cursor-pointer flex items-center rounded-lg
                          bg-teal-200 pr-2 ${ingredient.ingState===1 ?
                                "opacity-100" : "opacity-50"}`}>
                <span className="m-2 w-1.5 h-1.5 rounded-full bg-blue-800"></span>
                <span className="text-blue-800">{ingredient.ingName}</span>
              </div></li>))}</ul></>)}


export { DisplayIngredients }