import React from 'react'
import './ViewProposel.css'
import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NavGraph from '../NavGraph/NavGraph';
function ViewProposel() {
    const { proposalId } = useParams();
    const [proposal, setProposal] = useState(null);
    const [attachmentPath, setAttachmentPath] = useState(null);
    useEffect(() => {
          fetchData();
        }, [proposalId]);
        
          /*  <div className='proposel-container'>
        <p>{proposal.Jobseeker.userName}</p>
        <p>{proposal.Jobseeker.email}</p>
        
        <p>{proposal.SubmissionDate}</p>
        <p>{proposal.CoverLetter} </p>
        <p>{proposal.AttachmentPath}</p>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>reject</button>
      </div>*/
      const downloadFile = () => {
        fetch(attachmentPath)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'filename'); // Set desired file name here
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch((error) => console.error('Error downloading file:', error));
    };
   /* const handleDoownloadClick=()=>{
        setAttachmentPath(proposal.JobSeeker.attachmentPath)
        downloadFile
    };*/
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
        <NavGraph/>
    <div className='job-list-container'>
      <div className='job-details-header'>Proposel</div> 
    </div>
      <div className='proposel-container'>
        <p className='proposal-username'>Rodina momen</p>
        <div className='contact-div'>
            <p className='contact-text'>Contact:</p>
            <p className='proposal-contact'>Rodinamobark3@gmail.com</p>
        </div>
        <div className='submitted-date-div'> 
        <p className='proposal-submitted-date-text' >Submitted Date:</p>
        <p className='proposal-submitted-date'>20/4/2024</p>
        </div>
        <div className='cover-letter-div'>
            <p className='proposal-cover-letter-text'>Cover letter:</p>
            <p className='proposal-cover-letter'>A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter.A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter. A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter. A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter. A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter. A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter. A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter. A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter. A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter. A cover letter, also known as an application letter, is a three- to four-paragraph memo to employers explaining your interest in the job and company and your fitness for the role. It's typically submitted along with your resume in a job application. This letter should highlight your skills, experience and achievements concerning the position you seek. Unlike your resume, cover letters allow you to go into more detail about your professional career and explain why you're a good fit for the role and company.
A well-written cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you're applying to in-depth before writing your cover letter.  </p>
         <button className='download-resume-button'>Download resume</button>  
        </div>
  
        <button className='accept-proposal-button' onClick={handleAccept}>Accept</button>
        <button className='reject' onClick={handleReject}>reject</button>
      </div>
    </div>

  )
}
export default ViewProposel
