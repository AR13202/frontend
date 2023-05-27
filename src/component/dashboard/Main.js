import React from 'react'
import Profile from './profile/profile';
import RecentChat from './profile/RecentChat';
import Todaytodos from './profile/Todaytodos';
import TodayEvents from './profile/TodayEvents';
const Main = (props) => {
  const user = props.profile;
  // const idx = user.id;
  return (
    <div className='main-content'>
    <div className='main-title' style={{fontFamily: 'helvetica'}}>Welcome, {user.first_name}
    <hr align={'left'}/>
    </div>
    <br/>
    <div className='maincontent'>
        <div className='grid'>
            <div className='subgrid-1'>
              <TodayEvents user_id={user.id} />
            </div>
            <div className='subgrid-2'>
              <RecentChat user_id={user.id} />
              <Todaytodos user_id={user.id}/>
            </div>
        </div>
        <div>
            <Profile profile={user}/>
        </div>
    </div>
    </div>
  )
}

export default Main;