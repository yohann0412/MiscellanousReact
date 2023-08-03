import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';



function Random() {
    let [countingVariable, setCountingVariable] = useState(0);

    function generateRandomNumber() {
        let randomNum = Math.round(Math.random() * 100000);
        setCountingVariable(randomNum);
    }

    return (
        <div class="mainApp">
            <h1>{countingVariable}</h1>
            <Button variant="secondary" onClick={generateRandomNumber}>
                Generate random number!
            </Button>
        </div>
    );
}

export default Random;
