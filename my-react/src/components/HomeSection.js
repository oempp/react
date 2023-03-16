import React, { useState, useRef, useEffect } from 'react';

import BottomSection from './BottomSection';
import Shadowdom from './Shadowdom';

import HomeExp from './HomeExp'
import HomeContent01 from './HomeContent01'
import HomeContent02 from './HomeContent02'

/* scss */
import Styles from '../styles/styles.module.css';
/* txt css */
import '../styles/txt.css';
/* js */
import $ from 'jquery';


function TopSection() {
    const [isShow, setIsShow] = useState(false);

    const MenuItem = useRef();


    useEffect(() => {
        setIsShow(!isShow)
        //MenuItem.current.style.color = 'red';       
        var $menu = $('.Menu-list'),
            $item = $('.Menu-list-item'),
            w = $(window).width(), //window width
            h = $(window).height(); //window height

        $(window).on('mousemove', function (e) {
            var offsetX = 0.5 - e.pageX / w, //cursor position X
                offsetY = 0.5 - e.pageY / h, //cursor position Y
                dy = e.pageY - h / 2, //@h/2 = center of poster
                dx = e.pageX - w / 2, //@w/2 = center of poster
                theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
                angle = theta * 180 / Math.PI - 90, //convert rad in degrees
                offsetPoster = $menu.data('offset'),
                transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

            //get angle between 0-360
            if (angle < 0) {
                angle = angle + 360;
            }

            //poster transform
            $menu.css('transform', transformPoster);

            //parallax for each layer
            $item.each(function () {
                var $this = $(this),
                    offsetLayer = $this.data('offset') || 0,
                    transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

                $this.css('transform', transformLayer);
            });
        });
    }, [])
    return (
        <>
            <div className={Styles.main_bg}>
                <div className={Styles.top_section_container}>
                    <div className={`${Styles.top_section_txt} ${Styles.font_color}`}>
                        <h1 className={isShow ? 'fade-in-txt' : 'fade-out-txt'}>{/* UI / UX Designer & Front-end Developer */}
                            <ul className="Menu-list" data-offset="10">
                                <li className="Menu-list-item" data-offset="20" onClick>
                                    UI / UX
                                    <span className="Mask"><span>UI / UX</span></span>
                                    <span className="Mask"><span>UI / UX</span></span>
                                </li>
                                <li className="Menu-list-item" data-offset="16" onClick>
                                    DESIGNIMG
                                    <span className="Mask"><span>DESIGNIMG</span></span>
                                    <span className="Mask"><span>DESIGNIMG</span></span>
                                </li>
                                <li className="Menu-list-item" data-offset="12" onClick>
                                WEB & APP
                                    <span className="Mask"><span>WEB & APP</span></span>
                                    <span className="Mask"><span>WEB & APP</span></span>
                                </li>
                                <li className="Menu-list-item" data-offset="8" onClick>
                                    DEVELOPMENT
                                    <span className="Mask"><span>DEVELOPMENT</span></span>
                                    <span className="Mask"><span>DEVELOPMENT</span></span>
                                </li>
                            </ul>
                        </h1>
                    </div>
                    <div className={Styles.top_section_contitem}>
                        {/* <div>
                            <iframe src="https://giphy.com/embed/sPE10urWXK7YLZ7oli" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mobile-ui-ux-sPE10urWXK7YLZ7oli">via GIPHY</a></p>
                        </div> */}
                    </div>
                </div>
                {/* <BottomSection /> */}
            </div>
            <HomeExp />
            <HomeContent01 />
            <HomeContent02 />
        </>
    );

}

export default TopSection;