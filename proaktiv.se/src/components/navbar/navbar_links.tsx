import Link from "next/link";
import Image from "next/legacy/image";
import InstagramLink from "@/util/instagram_link";
import FacebookLink from "@/util/facebook_link";

type NavBarProps = {
  ulStyling?: string;
  handleMenuClick: () => void;
}

const NavBarLinks: React.FC<NavBarProps> = ({ ulStyling, handleMenuClick }) => {

  const handleLinkClick = (index: number) => {
    const event = new CustomEvent('swiperLinkClick', {detail: {index: index}});
    window.dispatchEvent(event);
  };

  return (
    <ul className={ulStyling}>
        <li className="lg:mr-10">
          <button onClick={() => {
            handleMenuClick();
            handleLinkClick(0);
          }}>Naprapati</button>
        </li>
        <li className="lg:mr-10">
          <button onClick={() => {
            handleMenuClick();
            handleLinkClick(1);
          }}>Massage</button>
        </li>
        <li className="lg:mr-10">
          <button onClick={() => {
            handleMenuClick();
            handleLinkClick(2);
          }
          }>Rehabilitering</button>
        </li>
        <li className="lg:mr-10">
          <button onClick={() => {
            handleMenuClick();
            handleLinkClick(3);
          }}>Proaktiv Idrottscenter</button>
        </li>
        <li className="pt-16">
          <div className="grid grid-cols-3">
            <a href={InstagramLink('proaktividrottscenter')} target="_blank">
              <Image 
                src="/instagram.svg"
                alt="instagram icon"
                width={35}
                height={35}
              />
            </a>
            <a href={FacebookLink('proaktividrottscenter')} target="_blank">
            <Image 
              src="/facebook.svg"
              alt="facebook icon"
              width={35}
              height={35}
            />
          </a>
          <a href="https://goo.gl/maps/BVbHc4pMbpoWM4eq6" target="_blank">
            <Image 
              src="/googlemaps.svg"
              alt="google maps icon"
              width={35}
              height={35}
            />
          </a>
          </div>
        </li>
        <li className="lg:mr-10 text-xs flex flex-col items-center">
          <p>info@proaktividrottscenter.se</p>
          <p>08-12137337</p>
          <p>Lidingövägen 1, 11373 Stockholm</p>
        </li>
    </ul>
  );
}

export default NavBarLinks;