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
        <div className="relative h-screen w-screen">
            <div className="relative z-10 px-10 pt-28">
                <h1 className="text-white text-2xl pb-2">{serviceName}</h1>
                <p className="text-white text-xl pr-8 whitespace-pre-line">
                    {serviceDescription}
                </p>
                <p className="text-white text-l pr-16 mt-5 underline">
                    Priser
                </p>
                <p className="text-white text-l pr-16">
                    {price1}
                </p>
                <p className="text-white text-l pr-16">
                    {price2}
                </p>
                <p className="text-white text-l pr-16">
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