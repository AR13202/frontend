import React, { useState } from 'react';
import { FaTh, FaVideo, FaBars, FaClipboardList, FaCalendarAlt, FaSignOutAlt }from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleUserInfo = () => {
        Cookies.remove('token');
        navigate('/');
    }
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/dashboard/video",
            name:"Video Call",
            icon:<FaVideo/>
        },
        {
            path:"/dashboard/todo",
            name:"Todos",
            icon:<FaClipboardList/>
        },
        {
            path:"/dashboard/events",
            name:"Events",
            icon:<FaCalendarAlt/>
        },
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <div style={{display: isOpen ? "block" : "none"}} className="logo"></div>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassname="active" style={{textDecoration:'none'}}>
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <NavLink to='/' className="link" activeclassname="active" style={{textDecoration:'none'}} onClick={handleUserInfo}>
                    <div className="icon"><FaSignOutAlt/></div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">logout</div>
                </NavLink>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;