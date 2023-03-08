import { React, useRef, useEffect } from 'react';

/* scss */
import Styles from '../styles/styles.module.css';



function TopSection() {

    useEffect(() => {
        console.log("done");
    })
    return (
        <div className={Styles.main_bg}>
            <div className={Styles.top_section_container}>
                <div className={`${Styles.top_section_txt} ${Styles.font_color}`}>
                   
                    <h1>UI / UX Designer & Front-end Developer</h1>
                    <h1>SCSS</h1>
                </div>
                <div className={Styles.top_section_contitem}>
                    <div>
                        <iframe src="https://giphy.com/embed/sPE10urWXK7YLZ7oli" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mobile-ui-ux-sPE10urWXK7YLZ7oli">via GIPHY</a></p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TopSection;