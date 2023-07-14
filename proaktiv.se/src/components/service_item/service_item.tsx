'use client'

import Image from "next/legacy/image";
import './serviceitem.css'
import { useState } from 'react';

type ServiceItemProps = {
    serviceName: string;
    serviceDescription: string;
    serviceImageSrc: string;
    price1: string;
    price2: string;
    price3: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ serviceName, serviceDescription, serviceImageSrc, price1, price2, price3 }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    }
    return (
        <div className="relative h-screen w-screen tablet:h-full tablet:w-full tablet:rounded tablet:overflow-hidden">
            <div className="relative z-10 px-10 pt-28 tablet:px-5 tablet:pt-5 tablet:text-center">
                <h1 className="text-white text-2xl pb-2">{serviceName}</h1>
                <p className="text-white text-xl pr-8 whitespace-pre-line tablet:pr-0 tablet:text-lg">
                    {serviceDescription}
                </p>
                <p className="text-white text-l pr-16 mt-5 underline tablet:pr-0 tablet:mt-5">
                    Priser
                </p>
                <p className="text-white text-l pr-16 tablet:pr-0">
                    {price1}
                </p>
                <p className="text-white text-l pr-16 tablet:pr-0">
                    {price2}
                </p>
                <p className="text-white text-l pr-16 tablet:pr-0 tablet:pb-5">
                    {price3}
                </p>
            </div>
            <div className="image-container">
                <Image
                    src={serviceImageSrc}
                    alt={serviceName}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    onLoad={handleImageLoad}
                />
                {imageLoaded && <div className="image-overlay"></div>}
            </div>
        </div>
    )
}

export default ServiceItem;