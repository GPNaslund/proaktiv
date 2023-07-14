'use client'

import ServiceItem from '@/components/service_item/service_item'
import ServiceItemSwiper from '@/components/service_item_swiper/service_item_swiper'
import useMediaQuery from '@/util/use_media_query'
import InfoItem from '@/components/info_item/info_item'
import OwnerPresentation from '@/components/owner_presentation/owner_presentation'
import ServiceItemGrid from '@/components/service_item_grid/service_item_grid'
import NavBarTablet from '@/components/navbar/navbar_tablet'
import NavBar from '@/components/navbar/navbar'

export default function Home() {
  const isLargeScreen = useMediaQuery('(min-width: 700px)');

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
      serviceImageSrc={isLargeScreen ? '/stiff-neck-woman-md.jpg' : '/stiff-neck-woman-sm.jpg'}
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
      serviceImageSrc={isLargeScreen ? '/massage-table-md.jpg' : '/massage-table-sm.jpg'}
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
      serviceImageSrc={isLargeScreen ? '/workout-md.jpg' : '/workout-sm.jpg'}
    />,
    <InfoItem
      key={4}
      infoHeader='Proaktiv Idrottscenter'
      infoBody='En modern klinik med forskningsbaserat helhetsperspektiv. 
   Vår passion ligger i att hjälpa dig från smärta och skada till stark och välmående.
   Vi finns belägna inuti Stockholm Stadion, i anslutning till Kampsportstadion.'
      infoImageSrc={isLargeScreen ? '/kliniken-md.jpg' : '/kliniken-sm.jpg'}
      additionalComponents={[<OwnerPresentation key={5} />]}
    />,
  ]
  if (isLargeScreen) {
    return (
      <div>
        <NavBarTablet />
        <ServiceItemGrid items={items} />
      </div>
    )
  } else {
    return (
      <div>
        <NavBar />
        <ServiceItemSwiper items={items} />
      </div>
    )
  }
}
