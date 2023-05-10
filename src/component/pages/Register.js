import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
    const [user,setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password_hash: "",
        date_of_birth: "",
        gender: "",
        city: "",
        mobile: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/register", user);
            console.log(response.data);
            alert("user added");
            navigate('/');
        }catch(err){
            if (err.response && err.response.status === 409) {
                alert("Username already registered");
            } else {
                console.log(err);
            }
        }
        console.log(user);
    };
    const today = new Date().toISOString().split("T")[0];
    return (
        <div className='register'>
            <div className='form-img reg-img'></div>
            <div className='reg-content'>
                <div className='title'>Register</div>
                <input type='text' placeholder='first name' name='first_name' onChange={handleChange} className='half'/>
                <input type='text' placeholder='last name' name='last_name' onChange={handleChange} className='half'/><br/>
                <input type='email' placeholder='Email' name='email' onChange={handleChange} className='full'/><br/>
                <input type='text' placeholder='username' name='username' onChange={handleChange} className='full'/><br/>
                <input type='password' placeholder='password' name='password_hash' onChange={handleChange} className='full'/><br/>
                <input type="date" placeholder="date_of_birth" name="date_of_birth" max={today} onChange={handleChange} className='full'/><br/>
                <div className='reg-radio'>
                    <span>
                        <input name="gender" type="radio" value="male" onChange={handleChange} required/>Male
                    </span>
                    <span>
                        <input name="gender" type="radio" value="female" onChange={handleChange} required/>Female
                    </span>
                    <span>
                        <input name="gender" type="radio" value="others" onChange={handleChange} required/>Other
                    </span>
                </div><br/>
                <input type='text' placeholder='city' name='city' onChange={handleChange} className='full'/><br/>
                <input type='number' placeholder='mobile' name='mobile' onChange={handleChange} className='full'/><br/>
                <button onClick={handleClick}>Register</button>
                <div className='red-reg' style={{margin: '10px'}}>
                    Already have an Account? <Link to={'/'} style={{textDecoration:'none', color: 'red'}}>Login Now!</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;