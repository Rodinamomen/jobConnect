import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Login} from './Components/Login/Login';
import { Signup } from './Components/SignUp/Signup';
function App() {
  const [currentForm,setCurrentForm] = useState('login');
  const toggleForm =(formName)=>{
    setCurrentForm(formName)
  }
  return (
    <div className='App'>
    {
      currentForm == 'login' ? <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
    }
    </div>
  );
}

export default App;
