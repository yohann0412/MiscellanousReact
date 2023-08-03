import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/esm/Button';




function LiveEditor() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function updateFirstName(e) {
        setFirstName(e.target.value)
    }
    function updateLastName(e) {
        setLastName(e.target.value)
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
    }
    return (
        <form onSubmit={e => e.preventDefault()}>

            <input type="text"
                placeholder='FirstName'
                value={firstName}
                onChange={(event) => updateFirstName(event)}
            />
            <input type="text"
                placeholder='FirstName'
                value={lastName}
                onChange={(e) => updateLastName(e)} />
            <Button variant="warning" onClick={handleReset}>Reset</Button>{''}
            <h1>Hi, {firstName} {lastName}</h1>

        </form>
    )
}

export default LiveEditor;
