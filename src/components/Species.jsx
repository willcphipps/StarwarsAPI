import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Species = (props) => {
  const [errors, setErrors] = useState(false);
  const [theForce, setTheForce] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/species/${props.id}`)
      .then(res => {
        setErrors(false);
        console.log(res);
        setTheForce(res.data);
      })
      .catch(err => {
        setErrors(true);
        console.log(err)
      });
  }, [props]);
  return (
  <div >
      {
        errors ?
          
          <h1>These are not the droids you're looking for</h1> :
          Object.keys(theForce).map((item) =>
            <p><b>{item}:</b> {theForce[item]}</p>)
    }
    </div>
  )
}
export default Species;