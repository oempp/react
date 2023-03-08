import React from "react";

/* css */
import Styles from './Section.module.css';


function MidSection() {



    return (
        <div className={Styles.section_bg2}>
            <div><h2 className={`${Styles.title_fontsize} ${Styles.font_color}`}>Projects</h2></div>
            <div className={Styles.top_section_container02}>
                <div>
                    Web Programming
                </div>   
            </div>
            <div className={Styles.top_section_container02}>
                <div>
                    C/C++ Programming
                </div>   
            </div>
            <div className={Styles.top_section_container02}>
                <div>
                    Design
                </div>   
            </div>
        </div>
    );
}
export default MidSection;