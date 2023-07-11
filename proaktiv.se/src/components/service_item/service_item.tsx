'use client'

import Image from "next/image";
import './serviceitem.css'

type ServiceItemProps = {
    serviceName: string;
    serviceDescription: string;
    serviceImageSrc: string;
    price1: string;
    price2: string;
    price3: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ serviceName, serviceDescription, serviceImageSrc, price1, price2, price3 }) => {
    return (
        <div className="relative h-screen w-screen">
            <div className="relative z-10 px-10 pt-28">
                <h1 className="text-white text-2xl pb-2">{serviceName}</h1>
                <p className="text-white text-xl pr-16">
                    {serviceDescription}
                </p>
                <p className="text-white text-l pr-16 mt-5">
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
                    alt="test"
                    fill={true}
                    objectFit="cover"
                    quality={100}
                />
                <div className="image-overlay"></div>
            </div>
        </div>
    )
}

export default ServiceItem;