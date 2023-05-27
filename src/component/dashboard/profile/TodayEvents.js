import React, { useState, useEffect } from 'react'
import axios from 'axios';
const TodayEvents = (props) => {
  const id = props.user_id;
  const [events,setEvents] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://localhost:8080/upcomingevents/${id}`);
        setEvents(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[events,id]);
  return (
    <div className='todayevent'>
        <div className='title'>Upcoming Events</div>
        <div className='upcoming-events'>
            {(events && events.length >=1) ? (
              <>
              {events.map((data)=>(
                <div className='upcoming' key={data.id}>
                  <div className='data'>{data.event_head}</div>
                  <div className='date' style={{color: 'darkgrey'}}>{data.event_date}</div>
                </div>
              ))}
              </>
            ) : <p style={{color: 'darkgrey', fontSize: '20px', textAlign: 'center'}}>no upcoming events</p>
            }
        </div>
    </div>
  )
}

export default TodayEvents;