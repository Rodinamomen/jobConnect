import React from 'react'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { JobsListData } from '../JobsList/JobsListData';
import './ReviewProposels.css'
function ReviewProposels() {
 const [Job, setJob] = useState(null);
 const { jobId } = useParams();
    useEffect(() => {
       /* const job = JobsListData.find(item => item.jobId === jobId);
        setJob(JobsListData.find(item => item.jobId === jobId))*/
      fetchData();
    }, [jobId]);

    const fetchData = async () => {
      console.log('Fetching data...');
    
        try {
            const baseurl='https://jobconnectapi-1.onrender.com/jobs/${jobId}'
            const response = await fetch( baseurl, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ2NDY4OTIsImlzcyI6ImpvYkNvbm5lY3QifQ.OG_EHO82A23dcZvXRNofllgpdlLSVHCHX5dY_dA5JY8'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setJob(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  return (
     <div>
    <div className='job-list-container'>
      <div className='logo-container'><text className='job-connect-logo'>JobConnect</text></div>  
    </div>
    <div className='job-details-header'>Job details</div> 
    <div>
    <div className='job-details-card' >
       {Job && (
                    <>
                        <p className='job-title'>{Job.jobTitle}</p>
                        <p className='job-date'>{Job.postDate}</p>
                        <div className='job-type-div'>
                        <p className='job-type-text'>Job Type:</p>
                        <p className='job-type'>{Job.jobType}</p> 
                        </div>
                        <div className='job-description-div' >
                        <p className='job-description-text'>Job description:</p>
                        <p className='job-description-deails'>{Job.jobDescription}</p>
                        </div>
            
                    </>
                )}
      </div>
    </div>
    <div></div>

     </div>
  )
}

export default ReviewProposels
