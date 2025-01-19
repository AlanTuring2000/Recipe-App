import { useState } from "react";
import { RecipeLikes } from "./RecipeLikes.jsx";
import { SignupForm } from "./SignupForm.jsx";
import { Joke } from "./Joke.jsx";
import { Exo } from "./Exo.jsx";


function OtherContent({ setUserName, setDisplayMain }) {
  return (<>
    <SignupForm setUserName={setUserName} setDiplayMain={setDisplayMain} />
    <RecipeLikes />
    <Joke /></>)}


export { OtherContent }