import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Login} from './Components/Login/Login';
import { Signup } from './Components/SignUp/Signup';
import { Outlet } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NavGraph from './Components/NavGraph/NavGraph';
function App() {
  const [currentForm,setCurrentForm] = useState('login');
  const toggleForm =(formName)=>{
    setCurrentForm(formName)
  }
  return (
    <div className='App'>
    {
     // currentForm == 'login' ? <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
     <>
     <NavGraph/>
     <Outlet/>
     </>
    }
    </div>
  );
}

export default App;
