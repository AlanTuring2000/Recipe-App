function Exo_p3({favItems}) {return (  
  <ul className="flex justify-start items-center p-4">
    {favItems.map((x, index) => x!==""?
          <button key={index} className="mx-4 mb-4 w-16 h-16 rounded-full
                bg-emerald-200">{x}</button> : null)}</ul>)}


export { Exo_p3 }