import React from "react";

import './index.scss';

const EditorsNavigation = () => {

    return (
        <nav className="editors-navigation">
            <div className="editors-navigation__line"/>
            <div className="editors-navigation_item">
                <svg className="editors-navigation_icon" xmlns="http://www.w3.org/2000/svg" width="53" height="53"
                     viewBox="0 0 53.016 53.016">
                    <g transform="translate(0 0)">
                        <path
                            d="M26.508,0A26.508,26.508,0,1,0,53.016,26.508,26.508,26.508,0,0,0,26.508,0Zm0,46.389A19.881,19.881,0,1,1,46.389,26.508,19.881,19.881,0,0,1,26.508,46.389Z"
                            transform="translate(0 0)"/>
                        <path
                            d="M14.253,16.838l-5.3,3.313A3.313,3.313,0,0,0,7.9,24.719h0a3.313,3.313,0,0,0,4.568,1.049l6.338-3.976a4.418,4.418,0,0,0,2.072-3.755V9.585a3.313,3.313,0,0,0-3.313-3.313h0a3.313,3.313,0,0,0-3.313,3.313Z"
                            transform="translate(8.941 7.583)"/>
                    </g>
                </svg>
                Редактор интервалов
            </div>
            <div className="editors-navigation_item">
                <svg className="editors-navigation_icon" xmlns="http://www.w3.org/2000/svg" width="53.016"
                     height="48.598" viewBox="0 0 53.016 48.598">
                    <path
                        d="M46.389,1H24.3a6.627,6.627,0,0,0-6.627,6.627v22.09a11.045,11.045,0,1,0,4.418,8.836V7.627A2.209,2.209,0,0,1,24.3,5.418h22.09A2.209,2.209,0,0,1,48.6,7.627v22.09a11.045,11.045,0,1,0,4.418,8.836V7.627A6.627,6.627,0,0,0,46.389,1Z"
                        transform="translate(0 -1)"/>
                </svg>
                Редактор звуков
            </div>
        </nav>
    );
};

export default EditorsNavigation;