import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { ISite } from "../../types";
import Site from "./Elements/Site";

import "swiper/css";
import "swiper/css/pagination";

import './index.scss';
import graffiti from '../../assets/images/graffiti.png';

interface ISitesSettings {
    sites: ISite[],
    audioCollections: string[]
}

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

const SitesSettings = ({ sites, audioCollections }: ISitesSettings) => {

    return (
        <div className="sites-settings">
            <header className="sites-settings__header">
                <svg className="sites-settings_icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25.432 25.432">
                    <path className="a"
                          d="M25.432,11.126H14.305V0H11.126V11.126H0v3.179H11.126V25.432h3.179V14.305H25.432Z"/>
                </svg>
                <svg className="sites-settings_icon" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20.939 25.126">
                    <path className="a"
                          d="M17.7,4.188V2.094A2.094,2.094,0,0,0,15.61,0H9.328A2.094,2.094,0,0,0,7.235,2.094V4.188H2V6.282H4.094v15.7a3.141,3.141,0,0,0,3.141,3.141H17.7a3.141,3.141,0,0,0,3.141-3.141V6.282h2.094V4.188ZM11.422,17.8H9.328V11.516h2.094Zm4.188,0H13.516V11.516H15.61Zm0-13.61H9.328V2.094H15.61Z"
                          transform="translate(-2)"/>
                </svg>
            </header>
            <div className="sites-settings__body">
                <Swiper
                    className="sites-settings__slider"
                    pagination={{
                        clickable: true
                    }}
                    slidesPerView={1}
                >
                    {sites.map(site => (
                        <SwiperSlide key={site.name}>
                            <Site {...site} audioCollections={audioCollections}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <footer className="sites-settings__footer">
                <img className="sites-settings__graffiti" src={graffiti} alt="Граффити"/>
            </footer>
        </div>
    );
};

export default SitesSettings;