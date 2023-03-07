import React from "react";
import Styles from './MidSection.module.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faWallet, faShieldAlt, faCheck, faMicrophone, faCommentDollar, faComment, faComments, faCheckCircle, faCheckDouble, faCheckToSlot, faWonSign, faHandHoldingDollar, } from "@fortawesome/free-solid-svg-icons";

function MidSection() {
    return (
        <div className={Styles.MidSection}>
            <div className={Styles.container}>
                <div>
                    <div className={Styles.iconsBox}>
                        <FontAwesomeIcon icon={faHandHoldingDollar} size='2x' />
                    </div>
                    <p>공과금</p>
                </div>
                <div>
                    <div className={Styles.iconsBox}>
                        <FontAwesomeIcon icon={faWallet} size='2x' /></div>
                    <p>환전지갑</p></div>
                <div>
                    <div className={Styles.iconsBox}>
                        <FontAwesomeIcon icon={faCommentDollar} size='2x' /></div>
                    <p>환율</p>
                </div>
                <div><div className={Styles.iconsBox}>
                    <FontAwesomeIcon icon={faShieldAlt} size='2x' /></div>
                    <p>보안</p></div>
                <div><div className={Styles.iconsBox}>
                    <FontAwesomeIcon icon={faCheckToSlot} size='2x' /></div>
                    <p>인증센터</p></div>
                <div><div className={Styles.iconsBox}>
                    <FontAwesomeIcon icon={faComments} size='2x' /></div>
                    <p>고객센터</p>
                </div>

            </div>


        </div>
    );
}

export default MidSection;