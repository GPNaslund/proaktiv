import InstagramLink from '@/util/instagram_link';
import Image from 'next/image';
import './ownerpresentation.css';

export default function OwnerPresentation() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 pt-5 gap-x-5 text-white text-center">
            <div className="md:col-start-2 flex flex-col justify-center items-center">
                <div className='owner-image rounded-full overflow-hidden w-40'>
                <Image 
                    src='/gustav-sm.jpg'
                    width={160}
                    height={160}
                    alt='bild på Gustav Näslund'
                    quality={100}
                />
                </div>
                <div className="text-md tablet:text-sm pt-2">
                    <p>Gustav Näslund</p>
                    <p>Leg.Naprapat</p>
                    <a href={InstagramLink('naprapatgustav')}>@naprapatgustav</a>
                </div>
            </div>
            <div className="md:col-start-3 flex flex-col justify-center items-center">
                <div className='owner-image rounded-full overflow-hidden w-40'>
                    <Image 
                        src='/synove-sm.jpg'
                        width={160}
                        height={160}
                        alt='bild på Synöve Asplund'
                        quality={100}
                    />
                </div>
                <div className="text-md tablet:text-sm pt-2">
                    <p>Synöve Asplund</p>
                    <p>Lic.Personlig Tränare</p>
                    <a href={InstagramLink('synove_asplund')}>@synove_asplund</a>
                </div>
            </div>
        </div>
    )
}