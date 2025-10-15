import React from 'react';
import {Images} from "../components/images.jsx";

export const About = () => {
    return (
        <>
            <div className={`h-[400px] overflow-y-hidden`}>
                <img
                    src={`${Images.bg_image3}`}
                    loading="lazy"
                    alt=""
                />
            </div>
        </>
    )
}