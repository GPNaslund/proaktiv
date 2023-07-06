type ServiceItemProps = {
    serviceName: string;
    serviceDescription: string;
    serviceImageSrc: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ serviceName, serviceDescription, serviceImageSrc }) => {
    return (
        <p>Test</p>
    )
}

export default ServiceItem;