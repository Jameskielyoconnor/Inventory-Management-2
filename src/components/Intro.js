import React from 'react'
import "./Intro.css"

function Intro({ setAlert, setShowform}) {
  return (
    <div className='intro'>
      <h2>
        Inventory Management Systems 
      </h2>
      <div className='button'>
          <button onClick={() => setAlert(true)}>Show Alert</button>
          <button onClick={() => setShowform(true)}>Show Form</button>
        </div>
    </div>
  )
}

export default Intro
