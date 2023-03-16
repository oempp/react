import React, { useState, useRef, useEffect } from 'react';


/* scss */
import Styles from '../styles/styles.module.css';
/* txt css */
import '../styles/txt.css';
/* js */
import $ from 'jquery';



function HomeExp() {

    useEffect(() => {

    }, [])




    return (
        <div className={Styles.main_bg}>
            <div className={Styles.home_exp01}>
                <div><h2 className={`${Styles.title_fontsize} ${Styles.font_color}`}> What is UI/UX design mean?</h2></div>
                <div className={Styles.home_section_container01}>
                    <div className={Styles.home_cont_box01}>
                        <h3 className={Styles.abs_txt}>UX</h3>
                        <ul>
                            <li className={Styles.hover_3d_txt}>UX Pyschology</li>
                            <li className={Styles.hover_3d_txt}>UX Methods</li>
                            <li className={Styles.hover_3d_txt}>UX Stragegy</li>
                            <li className={Styles.hover_3d_txt}>Design Process</li>
                            <li className={Styles.hover_3d_txt}>Design Reserch</li>
                            <li className={Styles.hover_3d_txt}>Inclusive Design</li>
                            <li className={Styles.hover_3d_txt}>Mental Model</li>
                            <li className={Styles.hover_3d_txt}>Empathy Mapping</li>
                            <li className={Styles.hover_3d_txt}>Dark Patterns</li>
                            <li className={Styles.hover_3d_txt}>Universal Design</li>
                        </ul>
                        <ul>
                            <li>Accessibillity</li>
                            <li>User Research</li>
                            <li>User Interviews</li>
                            <li>User Journey</li>
                            <li>User Personas</li>
                            <li>Affinity Diagram</li>
                            <li>UX Microcopy</li>
                            <li>Gamification</li>
                            <li>UX Deliverables</li>
                        </ul>
                    </div>              
                    <div className={Styles.home_cont_box02}>                        
                        <h3 className={`${Styles.abs_txt} ${Styles.font_color}`}>UI</h3>
                        <ul>
                            <li>Visual Design</li>
                            <li>Design system</li>
                            <li>Grids</li>
                            <li>Infomation Architecture</li>
                            <li>IconsTypography</li>
                            <li>Empty States</li>
                            <li>Motion Design</li>
                            <li>Prototyping</li>
                            <li>App Design</li>
                            <li>Heuristic Evaluation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeExp;