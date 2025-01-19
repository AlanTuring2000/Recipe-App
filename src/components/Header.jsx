import chefIcon from "../assets/chef-icon.png"


function Header({userName, setDisplayMain}) {
  function toOtherContent() {setDisplayMain(x => !x)}

  return (<>
    <div className="flex justify-center items-center rounded-t-xl
          shadow-[1px_3px_2px_0px_rgba(0,0,255,.2)] bg-teal-200">
      <img src={chefIcon} className="mr-4 my-4 w-8 fill-blue-500"
            alt="icon for Recipe App" />
      <span className="font-inter text-blue-900 font-bold text-4xl
            font-700">Recipe App</span></div>
    <div className="flex justify-end">
      <button onClick={toOtherContent} className="sm:mr-2 mt-1 border-2
            rounded-md border-purple-500 bg-purple-200 p-1 sm:p-2
            text-xs sm:text-base text-purple-900">
            {userName? userName : "sign in"}</button></div></>)}


export { Header };