import React, { useState, useRef, useEffect } from 'react';


/* scss */
import Styles from '../styles/styles.module.css';
/* css */
import '../styles/txt.css';
/* js */
import $ from 'jquery';


function HomeContent01() {
    function convertString(string) {
        const char = string.split('');
        return char;
    }
    const titleTxt = 'OUR SERVICE';
    const putTitleTxt = convertString(titleTxt);

    useEffect(() => {
    }, [])






    return (
        <div className={Styles.main_bg}>
            <div class="container">
                <div className="shadows">
                    {putTitleTxt.map((txt, idx) => {
                        return (<span key={idx}>{txt}</span>)
                    })}
                </div>
            </div>
            <div className={Styles.home_cont01}>
                <div><h2 className={`${Styles.title_fontsize} ${Styles.font_color} ${Styles.text_center}`}>WHAT YOU WANT TO MAKE</h2></div>
                <div className={Styles.home_section_container01}>
                    <div className={Styles.home_cont_box01}>
                        <h3>TREND DESIGN</h3>
                        <span></span>
                        <p>
                            Graphic design trends are how we interpret what's happened before, to help us try and understand and predict the future. The idea is that we want something different than we have now, but not too different. A gradual change from what was to what will be.
                        </p>
                    </div>
                    <div className={Styles.home_cont_box01}>
                        <h3>UI/UX DESIGN</h3>
                        <span></span>
                        <p>UI/UX design is the process of creating user interfaces (UI) and user experiences (UX) for digital products, such as websites, mobile applications, and software. UI design focuses on the look and feel of the interface, while UX design focuses on how the user interacts with the product and how their needs are met.</p>
                    </div>
                    <div className={Styles.home_cont_box01}>
                        <h3>MOBILE APPLICATION</h3>
                        <span></span>
                        <p>A mobile application, commonly referred to as an "app," is a software program designed to run on mobile devices such as smartphones and tablets. Mobile apps can be downloaded from app stores, such as the Apple App Store and Google Play Store, and installed on mobile devices to provide users with specific functionality.</p>
                    </div>
                    <div className={Styles.home_cont_box01}>
                        <h3>WEB DEVELOPMENT</h3>
                        <span></span>
                        <p>Web development refers to the process of creating websites or web applications that are accessed through the internet. It involves the use of programming languages, software tools, and frameworks to design and develop websites that are functional, user-friendly, and visually appealing.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeContent01;