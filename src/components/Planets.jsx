import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Planets = (props) => {
  const [errors, setErrors] = useState(false);
  const [theForce, setTheForce] = useState([]);
  console.log("planets", props.id);
  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${props.id}`)
      .then(res => {
        setErrors(false);
        console.log(res.data);
        setTheForce(res.data);
      })
      .catch(err => {
        setErrors(true);
        console.log(err)
      });
  }, [props]);
  return (
  <>
      {
        errors ?
          <h1>These are not the droids you're looking for</h1> :
          Object.keys(theForce).map((item) =>
            <p><b>{item}:</b> {theForce[item]}</p>)
        
    }
  </>
  )
}
export default Planets;