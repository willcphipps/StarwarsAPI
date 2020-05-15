import React, { useState } from 'react';
import { Router, navigate} from '@reach/router';
import "bootstrap/dist/css/bootstrap.css";

import Species from './components/Species';
import People from './components/People';
import Starships from './components/Planets';
import Planets from './components/Starships';


function App() {
  const [category, setCategory] = useState("people");
  const [id, setId] = useState("1");


  
  const changeCategory = (e) => {
    setCategory(e.target.value);
  }
    const changeId = (e) => {
    setId(e.target.value);
  }
    const handleForm = (e) => {
      e.preventDefault();
      console.log(category)
      navigate(`/${category}/${id}`)
  }
  return (
    <div className="App">
       <div className="m-3 p-5 text-center bg-secondary">
            <form
                onSubmit={(e) => handleForm(e)}
                className="">
                <label 
                  className="display-4"
                  htmlFor="search">Search for:</label>
                <select
                    className="m-4 display-4"
                    name="category" id=""
                    onChange={(e) => changeCategory(e)}
                    >
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                    <option value="species">species</option>
                </select>
                <label 
                  className="display-4"
                  htmlFor="id">ID:</label>
                <input type="number" min="1" max="60"
                    onChange={(e) => changeId(e)}
                    className="m-4 display-4"
                    placeholder="1"
                    name="id" id=""
                />
                
                <input 
                className="m-4 display-4"
                type="submit" value="submit"/>
        </form>
      </div>
      <div className="theforce">
        <Router>  
          <People path="/people/:id" />
          <Planets path="/planets/:id" />
          <Starships path="/starships/:id" />
          <Species path="/species/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
