import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

function ButtonIncrementer() {
    let [counter, setCounter] = useState(0);

    function buttonIncrease() {
        setCounter(counter + 1);
    }

    function buttonDecrease() {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>{counter}</h1>
            <Button variant="success" onClick={buttonIncrease}>Click here to increase</Button>
            <Button variant="danger" onClick={buttonDecrease}>Click here to decrease!</Button>{''}
        </>
    );
}

function Increment() {
    return (
        <div class="mainApp">
            <ButtonIncrementer />
        </div>
    );
}

export default Increment;
