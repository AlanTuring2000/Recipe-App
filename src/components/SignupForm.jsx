/* See "SignupForm.html" for the html syntax. The main differences are :
* in html, <input> tags should not be self-closing, while they should be
self-closing in React, like any other elements that do not have children
* in React, the 'for' property is called 'htmlFor'
* in React, the 'maxlength' property is called 'maxLength'
* in html we can pre-populate form elements whose goal is to hold a text (ie
<input /> or <textarea />) via the 'value' property (eg with a data from the
user's row data in a Postgresql database). In React, we can do the same, but
there are two cases : either the text entered by the user is a state of the
component (we speak of a "controlled" element), in which case the text
reflects the current state, and at start it is its initial state value; or
the text is not monitored by React, and we can give it a default value at
the start via the 'defaultValue' property
* similarly, in html we can pre-check some <input /> elements (those of type
"checkbox" or "radio") via the instruction 'checked="true"'. The React
equivalent is 'defaultChecked'
* at last, in html we can pre-select an option of a dropdown menu by adding
the attribute "selected" inside the corresponding <option> tag. The React
equivalent is to add 'defaultValue="value"', where "value" is the value of
the associated 'value' */

function SignupForm({setUserName, setDiplayMain}) {
  function signUp(formData) {
    /* It is possible to get all the data from the user's form inside a
    single object, via :
    const userData = Object.fromEntries(formData);
    // This line is necessary atm, otherwise the entry corresponding to the
    // checkbox element only contains the first box checked
    userData.favTaste = formData.getAll("favTaste");
    console.log(userData) */

    // we collect the data of any element via the '.get(name)' method
    const userName = formData.get("fullname");
    const userEmail = formData.get("email");
    const userPassword = formData.get("password");
    // but for checkboxes, we collect all the checked options in an array
    // via the '.getAll(name)' method; the options are referenced by 'value'
    const userFavTaste = formData.getAll("favTaste");
    // the option checked by a user is, likewise, referenced by its 'value'
    const userAge = formData.get("age");
    const userContinent = formData.get("continent");
    const userEducation = formData.get("education");
    const userNewRecipe = formData.get("recipeProposal");

    console.log({userName, userEmail, userPassword, userFavTaste, userAge,
      userContinent, userEducation, userNewRecipe});
    
    setUserName(userName);
    setDiplayMain(x => !x)}

  
  /* This was the pre-React 19 way of doing things : the following function
  was called by an attribute "onSubmit={handleSubmit}" inside the <form>,
  now replaced by "action={signUp}", and there was a "method="get"" or
  "method="post"" together with the function's call :
  function handleSubmit(event) {
    // Prevent the default form submission behavior (eg reloading the page)
    event.preventDefault();
    // Get the <form> element that triggered this event
    const formElt = event.currentTarget;
    // A FormData reads and collects all input values from a form, including
    // text fields, checkboxes, radio buttons, file uploads, etc. in an
    // object whose keys are the 'name' attributes of the fields, and the
    // values are the corresponding field values.
      A FormData has methods which allow us to add, update, or delete form
    data programmatically using the methods 'append', 'set', or 'delete'
    respectively (eg 'formData.append("age", "30")' would add an "age: 30"
    to the user's data)
    const formData = new FormData(formElt);
    // "username" is the text that the user entered in the input box whose
    // name is "fullname"
    const userName = formData.get("fullname");
    const userEmail = formData.get("email");
    const userPassword = formData.get("password");
    console.log({userName, userEmail, userPassword});
    formElt.reset()} */

  return (
    <section className="border-2 rounded-xl border-blue-400
          bg-cyan-100 p-4 sm:px-20">
      <h1 className="mt-2 mb-14 flex justify-center items-center text-3xl
            font-semibold">Signup Form</h1>
      <form action={signUp} className="space-y-2">

        {/* 'required' makes mandatory an answer to a field; it works with
        any field of the form */}
        <label htmlFor="name">Your name</label> : <input type="text"
              name="fullname" id="name" size="25" maxLength="30"
              defaultValue="Alan Turing" 
              className="block sm:inline border-purple-700 rounded-md
              bg-purple-100 px-2 py-1 text-blue-800" required /><br/>
        <label htmlFor="email">Your email</label> : <input type="email"
              name="email" id="email" size="25"
              className="block sm:inline border-purple-700 rounded-md
              bg-purple-100 px-2 py-1 text-blue-800" /><br/>
        <label htmlFor="password">Your password</label> : <input
              type="password" name="password" id="password" size="25"
              className="block sm:inline border-purple-700 rounded-md
              bg-purple-100 px-2 py-1 text-blue-800" required /><br/><br/>
        
        <fieldset className="border border-gray-400 rounded-md p-4">
              <legend>The tastes you favor</legend>Please, check the flavors
              you may tend to favor<br/>
		      <input type="checkbox" name="favTaste" id="spicy" value="spicy"
                defaultChecked /><label htmlFor="spicy"> Spicy</label><br/>
		      <input type="checkbox" name="favTaste" id="salty" value="salty" />
                <label htmlFor="salty"> Salty</label><br/>
          <input type="checkbox" name="favTaste" id="sugary" value="sugary"
                defaultChecked /><label htmlFor="sugary"> Sugary</label><br/>
          <input type="checkbox" name="favTaste" id="alcohol" value="alcohol" />
                <label htmlFor="alcohol"> Alcohol</label></fieldset><br/>
        
        <fieldset className="border border-gray-400 rounded-md p-4">
              <legend>Your age and continent</legend>Please, specify your
              age and the continent where you've spent most of your time :<br/>
          <input type="radio" name="age" value="less20" id="less20"
                defaultChecked />
                <label htmlFor="less20"> Less than 20 y.o.</label><br/>
          <input type="radio" name="age" value="mid20-45" id="mid20-45" />
                <label htmlFor="mid20-45"> 20-45 y.o.</label><br/>
          <input type="radio" name="age" value="mid45-65" id="mid45-65" />
                <label htmlFor="mid45-65"> 45-65 y.o.</label><br/>
          <input type="radio" name="age" value="more65" id="more65" />
                <label htmlFor="more65"> More than 65</label><br/><br/>
          <input type="radio" name="continent" value="africa" id="africa" />
                <label htmlFor="africa"> Africa</label><br/>
          <input type="radio" name="continent" value="america" id="america" />
                <label htmlFor="america"> America</label><br/>
          <input type="radio" name="continent" value="asia" id="asia" />
                <label htmlFor="asia"> Asia</label><br/>
          <input type="radio" name="continent" value="europe" id="europe" />
                <label htmlFor="europe"> Europe</label><br/>
          <input type="radio" name="continent" value="oceania" id="oceania" />
                <label htmlFor="oceania"> Oceania</label></fieldset><br/>
        
        <fieldset className="border border-gray-400 rounded-md p-4">
              <legend>Your level of education</legend>
		      <label htmlFor="education">Please, tell us how long you attended
                school :</label><br/>
          <select name="education" id="education" defaultValue="doctorate">
            <option value="highschool">High-school</option>
            <option value="undergraduate">Undergraduate (up to 3 years)</option>
            <option value="graduate">Graduate (3+ years)</option>
            <option value="masters">Master's degree (5+ years)</option>
            <option value="doctorate">PhD (8+ years)</option></select></fieldset><br/>

        <label htmlFor="recipeProposal" className="mt-4">Propose your own
              recipe</label> :<br/><textarea name="recipeProposal"
              id="recipeProposal" className="w-full h-40 border-purple-700
              rounded-md bg-purple-100 px-2 py-1 text-blue-800" /><br/>
        <button type="submit" aria-label="click to submit the form"
            className="w-full border-2 rounded-md border-blue-500
            bg-cyan-800 px-10 py-2 text-cyan-100">Submit</button>
      </form></section>)}


export { SignupForm }