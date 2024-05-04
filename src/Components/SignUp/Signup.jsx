import React, {useState}from "react";
import './Signup.css'
import { Link } from "react-router-dom";
 function Signup (props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [firstname,setFirstName] = useState('')
    const [secondname,setSecondName] = useState('')
    const [jobRole,setJobRole]= useState('')
    const submitUser = async() =>
    {
      const userData = {
       email: email,
       password: password,
        firstname: firstname,
        secondname:secondname,
        jobrole:jobRole
       }

       const result = await fetch("url", 
    {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    })
    const resultInbJson= await  result.json
    }
    
    return(
        <div className="signup-container" >
         <div className="register-form-container">
        <div className="welcome-container">
            <h1 className="register-header">Register</h1>
            <br/>
            <span className="register-subheader">Let’s Sign up first for enter into JobConnect Website.</span>
        </div>
        <form className="register-form" /*onSubmit={handleSubmit}*/>
            <label className='first-name-label'htmlFor="name">First Name</label>
            <input value={firstname} type="text" placeholder="firstName" id="firstName" name="Firstname" onChange={(e) => setFirstName(e.target.value)}></input>
            <label className='second-name-label'htmlFor="Secondname">Second Name</label>
            <input value={secondname} type="text" placeholder="secondName" id="secondName" name="secondName" onChange={(e) => setSecondName(e.target.value)}></input>
            <label className='email-label' htmlFor="email">Email</label>
            <input  value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"  onChange={(e) => setEmail(e.target.value)}></input>
            <label className="password-label"  htmlFor="password">Password</label>
            <input value={password} type="password" placeholder="************" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            <select  value={jobRole} onChange={(e)=> setJobRole(e.target.value)}>
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="jobseeker">Jobseeker</option>
                <option value="employeer">Employeer</option>
            </select>
            <button className="register-button" type="submit" onClick={submitUser}>Sign up</button>
        </form>
        <Link to="/login"> <button className="to-login-button">Have an accout? Log in </button></Link>
        </div>
        </div>
    );
};
export default Signup