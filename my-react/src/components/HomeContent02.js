import React, { useState, useRef, useEffect } from 'react';


/* scss */
import Styles from '../styles/styles.module.css';
/* css */
import '../styles/txt.css';
/* js */
import $ from 'jquery';



function HomeContent02() {
    function convertString(string) {
        const char = string.split('');
        return char;
    }
    const titleTxt = 'design';
    const putTitleTxt = convertString(titleTxt);



    return (
        <div className={Styles.main_bg}>
                        <div class="container">
                <div className="shadows">
                    {putTitleTxt.map((txt, idx) => {
                        return (<span key={idx}>{txt}</span>)
                    })}
                </div>       
            </div>
            <div className={Styles.home_cont02}>
                <div><h2 className={`${Styles.title_fontsize} ${Styles.font_color}`}> OUR SERVICEWHAT YOU WANT TO MAKE</h2></div>
                <div className={Styles.home_section_container01}>
                    <div className={Styles.home_cont_box01}>
                        TREND DESIGN
                    </div>
                    <div className={Styles.home_cont_box01}>
                        UI/UX DESIGN
                    </div>
                    <div className={Styles.home_cont_box01}>
                        MOBILE APPLICATION
                    </div>
                    <div className={Styles.home_cont_box01}>
                        WEB DEVELOPMENT
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent02;