import React from "react";
import Styles from './SecondContent.module.css'

function SecondContent() {

    return (
        <div className={Styles.background}>
            <div className={Styles.container}>
                <div>
                    <h2>대출</h2>
                    <p className={Styles.fontSize3}>여러 은행의 조건을
                        1분 만에
                        확인해보세요</p>
                        <br/>
                    <p className={Styles.fontSize3}>
                        한도는 높게,<br/>
                        금리는 낮게,<br/>
                        부담은 적게.</p>
                        <br/>
                    <p className={Styles.fontSize2}>
                        앉은 자리에서 여러 은행의 한도와 금리를 비교하고<br/>
                        내게 꼭 맞는 대출을 찾아보세요.<br/>
                        신용, 비상금, 대환, 주택담보대출 모두 가능해요.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SecondContent;