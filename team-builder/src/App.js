import React, { useState } from 'react';
import './App.css';
import EachMember from './Members/EachMember';
import MemberForm from './Members/MemberForm';


function App() {
    const [teamMembers, setTeamMembers] = useState([
        {
        name: 'Juana Villalpando',
        location: 'California',
        note: 'I love to code!',
        }
    ]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      location:member.location,
      note: member.note
    };
    setTeamMembers([...teamMembers, newMember])
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <MemberForm addNewMember={addNewMember}/>
      <EachMember teamMembers={teamMembers} />
    </div>
  );
}

export default App;
