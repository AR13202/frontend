import React from 'react'
import Profile from './profile/profile';
import RecentChat from './profile/RecentChat';
import Todaytodos from './profile/Todaytodos';
import TodayEvents from './profile/TodayEvents';
const Main = () => {
  return (
    <div className='maincontent'>
        <div className='grid'>
            <div className='subgrid-1'>
              <RecentChat/>
            </div>
            <div className='subgrid-2'>
            <TodayEvents/>
              <Todaytodos/>
            </div>
        </div>
        <div>
            <Profile/>
        </div>
    </div>
  )
}

export default Main;