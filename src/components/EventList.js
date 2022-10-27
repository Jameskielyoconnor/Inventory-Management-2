import React from 'react'
import "./EventList.css"

export default function EventList({tools, handleClick, handleAlert}) {
  return (
    <div className='eventList'>
      {tools.map((tool) => (
        <div key = {tool.id}>
          <div className='spacing'>
          <h2>Product name: {tool.item}</h2>
          <h2>Product quantity: {tool.quantity}</h2>
          <h2>Product min pars: {tool.pars}</h2>          
          <button onClick={() => handleClick(tool.id)}>Delete Tool</button>
          </div>
        </div>
      ))
    }
    </div>
  )
}
