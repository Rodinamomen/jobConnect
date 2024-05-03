import React from 'react'
import './ViewProposel.css'
function ViewProposel() {
    const { proposalId } = useParams();
    const [proposal, setProposal] = useState(null);
    useEffect(() => {
          fetchData();
        }, [proposalId]);
    
        const fetchData = async () => {
          console.log('Fetching data...');
        
            try {
                const baseurl='https://jobconnectapi-1.onrender.com/jobs/proposals/${proposalId}'
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
                setProposal(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const handleAccept = async()=>{
            
            try {
                const baseurl='https://jobconnectapi-1.onrender.com/jobs/proposals/${proposalId}/accept'
                const response = await fetch( baseurl, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ2NDY4OTIsImlzcyI6ImpvYkNvbm5lY3QifQ.OG_EHO82A23dcZvXRNofllgpdlLSVHCHX5dY_dA5JY8'
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
                const baseurl='https://jobconnectapi-1.onrender.com/jobs/proposals/${proposalId}/reject'
                const response = await fetch( baseurl, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI5YzVhN2RmLWE5M2MtNGVmNi1iMzUwLTEzYTliYzY3M2U3MyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkpvYlNlZWtlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkpvYlNlZWtlcjEiLCJleHAiOjE3MTQ2NDY4OTIsImlzcyI6ImpvYkNvbm5lY3QifQ.OG_EHO82A23dcZvXRNofllgpdlLSVHCHX5dY_dA5JY8'
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
      <div className='job-details-header'>Proposel</div> 
    </div>
    <div className='proposel-container'>
        <p>{proposal.Jobseeker.userName}</p>
        <p>{proposal.Jobseeker.email}</p>
        
        <p>{proposal.SubmissionDate}</p>
        <p>{proposal.CoverLetter} </p>
        <p>{proposal.AttachmentPath}</p>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>reject</button>
      </div>
    </div>

  )
}
export default ViewProposel
