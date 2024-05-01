import React, { useEffect, useState } from 'react'
import './JobsList.css'
import { JobsListData} from './JobsListData'
import { Link } from 'react-router-dom'

function ReviewProposels(props) {
      const [allJobs, setAllJobs]= useState(null)
      useEffect(()=>{
          fetchData()
      })
      const fetchData =async()=>{
        try {
          const response = await fetch('url');
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
        <div className='job-list-header'>My Job list</div>
        <div className='job-cards-container'>
        {JobsListData.map((val,key)=>{
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

export default ReviewProposels
