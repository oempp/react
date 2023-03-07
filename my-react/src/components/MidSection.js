import React, { useContext, useEffect } from "react";

/* css */
import Styles from './Section.module.css';

/* Context */
import { MainContext } from "../context/MainContext";

function MidSection() {

    const skills = useContext(MainContext);
    const webList = skills.web.map((list, idx) => {
        return (
            <li key={idx}>{list}</li>
        );
    })

    const webListFunc = (props) => {
        const propsName = props.web;
        const lists = propsName.map((list, idx) => {
            return <li key={idx}><span>{list}</span></li>
        });
        return (<ul>{lists}</ul>);
    }

    const systemListFunc = (props) => {
        const propsName = props.system;
        const lists = propsName.map((list, idx) => {
            return <li key={idx}><span>{list}</span></li>
        });
        return (<ul>{lists}</ul>);
    }

    const designListFunc = (props) => {
        const propsName = props.design;
        const lists = propsName.map((list, idx) => {
            return <li key={idx}><span>{list}</span></li>
        });
        return (<ul>{lists}</ul>);
    }


    const name = [1, 2, 3]
    return (
        <div className={Styles.section_bg}>
            <div><p className={`${Styles.title_fontsize} ${Styles.font_color}`}>Skills</p></div>
            <div className={Styles.top_section_container02}>
                <div className={Styles.set_ifame}>
                    <iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC">via GIPHY</a></p>
                </div>
                <div className={Styles.imgframe}></div>
                <div className={Styles.imgframe}></div>
            </div>
            <div className={Styles.top_section_container02}>
                <div>
                    <p className={`${Styles.ul_title_fonsize} ${Styles.font_color}`}>Web Programming</p>
                    {webListFunc(skills)}
                    <p className={`${Styles.ul_title_fonsize} ${Styles.font_color}`}>System Programming</p>
                    {systemListFunc(skills)}
                    <p className={`${Styles.ul_title_fonsize} ${Styles.font_color}`}>DB</p>
                    {designListFunc(skills)}
                </div>
                <div>
                    <p className={`${Styles.ul_title_fonsize} ${Styles.font_color}`}>Design Tool</p>
                    {designListFunc(skills)}
                </div>
                <div>
                    <p className={`${Styles.ul_title_fonsize} ${Styles.font_color}`}>ETC</p>
                    
                </div>
            </div>
        </div>
    );
}

export default MidSection;