import ServiceItem from '@/components/service_item/service_item'
import ServiceItemSwiper from '@/components/service_item_swiper/service_item_swiper'
import Image from 'next/image'

export default function Home() {
  const items: JSX.Element[] = [
    <ServiceItem
    key={1}
    serviceName='test'
    serviceDescription='test'
    serviceImageSrc='test'
   />,
   <ServiceItem
   key={2}
   serviceName='test'
   serviceDescription='test2'
   serviceImageSrc='test'
  />,
  ]
  return (
   <ServiceItemSwiper items={items}/>
  )
}
