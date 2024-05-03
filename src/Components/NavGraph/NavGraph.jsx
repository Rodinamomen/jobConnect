import React from 'react'
import { Link } from 'react-router-dom'
import './NavGraph.css'
function NavGraph() {
  return (
    <nav className='nav-graph-employer'>
        <ul>
          <li className='job-connect-logo'> JobConnect </li>
            <li>
                <Link to = "/postJob">Post a job</Link>
            </li>
            <li><Link to="/jobsList" >Review Proposels</Link></li>
        </ul>
    </nav>
  )
}

export default NavGraph
