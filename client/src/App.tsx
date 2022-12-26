import React, { useEffect, useState } from 'react'
import './App.css'

//Team object which holds the PK and Name of the Team
type TTeam = {
  name: string;
  _id: string;
}

function App() {
  //user input for adding Teams to the DB
  const [name, setName] = useState('');
  //array for holding the existing teams in the DB
  const [teams, setTeams] = useState<TTeam[]>([]);

  //function to create Teams to be added to the DB by users
  async function handleCreateTeam(e: React.FormEvent){
    e.preventDefault();

    await fetch('http://localhost:8000/teams', {
      method: 'POST',
      body: JSON.stringify({
        name,
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    setName("")
  }

  //function to fetch the teams that are in the database when the page is loaded
  useEffect(() => {
    async function fetchTeams(){
      const response  = await fetch('http://localhost:8000/teams');
      const newTeams = await response.json(); 
      setTeams(newTeams);
    }
    fetchTeams();
  }, []);

  return (
    <div className="App">
      <ul className="teams">
        {teams.map((team) => (
            <li key = {team._id}> {team.name} </li>
        ))
        }
    </ul>
    <form onSubmit= {handleCreateTeam}>
      <label htmlFor="team-name">Team Name</label>
      <input id="team-name"
        value = {name}
        onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <button>Create Team</button>
    </form>
    </div>
  )
}

export default App