import React from "react";

/* css */
import Styles from'./Section.module.css';

function TopSection() {
    return (
        <div className={Styles.top_section_container}>
            <div className={`${Styles.top_section_txt} ${Styles.font_color}`}>
                UI / UX Designer & Front-end Developer
            </div>
            <div className={Styles.top_section_cont}>
            </div>
        </div>
    );

}

export default TopSection;