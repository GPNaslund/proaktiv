import ServiceItem from '@/components/service_item/service_item'
import Image from 'next/image'

export default function Home() {
  return (
   <ServiceItem
    serviceName='test'
    serviceDescription='test'
    serviceImageSrc='test'
   />
  )
}
