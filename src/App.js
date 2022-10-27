import { useState } from 'react';
import Form from './components/Form';
import EventList from './components/EventList';
import Intro from './components/Intro';


import './App.css'
import List from './components/List';
import Alert from './components/Alert';


function App() {

  const [alert, setAlert] = useState(false)
  const [showForm, setShowform] = useState(false)
  const [tools, setTools] = useState([])

  const addTool = (tool) => {
      setTools(prevTools => {
        return [...prevTools, tool ]
      })
  }

  const handleClick = (id, quantity) => {
    setTools(tools.filter((tool) => {
      return id !== tool.id
    }))
  }




  const handleClose = () => {
    setShowform(false)
  }

  const handleAlert = (quantity) => {
    //console.log(tools.quantity)
   // const min = tools.filter(tool => {
   //   return tool.quantity > tool.pars;
 // });
 // console.log(min)
  }


  return (
    <div className="App">
      <div className='theRest'>
        <Intro setAlert={setAlert} setShowform={setShowform} />
        {alert && <Alert  tools={tools} setAlert={setAlert} handleAlert={handleAlert}/>}
     
      
        { <EventList tools={tools} handleClick={handleClick}/>}

          {showForm &&<Form handleClose={handleClose}>
            <List addTool={addTool}/>
          </Form>
          }
      </div>
    </div>
  );
}

export default App;