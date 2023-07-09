import Image from "next/image";

type ServiceItemProps = {
    serviceName: string;
    serviceDescription: string;
    serviceImageSrc: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ serviceName, serviceDescription, serviceImageSrc }) => {
    return (
        <div className="relative h-screen w-screen">
            <div className="relative z-10 px-10 pt-32">
                <h1 className="text-white text-2xl pb-5">Testing</h1>
                <p className="text-white text-xl pr-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.
                </p>
                <p>
                    {serviceDescription}
                </p>
            </div>
            <Image
                // width={960}
                // height={540}
                src='/testimg.jpg'
                alt="test"
                fill={true}
                objectFit="cover"
            />
        </div>
    )
}

export default ServiceItem;