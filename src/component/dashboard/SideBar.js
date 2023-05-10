import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='header-title'>
            <div className='title-img'></div>
            <div className='title-tag'>
                <div className='ttitle'>Wave</div>
                <div className='stitle'>A Video Calling App</div>
            </div>
        </div>
        <hr/>
        <div className='cont'>
            <Link to={'/dashboard'} style={{color: 'inherit', textDecoration: 'none'}}><div>Home</div></Link>
            <Link to={'/dashboard/video'} style={{color: 'inherit', textDecoration: 'none'}}><div>Video Call</div></Link>
            <Link to={'/dashboard/todos'} style={{color: 'inherit', textDecoration: 'none'}}><div>Todos</div></Link>
            <Link to={'/dashboard/events'} style={{color: 'inherit', textDecoration: 'none'}}><div>Events</div></Link>
        </div>
    </div>
  )
}

export default SideBar