import React, { useState } from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitUsername(username);
  }

  const handleChange = event => {
    const inputValue = event.target.value;
    setUsername(inputValue.toLowerCase());
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={handleChange} value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
