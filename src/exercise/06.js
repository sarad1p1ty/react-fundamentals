// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'


function ErrorMessage(error) {
    return <div role="alert" style={{'color': 'red'}}>{error}</div>
}

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  const inputEl = React.useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let username = inputEl.current.value;
    onSubmitUsername(username);
  }
  
  const [isValid, setValidity] = React.useState(false)
  const [error, setError] = React.useState('')
  
  const handleChange = (event) => {
      const inputValue = event.target.value;
      setValidity(inputValue === inputValue.toLowerCase());
      setError(isValid ? null : 'Username must be lower case')
      console.log(inputValue)
      console.log(isValid)
      console.error(error)
    //   if (error) {
    //       return <errorMessage error={error} />
    //   }
  }

  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} ref={inputEl} id="username" type="text" />
              {!!error && ErrorMessage(error)}
      </div>
      <button type="submit" disabled={!!error} >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
