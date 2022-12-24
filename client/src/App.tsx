import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
    <form>
      <label htmlFor="team-name">Team Name</label>
      <input id="team-name"
        value = {name}
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
          //save what the user entered
          setName(e.target.value)
        }
      />
    </form>
    </div>
  )
}

export default App