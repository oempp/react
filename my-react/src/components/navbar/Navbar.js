import React, { useState } from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";
import Button from '../Button'

/* icons */
import { SlList } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

function Navbar() {

    const [clicked, setClicked] = useState(false);
    //false = bars, true = times
    const handleClick = () => {
        setClicked(!clicked);
    }
    var navMenuIcons = clicked ? <GrClose className='GrClose' /> : <SlList className='SlList' />;
    return (
        <div className='Navbar_bg_color'>
            <nav className="Navbar">

                <h1 className="navbar-logo">My-react home<i className="fab fa-react"></i></h1>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    {navMenuIcons}
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} hre={item.url}>
                                    {item.title}
                                </a>
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