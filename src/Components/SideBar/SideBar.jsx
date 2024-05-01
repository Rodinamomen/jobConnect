import React from 'react'
import "./SideBar.css"
import { SideBarData } from './SideBarData'
import { Link } from '@material-ui/core'
function SideBar() {
  return (
    <div className='sideBarContainer'>
    <div className="sideBar">
      {SideBarData.map((val,key)=>{
        return(
          <li className='row' key={key} >
            <div>
              {val.title}
            </div>
            <Link to ={val.link}></Link>
          </li> 
        )
      })} 
    

  </div>
  </div>
  )
}

export default SideBar
