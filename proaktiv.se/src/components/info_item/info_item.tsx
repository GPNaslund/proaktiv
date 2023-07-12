'use client'

import Image from "next/legacy/image";
import './infoitem.css'
import React from "react";

type InfoItemProps = {
    infoHeader: string;
    infoBody: string;
    infoImageSrc: string;
    additionalComponents: JSX.Element[];
}

const InfoItem: React.FC<InfoItemProps> = ({ infoHeader, infoBody, infoImageSrc, additionalComponents }) => {
    return (
        <div className="relative h-screen w-screen">
            <div className="relative z-10 px-10 pt-24">
                <h1 className="text-white text-2xl pb-2">{infoHeader}</h1>
                <p className="text-white text-xl pr-5 whitespace-pre-line">
                    {infoBody}
                </p>
                {additionalComponents.map((element, index) => (
                    <React.Fragment key={index}>{element}</React.Fragment>
                ))}
            </div>
            <div className="image-container">
                <Image
                    src={infoImageSrc}
                    alt="test"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="image-overlay"></div>
            </div>
        </div>
    )
}

export default InfoItem;