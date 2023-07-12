'use client'

import ServiceItem from '@/components/service_item/service_item'
import ServiceItemSwiper from '@/components/service_item_swiper/service_item_swiper'
import Image from "next/legacy/image"
import useMediaQuery from '@/util/use_media_query'
import InfoItem from '@/components/info_item/info_item'
import OwnerPresentation from '@/components/owner_presentation/owner_presentation'

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const getImageSource = (imageName: string) => {
    if (isMobile) {
      return `/${imageName}-sm.jpg`;
    } else if (isTablet) {
      return `/${imageName}-md.jpg`;
    } else {
      return `/${imageName}-lg.jpg`;
    }
  }

  const items: JSX.Element[] = [
    <ServiceItem
    key={1}
    serviceName='Naprapati'
    serviceDescription='Undersökning och behandling av leder, nerver och muskler. 
    Målet med behandlingen är att ge snabb symptomlindring och långvarig förbättring.
    Behandlingen utförs av leg.Naprapat med lång erfarenhet av att behandla både akuta
    och återkommande besvär.'
    price1='20min 595:-'
    price2='35min 795:-'
    price3='50min 995:-'
    serviceImageSrc={getImageSource('stiff-neck-woman')}
   />,
   <ServiceItem
   key={2}
   serviceName='Massage'
   serviceDescription='För dig som vill uppnå avslappning, ökad rörlighet och minskad smärta. 
   Behandlingen anpassas alltid efter dina behov och preferenser. Vi utför Svensk klassisk massage, 
   djupgående idrottsmassage och symptomorienterad medicinsk massage.'
   price1='35min 795:-'
   price2='50min 995:-'
   price3=''
   serviceImageSrc={getImageSource('massage-table')}
  />,
   <ServiceItem
   key={3}
   serviceName='Rehabilitering'
   serviceDescription='Träning med fokus på din hälsa. Rätt variation, belastning och mängd är en
   viktig nyckel för att du ska må bra och prestera i livet. Vi utformar ett individanpassat program 
   för just dig, och du lär dig hur du tränar rätt för att behandla och förebygga besvär.'
   price1='50min 995:-'
   price2=''
   price3=''
   serviceImageSrc={getImageSource('workout')}
  />,
  <InfoItem
   key={4}
   infoHeader='Proaktiv Idrottscenter'
   infoBody='En modern klinik med forskningsbaserat helhetsperspektiv. 
   Vår passion ligger i att hjälpa från smärta och skada till stark och välmående.
   Vi finns belägna inuti Stockholm Stadion, i anslutning till Kampsportstadion.'
   infoImageSrc={getImageSource('about-us')}
   additionalComponents={[<OwnerPresentation key={5}/>]}
  />,
  ]
  return (
   <ServiceItemSwiper items={items}/>
  )
}
