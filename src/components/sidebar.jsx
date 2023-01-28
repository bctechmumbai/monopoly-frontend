import React, { useState } from 'react';
import{
    FaRegChartBar,
    FaSignOutAlt,
    FaTh, FaUserAlt, FaBars, FaAssistiveListeningSystems, FaTools, FaToolbox,
}from "react-icons/fa"
import { NavLink } from 'react-router-dom';
export const Sidebar = ({children}) => {
    const[isOpen,setIsOpen] = useState(true);
    const toggle=()=> setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaTools/>
        },
        {
            path:"/quit",
            name:"Quit",
            icon:<FaSignOutAlt/>
        }
    ]
    return (
        <div className="container">
            
            <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <FaBars onMouseEnter={toggle}/>
                <div ClassName="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "300px" : "10px"}} className="bars">
                    </div>
                </div>
                {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "50px"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
            <main>{children}</main>
            
        </div>
    );
};

export default Sidebar;