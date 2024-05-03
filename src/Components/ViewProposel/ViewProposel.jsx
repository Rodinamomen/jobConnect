import React, {useEffect, useState} from 'react'
import './ViewProposel.css'
import {useParams} from "react-router-dom";
function ViewProposel() {
    const { proposalId } = useParams();
    const [proposal, setProposal] = useState(null);
    useEffect(() => {
          fetchData();
        }, [proposalId]);
    
        const fetchData = async () => {
          console.log('Fetching data...');
        
            try {
                const baseurl=`http://localhost:5109/jobs/proposals/${proposalId}`
                const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIzZjljNzJkLTIyYTQtNDQzNi04MDdmLWJkODJkMGFlMWY3NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiRW1wbG95ZXIyIiwiZXhwIjoxNzE0Nzk4ODk5LCJpc3MiOiJqb2JDb25uZWN0In0.NjcP27N8tEWW6KzE2t7FMlPWCjM6LWTwTVPEBSd_OK8`
                const response = await fetch( baseurl, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                console.log(`data is ${jsonData[0]}`)
                setProposal(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const handleAccept = async()=>{
            
            try {
                const baseurl=`http://localhost:5109/jobs/proposals/${proposalId}/accept`
                const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIzZjljNzJkLTIyYTQtNDQzNi04MDdmLWJkODJkMGFlMWY3NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiRW1wbG95ZXIyIiwiZXhwIjoxNzE0Nzk4ODk5LCJpc3MiOiJqb2JDb25uZWN0In0.NjcP27N8tEWW6KzE2t7FMlPWCjM6LWTwTVPEBSd_OK8`

                const response = await fetch( baseurl, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        const handleReject = async()=>{
            
            try {
                const baseurl=`http://localhost:5109/jobs/proposals/${proposalId}/reject`
                const token = `
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIzZjljNzJkLTIyYTQtNDQzNi04MDdmLWJkODJkMGFlMWY3NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiRW1wbG95ZXIyIiwiZXhwIjoxNzE0Nzk4ODk5LCJpc3MiOiJqb2JDb25uZWN0In0.NjcP27N8tEWW6KzE2t7FMlPWCjM6LWTwTVPEBSd_OK8`

                const response = await fetch( baseurl, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
  return (
    <div>
    <div className='job-list-container'>
      <div className='logo-container'><text className='job-connect-logo'>JobConnect</text></div>  
      <div className='job-details-header'>Proposal</div>
    </div>
    <div className='proposel-container'>
        <p>{proposal.jobSeeker.userName}</p>
        <p>{proposal.jobSeeker.email}</p>
        {/**/}
        <p>{proposal.submissionDate}</p>
        <p>{proposal.coverLetter} </p>
        <p>{proposal.attachmentPath}</p>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>reject</button>
      </div>
    </div>

  )
}
export default ViewProposel
