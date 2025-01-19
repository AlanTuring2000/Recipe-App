function Exo_p2({allThings, iconBgCol, setFavItems}) {
  function handleClick(index) {setFavItems(prevFavItems =>
    prevFavItems.map((x,i) =>
          i===index? (x===""? allThings[i] : "") : x))}
  
  return(
    <ul className="flex justify-around items-center p-4">
      {allThings.map((x, index) =>
            <button key={index} onClick={() => handleClick(index)}
                  className={`w-16 h-16 rounded-full ${iconBgCol} p-2`}>
                  {x}</button>)}</ul>)}


export { Exo_p2 }