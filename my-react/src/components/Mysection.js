import React, { useContext, useRef, useEffect } from "react";

/* css */
import Styles from '../styles/styles.module.css';

/* Context */
import { MainContext } from "../context/MainContext";

function Mysection() {

    const skills = useContext(MainContext);
    console.log(skills);
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

    const observer = new IntersectionObserver((e) => {
        e.forEach((el) => {
            //보일시
            if (el.isIntersecting) {
                el.target.style.opacity = 1;
            }
            else {
                el.target.style.opacity = 0;
            }
        })


    })
    //초기
    const nameRefH2 = useRef()

    //didmount 후에 사용한다
    useEffect(() => {
        console.log(nameRefH2)
        observer.observe(nameRefH2.current)


        //nameRefH2.current.target.Style.opacity = 1;
    }, [])



    const name = [1, 2, 3]
    return (
        <div className={Styles.main_bg}>

            <div><h2 ref={nameRefH2} className={`${Styles.title_fontsize} ${Styles.font_color}`}>Profile</h2><span className={Styles.move_stick}></span></div>
            <div className={Styles.top_section_container02}>
                <div className={Styles.set_iframebox}>
                    <iframe className={Styles.set_iframe} src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" frameBorder="0" allowFullScreen></iframe><p className={Styles.namevia} ><a href="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC">via GIPHY</a></p>
                </div>
                <div className={Styles.txtframe}>
                    <p>Tae-woon Song</p>
                    <p>
                        안녕하세요! 웹 개발자 송태운입니다.<br />

                    </p>
                </div>

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

export default Mysection;