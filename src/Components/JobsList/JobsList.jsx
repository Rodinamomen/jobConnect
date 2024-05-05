import React, { useEffect, useState } from 'react'
import './JobsList.css'
import { JobsListData} from './JobsListData'
import { Link } from 'react-router-dom'
import NavGraph from '../NavGraph/NavGraph';

function JobList(props) {
  const [allJobs, setAllJobs] = useState(null);
 //const token = localStorage.getItem('token');
  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
    console.log('Fetching data...');
      try {
          const response = await fetch('https://jobconnectapi-1.onrender.com/employer/jobs', {
              method: 'GET',
              headers: {
                  'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIzZjljNzJkLTIyYTQtNDQzNi04MDdmLWJkODJkMGFlMWY3NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiRW1wbG95ZXIyIiwiZXhwIjoxNzE0OTcxOTkwLCJpc3MiOiJqb2JDb25uZWN0In0.5Jd6RxCvg9YSdtPrEQ47SJim7ga8U6ybGDA8QHBeVRY`,
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
      <NavGraph/>
      <div className='create-job-header'>Jobs list</div>
     <div className='job-list-container' >
        
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
