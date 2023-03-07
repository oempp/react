import React from "react";
import Styles from './ThirdContent.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function ThirdContent() {

    return (
        <div className={Styles.background}>

            <div className={Styles.container01}>
                <div>
                    <h2>신용</h2>
                    <p className={Styles.fontSize3}>
                        금융 생활의 첫 걸음,<br />
                        신용점수를 미리<br />
                        무료로 관리하세요</p>
                </div>
            </div>
            <div className={Styles.container02}>
                <div className={Styles.container03}>
                    <div className={Styles.imgBox_size}>
                        <img src="/images/credit-score-range-900x347.png" className={Styles.img_01}></img>
                    </div>
                    <p className={Styles.boldtxt}>내 신용점수</p>
                    <p>언제 어디서든, 원할 때 간편하게
                        KCB, NICE 신용점수를 한 곳에서 확인할 수
                        있어요.</p>
                </div>
                <div className={Styles.container03}>
                    <div className={Styles.imgBox_size}>
                        <img src="/images/AI-Modeling-01.svg" className={Styles.img_02}></img>
                    </div>
                    <p className={Styles.boldtxt}>신용점수 올리기</p>
                    <p>        통신비, 일반 납부내역 등의 서류를
                        토스에서 바로 제출해 신용점수를 올릴 수
                        있어요.</p>
                </div>
                <div className={Styles.container03}>
                    <div className={Styles.imgBox_size}>
                        <img src="/images/6221561.svg" className={Styles.img_03}></img>
                    </div><p className={Styles.boldtxt}>신용관리 알림</p>
                    <p>
                        신용점수에 변동이 생기면 토스가 알람을 보내드려요.
                        나의 신용점수가 바뀔 때마다 바로 확인하세요.
                    </p>
                </div>
                <div className={Styles.container03}>
                    <div className={Styles.imgBox_size}>
                        <img src="/images/6242197.svg" className={Styles.img_02}></img>
                    </div><p className={Styles.boldtxt}>신용관리 팁</p>

                    신용점수 관리가 막막하다면?
                    신용관리 팁 콘텐츠를 한번 읽어보세요.
                </div>
            </div>
        </div>
    );
}

export default ThirdContent;