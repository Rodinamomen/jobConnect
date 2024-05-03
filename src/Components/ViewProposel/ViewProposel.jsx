import React from 'react'
import './ViewProposel.css'
function ViewProposel() {
  return (
    <div>
    <div className='job-list-container'>
      <div className='logo-container'><text className='job-connect-logo'>JobConnect</text></div>  
      <div className='job-details-header'>Proposel</div> 
    </div>
    <div className='proposel-container'>
        <p>username</p>
        <p>email</p>
        <p>submitt date</p>
        <p>cover letter</p>
        <p>attachment path</p>
      </div>
    </div>

  )
}
export default ViewProposel
