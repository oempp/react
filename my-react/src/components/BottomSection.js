import React from "react";

/* scss */
import Styles from '../styles/styles.module.css';




function BottomSection() {
    return (
        <div className={Styles.section_bg3}>
            <div><p className={`${Styles.title_fontsize} ${Styles.font_color}`}>Skills</p></div>
            <div className={Styles.top_section_container02}>
                <div>
                    Web Programming
                </div>
                <div>
                    Design
                </div>
                <div>
                    Programming
                </div>

            </div>
        </div>
    );
}

export default BottomSection;