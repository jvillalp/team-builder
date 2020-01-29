import React, { useState } from 'react';

const MemberForm = props => {
    
    const [teamMember, setTeamMember] = useState({
        name: " ",
        location: " ",
        note:" "
    });

    const handleChanges = event => {
        setTeamMember ({ ...teamMember, [event.target.name]: event.target.value});
        console.log(teamMember);
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({name: '', location: '', note: ''})
    };

    return (
       <form onSubmit={submitForm}>
           <label htmlFor='name'>Name:</label>
           <input 
                id="name"
                type="text"
                name='name'
                onChange={handleChanges}
                value={teamMember.name}
            />
            <label htmlFor='location'>Location:</label>
            <input
                id='location'
                type='text'
                name='location'
                onChange={handleChanges}
                value={teamMember.location}
            />
            <label htmlFor='note'>Note:</label>
            <input
                id='note'
                type='text'
                name='note'
                onChange={handleChanges}
                value={teamMember.note}
            />
        <button type="submit"> Add Team Member</button>
       </form>
    )

}

export default MemberForm;