import React from 'react';
// import uuid from 'react-uuid';


const EachMember = props => {
    return(
        <div>
            {props.teamMembers.map(member =>(
              <div>
                  <h2>{member.name}</h2>
                  <p>{member.location}</p>
                  <p>{member.note}</p>
              </div>  
            ))}
        </div>
    )
}

export default EachMember;