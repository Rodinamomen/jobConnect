import React, { useState } from 'react'
import './PostJob.css'
 function PostJob() {
    const [jobTitle,setJobTitle] = useState('');
    const [jobType,setJobType] = useState("");
    const [jobSalery,setjobSalery] = useState("");
    const [jobDate,setjobDate] = useState("");
    const [jobDescription,setjobDescription] = useState("");
    const [error, setError] = useState('');
    const handleSubmit= async ()=> {
        
            const jobData = {
             jobTitle: jobTitle,
             jobType: jobType,
              salery: jobSalery,
              postDate:jobDate,
              jobDescription:jobDescription,
              isActive:0
             }
      
             const result = await fetch("url", 
          {
              method: "POST",
              headers: {
                  'Content-Type':'application/json'
              },
              body: JSON.stringify(userData)
          })
          const resultInbJson =  await result.json
          console.log(resultInbJson)
          
    }
  return (
    <div className='postJobContaioner' >
      <div className='logo-container'><text className='job-connect-logo'>JobConnect</text>
      </div>  
     <div className='create-job-header'>Create a job</div>
     <div className="job-details-container">
        <div className='job-details-container-card'>
            <div className='job-title-type-container'>
            <div className='job-title-div'>
                <label className='job-title-label'>Job Title</label>
                <input required className='job-title-input' value={jobTitle} type='text' onChange={(e)=> setJobTitle(e.target.value)}></input>
                
            </div>
            <div className='job-type-div'>
                <label className='job-type-label'>Job Type</label>
                <input  className='job-type-input'value={jobType} type='text' onChange={(e)=> setJobType(e.target.value)} ></input>
                
            </div>
            </div>
            <div className='job-salery-date-container'>
            <div className='job-salary-div'>
                <label className='job-salery-label'>Salery</label>
                <input className='job-salery-input' value={jobSalery} type='text' onChange={(e)=> setjobSalery(e.target.value)} ></input>
            </div>
            <div className='job-date-div'>
                <label className='job-date-label'>Date</label>
                <input className='job-date-input' value={jobDate} type='date' onChange={(e)=> setjobDate(e.target.value)}></input>
            </div>
            </div>
            <div className='job-description-div'>
            <label className='job-description-label'>Job description</label>
            <textarea className='job-description-input' value={jobDescription} type='text' onChange={(e)=> setjobDescription(e.target.value)}></textarea>
            </div>
            <button className='post-job-button'>Post a job</button> 
        </div>
     </div>
    </div>
  )
}
export default PostJob
