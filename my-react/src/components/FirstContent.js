import React from "react";
import Styles from './FirstContent.module.css'

function FirstContent() {
    return (
        <div className={Styles.background}>
            <div className={Styles.container}>
                <div className={Styles.contentBox}>
                    <div>
                        <h2>송금</h2>
                        <p className={Styles.fontSize3}>
                            간편하고 안전하게<br />
                            수수료는 평생 무료로,<br />
                            이런 송금 써보셨나요?</p>
                    </div>
                </div>
                <div className={Styles.contentBox}>
                    <div className={Styles.imgBox}> </div>
                </div>

            </div>

        </div>
    );
}


export default FirstContent;