import FacebookLink from "@/util/facebook_link";
import InstagramLink from "@/util/instagram_link";
import Image from "next/legacy/image";

export default function NavBarTablet() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 grid tablet-lg:grid-cols-4 grid-cols-5 w-full z-20 p-5 bg-white"
      id="main-grid"
    >
      <div className="col-span-1 flex items-center justify-start z-20">
        <Image
          src="/Mini-bones.svg"
          alt="Proaktiv logo"
          className=""
          width={40}
          height={40}
        />
      </div>
      <div className="col-span-2 flex flex-col items-center text-xs justify-self-end tablet-lg:justify-self-center">
        <a href="mailto:info@proaktividrottscenter.se">
          info@proaktividrottscenter.se
        </a>
        <a href="tel:0812137337">08-12137337</a>
        <p>Lidingövägen 1, 11433 Stockholm</p>
      </div>
      <div className="col-span-2 tablet-lg:col-span-1 justify-self-end grid grid-cols-2">
        <div className="">
          <a href={InstagramLink("proaktividrottscenter")} target="_blank">
            <Image
              src="/instagram.svg"
              alt="instagram icon"
              width={35}
              height={35}
            />
          </a>
          <a href={FacebookLink("proaktividrottscenter")} target="_blank">
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
        <div className="">
          <a
            href="https://system.easypractice.net/book/proaktiv-idrottscenter"
            target="_blank"
            className="pointer-events-none"
          >
            <button className="text-black text-sm font-bold py-2 px-4 rounded-lg border-black border opacity-20">
              Boka tid
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
