import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const Login = () => {
    const [user,setUser] = useState({
        username:"",
        password:""
    });
    const [redirect, setRedirect] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/login", user );
            if (response){
                const now = new Date();
                const minutes = 60;
                const expirationTime = new Date(now.getTime() + minutes*60000);
                Cookies.set('token', response.data, { expires: expirationTime });
                setRedirect(true);
            }
        }catch(err){
            if(err.response && err.response.status === 400){
                alert('wrong username or password');
            }else if(err.response && err.response.status === 500){
                alert('Internal Server Error');
            }else{
                console.log(err);
            }
        }
    };
    if(redirect){
        navigate('/dashboard');
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
                    Return <Link to={'http://127.0.0.1:5500/landing-page/index.html'} style={{textDecoration:'none', color: 'red'}}>Home</Link>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Login;