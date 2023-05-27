import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Event = (props) => {
  const id = props.user_id;
  const [events,setEvents] = useState([]);
  const [event_head,setEvent_head] = useState('');
  const [event_desc,setEvent_desc] = useState('');
  const [event_date,setEvent_date] = useState('');
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res =await axios.get(`http://localhost:8080/events/${id}`);
        setEvents(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[events,id]);
  const handleClick = async()=>{
    try{
      await axios.post(`http://localhost:8080/events`, {event_head,event_desc,event_date,id});
      //window.location.reload(true);
    }catch(err){
      console.log(err);
    }
  }
  // useEffect(()=>{
  //   if(events){
  //     console.log(events);
  //   }
  // },[events]);
  const delEvent = async (id) =>{
    try{
      await axios.delete(`http://localhost:8080/events/${id}`);
      setEvents((prevevent) => prevevent.filter((data) => data.id !== id));
    }catch(err){
      console.log(err);
    }
  };
  return (
    <div className='main-content'>
      <div className='main-title'>Events
        <hr align={'left'}/>
      </div>
      <div className='add-event'>
        <div>
        <input type='text' placeholder='add a title' name='event_head' className='add-event-title' onChange={(ev) => setEvent_head(ev.target.value)}/>
        <input type='date' className='add-event-date' name='event_date' onChange={(ev) => setEvent_date(ev.target.value)}/>
        </div>
        <input type='text' placeholder='description' name='event_desc' className='add-event-desc' onChange={(ev) => setEvent_desc(ev.target.value)}/>
        <button onClick={handleClick}>Submit</button>
        <hr align={'left'}/>
      </div>
      <div className='events'>
        {(events && events.length >=1) ? (
          <>
          {events.map((data)=>(
          <div className='event' key={data.id}>
          <div className='event-header'>
            <div className='event-title'>{data.event_head}</div>
            <button onClick={()=>delEvent(data.id)}>delete</button>
          </div>
          <div className='event-date'>{data.event_date}</div>
          <div className='event-desc'>
            {data.event_desc}
          </div>
        </div> 
        ))}  
          </>
        ) : <p style={{color:'darkgrey', textAlign: 'center', fontSize: '30px'}}>no events here</p>
        }
      </div>
    </div>
  )
}

export default Event;