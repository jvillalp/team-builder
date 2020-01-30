import React, { useState } from 'react';
import './App.css';
import EachMember from './Members/EachMember';
import MemberForm from './Members/MemberForm';
import styled from 'styled-components';


const AppStyle = styled.div`
margin: 0 auto;
background: green;
padding: 2%;
width: 100%;
max-width: 1000px;
`;

function App() {
    const [teamMembers, setTeamMembers] = useState([
        {
        name: 'Juana Villalpando',
        email: 'juana.v14@gmail.com',
        role: 'Software Engineer',
        }
    ]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email:member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember])
  }
  return (
    <AppStyle>
    <div className="App">
      <h1>Join the Team!</h1>
      <MemberForm addNewMember={addNewMember}/>
      <EachMember teamMembers={teamMembers} />
    </div>
    </AppStyle>
  );
}

export default App;
