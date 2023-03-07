import React from "react";
import Styles from './ThirdContent.module.css'

function ThirdContent() {

    return (
        <div className={Styles.background}>
            <div className={Styles.container}>
                <div>
                    <h2>신용</h2>
                    <p className={Styles.fontSize3}>
                        금융 생활의 첫 걸음,<br/>
                        신용점수를 미리<br/>
                        무료로 관리하세요</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default ThirdContent;