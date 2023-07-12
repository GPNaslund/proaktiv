import InstagramLink from '@/util/instagram_link'
import Image from 'next/image'

export default function OwnerPresentation() {
    return (
        <div className="grid grid-cols-2 pt-5 gap-x-5 text-white text-center">
            <div className="flex flex-col">
                <div className='rounded-full overflow-hidden'>
                <Image 
                    src='/gustav-sm.jpg'
                    width={160}
                    height={160}
                    alt='bild på Gustav Näslund'
                    quality={100}
                />
                </div>
                <p>Gustav Näslund Leg.Naprapat</p>
                <a href={InstagramLink('naprapatgustav')}>@naprapatgustav</a>
            </div>
            <div className="flex flex-col">
                <div className='rounded-full overflow-hidden'>
                <Image 
                    src='/synove-sm.jpg'
                    width={160}
                    height={160}
                    alt='bild på Synöve Asplund'
                    quality={100}
                />
                </div>
                <p>Synöve Asplund Lic.Personlig Tränare</p>
                <a href={InstagramLink('synove_asplund')}>@synove_asplund</a>
            </div>
        </div>
    )
}