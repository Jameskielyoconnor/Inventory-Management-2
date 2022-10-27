import React from 'react'
import './Form.css'

export default function Form({children, handleClose}) {
  return (
    <div className='form-background'>
        <div className='form'>
            {children}
            <div> 
                <button onClick={handleClose}>Close Form</button>
            </div>
        </div>
    </div>
  )
}
