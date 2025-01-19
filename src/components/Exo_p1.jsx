function Exo_p1({allBgColors, setIconBgCol}) {
  function chooseColor(index) {setIconBgCol(allBgColors[index])}
  
  return(
    <ul className="flex justify-center items-center">
      {allBgColors.map((bgCol, index) =>
            <button key={index} onClick={() => chooseColor(index)}
                  className={`m-2 w-8 h-8 rounded-full ${bgCol} p-2`}></button>)}</ul>)}


export { Exo_p1 }