import React, { useState } from 'react'
import "./List.css"

export default function List({addTool}) {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [minPar, setMinpar] = useState('')

    const resetForm = () => {
        setName('')
        setQuantity('')
        setMinpar('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const tool ={
        item: name,
        quantity: quantity,
        pars: minPar,
        id: Math.floor(Math.random()*10000)
        }
        addTool(tool)
        resetForm()   
    }


  return (
    <form className='new-form' onClick={handleSubmit}>
        <label>
            <span>Enter the name of item.</span>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
        </label>
        <label>
            <span>Enter the quantity.</span>
            <input 
                type="text" 
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
            />
        </label>
        <label>
            <span>Enter the minimum par.</span>
            <input
                 type="text"
                 onChange={(e) => setMinpar(e.target.value)}
                 value={minPar}
            />
        </label>
        <button>Submit</button>
        <p onClick={resetForm}>Reset Form</p>
    </form>
  )
}
