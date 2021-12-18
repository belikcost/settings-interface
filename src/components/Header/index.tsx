import React from "react";

import './index.scss';

const Header = () => {

    return (
        <header className="header">
            <a className="logo" href="/">
            <span className="logo__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32.355 32.301">
                <path className="a"
                      d="M2.7,8.083a2.7,2.7,0,0,0-2.7,2.7V21.564a2.7,2.7,0,0,0,2.7,2.7H6.471l9.706,8.058V.017L6.471,8.083Z"
                      transform="translate(0 -0.017)"/>
                <path className="a"
                      d="M22.089,13.741A6.749,6.749,0,0,0,15.348,7H14V9.7h1.348a4.044,4.044,0,0,1,0,8.089H14v2.7h1.348a6.749,6.749,0,0,0,6.741-6.741Z"
                      transform="translate(4.874 2.414)"/>
                <path className="a"
                      d="M15.348,3H14V5.7h1.348a9.437,9.437,0,1,1,0,18.874H14v2.7h1.348A12.133,12.133,0,0,0,15.348,3Z"
                      transform="translate(4.874 1.021)"/>
            </svg>
            </span>
                <h1 className="logo__text">
                    <span className="logo__text-bold">Donate</span>Notifier
                </h1>
            </a>
            <div>
                <div className="duration">
                    <div className="duration_block">
                        <div className="duration_item">0</div>
                        <div className="duration_item">0</div>
                    </div>
                    <div className="duration_separation">
                        <span className="duration_separation-item"/>
                        <span className="duration_separation-item"/>
                    </div>
                    <div className="duration_block">
                        <div className="duration_item">0</div>
                        <div className="duration_item">0</div>
                    </div>
                    <div className="duration_separation">
                        <span className="duration_separation-item"/>
                        <span className="duration_separation-item"/>
                    </div>
                    <div className="duration_block">
                        <div className="duration_item">0</div>
                        <div className="duration_item">0</div>
                    </div>
                </div>
                <p className="duration__description">Длительность работы расширения</p>
            </div>
        </header>
    );
};

export default Header;