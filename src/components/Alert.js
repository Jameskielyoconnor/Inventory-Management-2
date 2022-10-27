import React from 'react'
import "./Alert.css"

function Alert({ tools, handleClick, setAlert, handleAlert}) {




    return (
        <div className='alert-background'>
            
            <div className='alert'>
                <h2>This is a test</h2>
                
                {tools.map((tool) => (
                    <div key = {tool.id}>
                    <h2>{tool.item}</h2>
                    <h2>{tool.quantity}</h2>
                    <h2>{tool.pars}</h2>          
                    </div>
                ))}
                <button onClick={() => setAlert(false)}>Close Alert</button>
                <button onClick={handleAlert}>Display Alert</button>
                
          </div>
        </div>
      )
}

export default Alert
