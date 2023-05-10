import React from 'react'
import Main from './component/dashboard/Main';
import SideBar from './component/dashboard/SideBar';
import Todos from './component/dashboard/Todo';
import Events from './component/dashboard/Event';
import Video from './component/dashboard/Video';
import Header from './component/dashboard/header';
import { Routes,Route} from 'react-router-dom';
import './App.css';
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <SideBar />
        <main>
            <Header/>
            <Routes>
            <Route exact path='' element={<Main/>} />
            <Route path='todos' element={<Todos/>}/>
            <Route path='video' element={<Video/>}/>
            <Route path='events' element={<Events/>} />
            </Routes>
        </main>
    </div>
  )
}

export default Dashboard;