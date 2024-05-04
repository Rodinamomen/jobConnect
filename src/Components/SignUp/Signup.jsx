import React, {useState}from "react";
import './Signup.css'
import { Link } from "react-router-dom";
 function Signup (props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [userName,setUserName] = useState('')
    const [jobRole,setJobRole]= useState('')
    const [company, setCompany] = useState(null);
    const [industry, setIndustry] = useState(null);
    const [showEmployerFields, setShowEmployerFields] = useState(false);
    const toggleEmployerFields = (e) => {
        setShowEmployerFields(e.target.value === "employeer");
    };
    const submitUser = async () => {
    const userData = {
        Email: email,
        Password: password,
        UserName: userName,
        Role: jobRole,
        Company: company,
        Industry: industry
    };

    try {
        const response = await fetch("url", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (response.ok) {
            console.log("User successfully registered!");
        } else {
            console.error("Failed to register user:", response.status);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};
    
    return(
        <div className="signup-container" >
         <div className="register-form-container">
        <div className="welcome-container">
            <h1 className="register-header">Register</h1>
            <br/>
            <span className="register-subheader">Let’s Sign up first for enter into JobConnect Website.</span>
        </div>
        <form className="register-form" onSubmit={submitUser}>
            <label className='userName-label'htmlFor="name">UserName</label>
            <input value={userName} type="text" placeholder="userName" id="userName" name="userName" onChange={(e) => setUserName(e.target.value)}></input>
            <label className='email-label'htmlFor="email">Email</label>
            <input  value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"  onChange={(e) => setEmail(e.target.value)}></input>
            <label className="password-label"  htmlFor="password">Password</label>
            <input value={password} type="password" placeholder="************" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            <select className="job-role-menu"  value={jobRole} onChange={(e)=> {setJobRole(e.target.value); toggleEmployerFields(e);}}>
                <option value="">Select</option>
                <option value="jobseeker">Jobseeker</option>
                <option value="employeer">Employeer</option>
            </select>
            {showEmployerFields && (
                <>
             <label className='company-label'htmlFor="company">Company</label>
            <input value={company} type="text" placeholder="company" id="company" name="company" onChange={(e) => setCompany(e.target.value)}></input>
            <label className='industry-label' htmlFor="name">Industry</label>
            <input value={industry} type="text" placeholder="industry" id="industry" name="industry" onChange={(e) => setIndustry(e.target.value)}></input>
                </>
            )}
            <button className="register-button" type="submit">Sign up</button>
        </form>

        <Link to="/login"> <button className="to-login-button">Have an accout? Log in </button></Link>
        </div>
      </div>
    );
};
export default Signup