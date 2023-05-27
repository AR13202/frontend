import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RecentChat = (props) => {
  const [meeting,setMeeting] = useState([]);
  const id = props.user_id;
  useEffect(()=> {
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://localhost:8080/meetings/${id}`);
        setMeeting(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[id]);
  useEffect(()=>{
    if(meeting){
      console.log(meeting);
    }
  },[meeting]);
  const fetchTime = (time) => {
    const dateString = time;
    const dateObj = new Date(dateString);
    const year = dateObj.getUTCFullYear(); // 2023
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0'); 
    const day = dateObj.getUTCDate().toString().padStart(2, '0'); 
    const hours = dateObj.getUTCHours().toString().padStart(2, '0'); 
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0'); 
    const seconds = dateObj.getUTCSeconds().toString().padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }
  return (
    <div className='RecentChat'>
        <div className='title'>RecentMeetings</div>
        <div className='RecentChat-data'>
          {(meeting && meeting.length>=1) ? (
            <>
              {meeting.map((data)=> (
                <div className='data2' key={data.id}>
                  {fetchTime(data.meeting_time)}
                </div>
              ))}
            </>
          ) : <p style={{color: 'darkgrey', fontSize: '20px', textAlign: 'center'}}>no recent meetings</p>
          }
        </div>
    </div>
  )
}

export default RecentChat