import React, { useEffect, useState } from 'react'
import './JobsList.css'
import { JobsListData} from './JobsListData'
import { Link } from 'react-router-dom'

function JobList(props) {
  const [allJobs, setAllJobs] = useState(null);
  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
    console.log('Fetching data...');
      try {
          const response = await fetch('https://jobconnectapi-1.onrender.com/jobs', {
              method: 'GET',
              headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIzZjljNzJkLTIyYTQtNDQzNi04MDdmLWJkODJkMGFlMWY3NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiRW1wbG95ZXIyIiwiZXhwIjoxNzE0NjI4MTg5LCJpc3MiOiJqb2JDb25uZWN0In0.bKgMD6bF0RyEIoQR4sRyxLQswDFwzqFfqS-339x7Q-Y',
                   'Content-Type': 'application/json'
              }
          });
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setAllJobs(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  
  return (
    <div>
     <div className='job-list-container' >
      <div className='logo-container'><text className='job-connect-logo'>JobConnect</text>
      </div>  
        </div>
      
        <div className='job-cards-container'>
        {allJobs && allJobs.map((val,key)=>{
        return(
         <div className='job-card' key={key} >
           <p className='job-title'>{val.jobTitle}</p>
           <p className='job-date'>{val.postDate}</p>
           <p className='job-description'>{val.jobDescription}</p>
           <Link to={`/reviewProposels/${val.jobId}`}>
                <button className='explore-button'>Explore</button>
            </Link>

      </div>
        )
      })} 
    </div>
    </div>
    
  )
}

export default JobList
