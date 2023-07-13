type ServiceGridProps = {
    items: React.ReactElement[];
};

const ServiceItemGrid: React.FC<ServiceGridProps> = ({ items }) => {
    return (
        <div className="w-screen h-screen pt-24 pb-12 px-12">
            <div className=" bg-white w-full h-full grid grid-cols-3 gap-5">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={index === items.length - 1 ? 'col-span-3' : 'col-span-1'}

                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceItemGrid;