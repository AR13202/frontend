import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = (props) => {
  const user = props.profile;
  const id = user.id;
  const [data,setData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    date_of_birth: "",
    imageFile: "",
    city: user.city,
    mobile: user.mobile
});
const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === 'imageFile') {
      setData((prev) => ({ ...prev, [name]: files[0] }));
  } else {
      setData((prev) => ({ ...prev, [name]: value }));
  }
};
const today = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const handleClick = async () =>{
    try{
      await axios.put(`http://localhost:8080/updateprofile/${id}`,data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate('/dashboard');
    }catch(err){
      console.log(err);
    }
  };
  const navBack = () =>{
    navigate('/dashboard');
  }
  return (
    <div className='main-content'>
      <div className='main-title' style={{textAlign: 'center'}}>
        Update Profile
        <hr/>
      </div>   
      <div className='update-form'>
        <input type='text' value={user.first_name} placeholder='first name' name='first_name' className='update-half' onChange={handleChange}/>
        <input type='text' value={user.last_name} placeholder='last name' name='last_name' className='update-half' onChange={handleChange}/><br/>
        <input type='email' value={user.email} placeholder='email' name='email' className='update-half' onChange={handleChange}/>
        <input type="date" placeholder="date_of_birth" name="date_of_birth" max={today} className='update-half' onChange={handleChange}/><br/>
        <input type='text' value={user.city} placeholder='city' name='city' className='update-half' onChange={handleChange}/>
        <input type='number' value={user.mobile} placeholder='mobile' name='mobile' className='update-half' onChange={handleChange}/><br/>
        <input type='file' placeholder='imageFile' name='imageFile' className='update-file' onChange={handleChange} /><br/>
        <button onClick={navBack}>Go Back</button><button onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

export default Update;