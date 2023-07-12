'use client'

import ServiceItem from '@/components/service_item/service_item'
import ServiceItemSwiper from '@/components/service_item_swiper/service_item_swiper'
import Image from "next/legacy/image"

export default function Home() {
  const items: JSX.Element[] = [
    <ServiceItem
    key={1}
    serviceName='Naprapati'
    serviceDescription='Undersökning och behandling av leder, nerver och muskler. Målet med behandlingen är att ge snabb symtomlindring och långvarig förbättring.'
    price1='20min 595:-'
    price2='35min 795:-'
    price3='50min 995:-'
    serviceImageSrc='/stiff-neck-woman.jpg'
   />,
   <ServiceItem
   key={2}
   serviceName='Massage'
   serviceDescription='Massage för avslappning, ökad rörlighet och minskad smärta. Vi utför Svensk klassisk massage, idrottsmassage och medicinsk massage.'
   price1='35min 795:-'
   price2='50min 995:-'
   price3=''
   serviceImageSrc='/massage-table-2.jpg'
  />,
   <ServiceItem
   key={3}
   serviceName='Rehabilitering'
   serviceDescription='Träning med fokus på din hälsa. Vi utformar ett individ anpassat program för just dig, och du lär dig hur du tränar rätt för att behandla och förebygga besvär.'
   price1='50min 995:-'
   price2=''
   price3=''
   serviceImageSrc='/workout.jpg'
  />,
  <ServiceItem
   key={4}
   serviceName='Proaktiv Idrottscenter'
   serviceDescription='En modern klinik med forskningsbaserat helhetsperspektiv. Vi hjälper dig snabbt komma ur smärta och skapa långvarig förbättring.'
   price1='Gustav Näslund, leg.Naprapat'
   price2='Synöve Olsson, lic.Personlig Tränare'
   price3=''
   serviceImageSrc='/about-us.jpg'
  />,
  ]
  return (
   <ServiceItemSwiper items={items}/>
  )
}
