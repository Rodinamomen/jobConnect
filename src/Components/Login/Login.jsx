import React, {useState} from "react";
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
function  Login(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [jobRole,setJobRole]= useState('')
    const [error, setError] = useState('');
   const navigate =useNavigate()
  
    const submitUser = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill out all required fields");
            return;
        }
    const userData = {
        Email: email,
        Password: password,
    };

    try {
        const url= "http://localhost:5109/login"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (data.successful === true) {
            const token = data.token; 
            localStorage.setItem('token', token);
            navigate('/postJob')
            setError("User successfully registered!");

        } else {
            setError(data.message);
        }
    } catch (error) {
        setError("Error occurred, please try again later");
    }
    setTimeout(() => {
        setError('');
    }, 2000);
};
      
    return(
       <div className="login-container" >
        <div className="login-form-container">
        <div className="welcome-container">
            <h1 className="welcome-header">Welcome Back</h1>
            <br/>
            <span className="enter-email-and-password">Please enter your email and password</span>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form className="login-form" onSubmit={submitUser}>
            <label className='email-label'htmlFor="email">Email</label>
            <input class="email-input"value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
            <label className="password-label" htmlFor="password">Password</label>
            <input class="password-input" value={password} type="password"  id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            <div className="menu-div">
            <label className="select-role-label" >Select Role:</label>
            <select className="job-role-menu"  value={jobRole} onChange={(e)=> setJobRole(e.target.value) }>
                <option value="">Select</option>
                <option value="jobseeker">Jobseeker</option>
                <option value="employeer">Employeer</option>
                <option value="admin">Admin</option>
            </select>
            </div>
            <button className="login-button" type="submit">Login</button>
            
        </form>
        <span className="to-register-message">Don't Have an accout?<Link to="/register" className="to-register-link">Register</Link></span>

        </div>
        </div>
    );
};
export default Login