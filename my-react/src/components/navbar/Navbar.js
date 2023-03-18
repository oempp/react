import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";
import Button from '../Button'

import { Link } from 'react-router-dom';

/* icons */
import { SlList } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

function Navbar(props) {

    const [clicked, setClicked] = useState(false);
    //false = bars, true = times
    const handleClick = () => {
        setClicked(!clicked);
    }
    useEffect(() => {
        console.log(props)

    }, [])
    var navMenuIcons = clicked ? <GrClose className='GrClose' /> : <SlList className='SlList' />;
    return (
        <div className='Navbar_bg_color'>
            <nav className="Navbar">

                <h1 className="navbar-logo">react home<i className="fab fa-react"></i></h1>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    {navMenuIcons}
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName} hre={item.url} >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>

            </nav>
        </div>
    )
}
export default Navbar