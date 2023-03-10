import React from "react";

/* scss */
import Styles from '../styles/styles.module.css';


function MidSection() {



    return (
        <div className={Styles.main_bg}>
            <div><h2 className={`${Styles.title_fontsize} ${Styles.font_color}`}>PROJECT</h2></div>
            <div className={Styles.mid_section_container01}>
                <div className={Styles.mid_cont_box01}>
                    Web Programming
                    React UI/UX web site
                </div>
                <div className={Styles.mid_cont_box02}>
                    WEB PAGE RENEWAL
                </div>
                <div></div>
            </div>

        </div>
    );
}
export default MidSection;