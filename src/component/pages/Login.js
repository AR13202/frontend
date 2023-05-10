import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
function navigateToExternalUrl() {
    window.location = 'http://localhost:4000/';
}
const Login = () => {
    const [user,setUser] = useState({
        username:"",
        password:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };
    //const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/login", user);
            if(response.data && response.data.length === 1){
                //navigate(`/Home/${response.data[0].id}`);
                alert("user logged in");
                navigateToExternalUrl();
            } else {
                alert("Invalid username or password");
            }
        }catch(err){
            console.log(err);
        }
        console.log(user);
    }
    return (
    <div className='form'>
        <div className='form-img'></div>
        <div className='form-content'>
            <div className='title'>Login</div>
            <input type='text' placeholder='username' name='username' onChange={handleChange} className='full'/><br/>
            <input type='password' placeholder='password' name='password' onChange={handleChange} className='full'/><br/>
            <button onClick={handleClick}>Login</button>
            <div className='add-info'>
                <div className='red-reg' style={{margin: '10px'}}>
                    Don't have a Account? <Link to={'/register'} style={{textDecoration:'none', color: 'red'}}>Register Now</Link>
                </div>
                <div className='red-home' style={{margin: '10px'}}>
                    Return <Link style={{textDecoration:'none', color: 'red'}}>Home</Link>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Login;