import React, {useState, useEffect} from 'react';
import Clock from './clock.jsx';
import './App.css';


function App() {
const [time, setTime] = useState(0);


  useEffect(()=>{

    const intervalId = setInterval(() =>{
    const timmer = new Date().toLocaleTimeString()
      setTime(timmer)
      console.log(timmer)
      }, 1000);
      return () => clearInterval(intervalId);
  })

  
  return (
    <>
      <div>
      <Clock time={time}></Clock>
      </div>
    </>
  )
}

export default App;
