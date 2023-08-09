import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Baseball&c=United%20States');
        const data = await response.json();
        setTeams(data.teams);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchTeams();
  }, []);

  return (
    <div className="App">
      <h1>Baseball Teams in the US</h1>
      <div className="teams">
        {teams.map(team => (
          <div key={team.idTeam} className="team">
            <h2>{team.strTeam}</h2>
            <p>{team.strStadium}, {team.strStadiumLocation}</p>
            <p>{team.strDescriptionEN}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
