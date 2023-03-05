import React from "react";

import Styles from './MainSection.module.css';
/* slide */
import "../css/slick.css";
import "../css/slick-theme.css";
import Slider from "react-slick";

function MainSection() {

    const settings = {
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true, 	//무한 반복 옵션	 
                    slidesToShow: 4,		// 한 화면에 보여질 컨텐츠 개수
                    slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
                    speed: 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
                    arrows: true, 		// 옆으로 이동하는 화살표 표시 여부
                    dots: true, 		// 스크롤바 아래 점으로 페이지네이션 여부
                    autoplay: true,			// 자동 스크롤 사용 여부
                    autoplaySpeed: 1000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
                    pauseOnHover: true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
                    vertical: false,		// 세로 방향 슬라이드 옵션
                    //prevArrow: "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
                    //nextArrow: "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
                    dotsClass: "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
                    draggable: true, 	//드래그 가능 여부 
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            }
        ]

    };
    return (
        <div className={Styles.MainSection}>
            <div className={Styles.MainSectionBox}>
                <div className={Styles.container01}>
                    <div className={Styles.sliderBox}>
                        <Slider {...settings}>
                            <div className={Styles.imgBox}>
                                <img src="/images/mydata.jpg"/>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className={Styles.container02}>
                    <div>
                        <h2>주요 서비스</h2>
                        <ul>
                            <li>전체계좌조회</li>
                            <li>계좌이체</li>
                            <li>빠른조회</li>
                            <li>보안센터</li>
                            <li>고객우대제도</li>
                            <li>고객우대제도</li>
                            <li>소비자보호</li>
                            <li>상담/예약</li>
                        </ul>
                    </div>
                    <span className={Styles.side_bar}></span>
                    <div>
                        <h2>금융상품</h2>
                        <ul>
                            <li>예금</li>
                            <li>대출</li>
                            <li>펀드</li>
                            <li>외환</li>
                            <li>신탁</li>
                            <li>퇴직연금</li>
                            <li>보험</li>
                            <li>ISA</li>
                        </ul>
                    </div>
                    <span className="side_bar"></span>
                    <div>
                        <h2>카드</h2>
                        <ul>
                            <li>카드신청</li>
                            <li>카드조회</li>
                            <li>카드/분실신고</li>
                            <li>카드/상담</li>
                            <li>이벤트</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSection;