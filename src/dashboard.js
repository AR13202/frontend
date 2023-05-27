import React, {useState, useEffect} from 'react'
import Main from './component/dashboard/Main';
import SideBar from './component/dashboard/SideBar';
import Todo from './component/dashboard/Todo';
import Events from './component/dashboard/Event';
import Video from './component/dashboard/Video';
import Update from './component/pages/Update';
import { Routes,Route, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import './App.css';
const Dashboard = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();
  const [data,setData] = useState();
  useEffect(()=>{
    if(!token){    
      alert("your session is expired login again");
      navigate('/');
    }else{
      const fetchData = async() => {
        try{
          const response = await axios.get("http://localhost:8080/dashboard",
          {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
          }
          );
          if(response){
            setData(...response.data);
          }
        }catch(err){
          console.log(err);
        }
      }
      fetchData();
    }
  },[token,data,navigate]);

  // useEffect(()=>{
  //   if(data){
  //     console.log(data);
  //   }
  // },[data]);

  return (
    <>
    {data ? (
      <>
      <div className='dashboard'>
        <SideBar />
        <Routes>
            <Route exact path='' element={<Main profile={data}/>} />
            <Route path='todo' element={<Todo user_id={data.id}/>}/>
            <Route path='video' element={<Video user_id={data.id} first={data.first_name} last={data.last_name}/>}/>
            <Route path='events' element={<Events user_id={data.id}/>} />
            <Route path='updateprofile' element={<Update profile={data}/>} />
        </Routes>
      </div>
      </>
    ) : null}
    </>
  )
}

export default Dashboard;