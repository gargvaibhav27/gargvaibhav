import React from 'react'
import './student.css'

function student({props}) {
  return (
    <div id="card">
        <h4>id:{props.id}</h4>
        <h4>Name:{props.name}</h4>
        <h4>Class:{props.class}</h4>
        </div>
  )
};

export default student