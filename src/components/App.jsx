import { useState } from "react";
import { Header } from "./Header.jsx";
import { MainContent } from "./MainContent.jsx";
import { OtherContent } from "./OtherContents.jsx";


function App() {
  const [displayMain, setDisplayMain] = useState(true);
  const [userName, setUserName] = useState("");

  return (
    <div className="min-h-screen m-2 border-2 rounded-xl border-blue-800
          bg-teal-100 p-2">
      {displayMain? <>
            <Header userName={userName} setDisplayMain={setDisplayMain} />
            <MainContent /> </>
            : <OtherContent setUserName={setUserName}
                  setDisplayMain={setDisplayMain} />}</div>)}


export { App }