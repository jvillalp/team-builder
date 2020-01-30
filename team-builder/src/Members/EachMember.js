import React from 'react';
import uuid from 'react-uuid';


const EachMember = props => {
    return(
        <div>
            {props.teamMembers.map(member =>(
              <div key={uuid()}>
                  <h2>Name: {member.name}</h2>
                  <p>Email: {member.email}</p>
                  <p>Role: {member.role}</p>
              </div>  
            ))}
        </div>
    )
}

export default EachMember;