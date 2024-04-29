import React from 'react'
import "./SideBar.css"
import { SideBarData } from './SideBarData'
function SideBar() {
  return (
    <div className='sideBarContainer'>
    <div className="sideBar">
      {SideBarData.map((val,key)=>{
        return(
          <li className='row' key={key} onClick={()=>window.location.pathname=val.link}>
            <div>
              {val.title}
            </div>
          </li> 
        )
      })} 
    

  </div>
  </div>
  )
}

export default SideBar
