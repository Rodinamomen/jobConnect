import React, {useEffect, useState} from 'react'
import './ViewProposel.css'
import {useParams} from 'react-router-dom';
import NavGraph from '../NavGraph/NavGraph';
import axios from "axios";
import saveAs from 'file-saver';


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIzZjljNzJkLTIyYTQtNDQzNi04MDdmLWJkODJkMGFlMWY3NSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiRW1wbG95ZXIyIiwiZXhwIjoxNzE0OTg2NTc0LCJpc3MiOiJqb2JDb25uZWN0In0.Hl_fqG7KR_oEZcNSwLLtJqO9Qu8lncIb73gWnNjEMnQ";

function ViewProposel() {
    const {proposalId} = useParams();
    const [proposal, setProposal] = useState(null);
    const [attachmentPath, setAttachmentPath] = useState(null);
    let url ;
    useEffect(() => {
        fetchData();
    }, [proposalId]);


    const downloadFile = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const response = await axios.get(`http://localhost:5109/jobs/proposals/${proposalId}/CV`, {
                responseType: 'blob'
            });
            const blob = response.data;
            const filename = 'proposal12_cv.pdf'; // Set a custom filename
            saveAs(blob, filename); // Use file-saver library (https://www.npmjs.com/package/file-saver)
        } catch (error) {
            console.error('Download error:', error);
            // Handle errors gracefully
        }
    };

    const fetchData = async () => {
        console.log('Fetching data...');

        try {
            const baseurl = `https://jobconnectapi-1.onrender.com/jobs/proposals/${proposalId}`
            const response = await fetch(baseurl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
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
    const handleAccept = async () => {
        try {
            const baseurl = `http://localhost:5109/jobs/proposals/${proposalId}/accept`
            const response = await fetch(baseurl, {
                method: 'Post',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleReject = async () => {
        try {
            const baseurl = `http://localhost:5109/jobs/proposals/${proposalId}/reject`
            const response = await fetch(baseurl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
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
        /*{} <div>
             <NavGraph/>
         <div className='job-list-container'>
           <div className='job-details-header'>Proposel</div>
         </div>
           <div className='proposel-container'>
             <p className='proposal-username'>Rodina mobark</p>
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
                 <p className='proposal-cover-letter'>While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.While cover letters are not always required, many hiring managers still rely on them to gauge an applicant's skills, experience and background. The key to writing an effective cover letter is to clearly show how your professional experience fits the needs of the open role and the culture of the hiring company.</p>
              <button className='download-resume-button' /*onClick={handleDoownloadClick}/>Download resume</button>
             </div>

             <button className='accept-proposal-button' onClick={handleAccept}>Accept</button>
             <button className='reject-proposal-button' onClick={handleReject}>reject</button>
           </div>
         </div>}*/

        <div>
            <NavGraph/>
            <div className='job-list-container'>
                <div className='job-details-header'>Proposel</div>
            </div>
            {proposal && <div className='proposel-container'>
                <p className='proposal-username'>{proposal.jobSeeker.userName}</p>
                <div className='contact-div'>
                    <p className='contact-text'>Contact:</p>
                    <p className='proposal-contact'>{proposal.jobSeeker.email}</p>
                </div>
                <div className='submitted-date-div'>
                    <p className='proposal-submitted-date-text'>Submitted Date:</p>
                    <p className='proposal-submitted-date'>{proposal.submissionDate}</p>
                </div>
                <div className='cover-letter-div'>
                    <p className='proposal-cover-letter-text'>Cover letter:</p>
                    <p className='proposal-cover-letter'>{proposal.coverLetter}</p>
                    <button className='download-resume-button' onClick={downloadFile}>Download resume</button>
                </div>

                <button className='accept-proposal-button' onClick={handleAccept}>Accept</button>
                <button className='reject-proposal-button' onClick={handleReject}>reject</button>
            </div>}
        </div>


    )
}

export default ViewProposel
