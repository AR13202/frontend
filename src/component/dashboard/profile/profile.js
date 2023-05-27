import React from 'react'
import { GrMail } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import {FaPhoneAlt, FaCity} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Profile = (props) => {
  const user = props.profile;
  const image = user.profile_image_address;
  const user_date = user.date_of_birth;
  const date = user_date.slice(0, 10);
  const file = 'http://localhost:8080/uploads/'+image.split('\\')[1];
  return (
    <div className='profile'>
        <div className='p-img'>
          <div style={{backgroundImage: `url(${file})`}}>
          </div>
        </div>
        <div className='p-content'>
          <div className='p-title'>{user.first_name} {user.last_name}</div>
          <div className='p-username'>@{user.username}</div>
          <div className='blink'>
            <div className="bicon"><GrMail style={{ fontSize: '20px' }}/></div>
            <div className="text">{user.email}</div>
          </div>
          <div className='blink'>
            <div className=""><MdDateRange style={{ fontSize: '20px' }}/></div>
            <div className="text">{date}</div>
          </div> 
          <div className='blink'>
            <div className=""><FaPhoneAlt style={{ fontSize: '20px' }}/></div>
            <div className="text">{user.mobile}</div>
          </div>
          <div className='blink'>
            <div className=""><FaCity style={{ fontSize: '20px' }}/></div>
            <div className="text">{user.city}</div>
          </div>
        </div>
        <div className='p-button'><button>
        <Link to={'/dashboard/updateprofile'} style={{textDecoration:'none', color:'inherit'}}>
        Update Profile
        </Link>
        </button></div>
    </div>
  )
}

export default Profile;