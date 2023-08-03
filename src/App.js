import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Increment from './increment';
import Random from './random'
import LiveEditor from './liveeditor'
import Objecteditor from './Objecteditor'
import ToDoList from './toDoList'
import './App.css';


function ButtonClicker() {
  let [count, setCount] = React.useState(0);



  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <nav>
        <ul>
          <li>Random Number Generator</li>
          <li>Incrementer Button</li>
        </ul>
      </nav>
      <h1>{count}</h1>
      <Button onClick={increment} variant="primary">Click on me to increase!</Button>{''}
      <Button onClick={decrement} variant="danger">Click on me to decrease!</Button>{''}

    </>
  );
}

function App() {
  return (

    <Router>

      <ul>
        <li>
          <Link to="/random">
            <Button variant="dark">
              Random Number Generator
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/increment">
            <Button variant="dark">
              Button Incrementer
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/liveeditor">
            <Button variant="dark">
              Live Editor
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/objecteditor">
            <Button>
              Object editor
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/ToDoList">
            <Button>
              To do list
            </Button>
          </Link>
        </li>


      </ul>

      <Routes>
        <Route path="/increment" element={<Increment />} />
        <Route path="/random" element={<Random />} />
        <Route path="/liveeditor" element={<LiveEditor />} />
        <Route path="/objecteditor" element={<Objecteditor />}></Route>
        <Route path="/ToDoList" element={<ToDoList />}></Route>
      </Routes>


    </Router>

  );
}

export default App;
