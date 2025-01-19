import { useState } from "react";
import { Exo_p1 } from "./Exo_p1.jsx";
import { Exo_p2 } from "./Exo_p2.jsx";
import { Exo_p3 } from "./Exo_p3.jsx";


function Exo(){
  const allBgColors = ["bg-sky-300", "bg-purple-200"]
  const allThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  
  const [iconBgCol, setIconBgCol] = useState(allBgColors[0]);
  const [favItems, setFavItems] = useState(Array(10).fill(""));  
  
  return (
    <div className="flex flex-col bg-emerald-500">
      <Exo_p1 allBgColors={allBgColors} setIconBgCol={setIconBgCol} />
      <Exo_p2 allThings={allThings} iconBgCol={iconBgCol}
            setFavItems={setFavItems} />
      <Exo_p3 favItems={favItems} /></div>)}


export { Exo }