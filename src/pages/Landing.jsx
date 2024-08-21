import { Link } from "react-router-dom";
import Option from "../components/Option";
import PageTitle from "../components/PageTitle";

export default function Landing() {
  return (
    <>
      <PageTitle>Welcome to AESPA’s Homepage</PageTitle>
      <div className="flex justify-center items-center my-12 gap-8 flex-col md:flex-row">
        <div className="uppercase font-bold arialFont text-2xl">
          <span className="text-brigthRed">◆ MENU ◆</span>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/aespa-blog/profile">
                <Option title={"Profile"} icon={"./icons/Icon-Profile.png"} />
              </Link>
            </li>
            <li>
              <Link to="/aespa-blog/discography">
                <Option title={"Discography"} icon={"./icons/Icon-Disco.png"} />
              </Link>
            </li>
            <li>
              <Link to="/aespa-blog/musicvideos">
                <Option
                  title={"Music Videos"}
                  icon={"./icons/Icon-Video.png"}
                />
              </Link>
            </li>
          </ul>
        </div>
        <img
          src="./Landing/FullGroup.gif"
          alt="Korean Group Aespa"
          className="w-96"
        />
      </div>

      <div className="flex justify-center items-center mx-4">
        <p className="bg-white max-w-3xl text-aespaBlue timesFont font-semibold text-center text-xl p-2">
          Hello Web Surfer Aespa is a South Korean girl group formed by SM
          Entertainment. The group consists of four members: Karina, Giselle,
          Winter, and Ningning. If you want to know them more check out the
          profile page. The group is known for popularizing the metaverse
          concept and hyperpop music in K-pop. Check it out in the music videos
          page.
        </p>
      </div>

      <div className="relative">
        <div className="mx-auto absolute -top-44 left-0 right-0 w-max">
          <img
            src="./Landing/Col-Cart.gif"
            alt="Shopping cart"
            className="w-56"
          />
        </div>
        <div className="bg-brightYellow flex flex-col justify-center items-center p-2 gap-2 mt-44 mb-10">
          <span className="text-brigthRed font-bold italic arialFont text-2xl">
            The 1st Album Armageddon is out!
          </span>
          <a href="https://aespa.lnk.to/ARMGDDNJ" target="_blank">
            <Option title={"Listen Now"} icon={"./icons/Icon-Speaker.png"} />
          </a>
        </div>
      </div>

      <div className="relative p-4 max-w-fit mx-auto">
        <div className="grid grid-cols-2 max-w-xl mx-auto">
          <img src="./Landing/Col-1.gif" alt="Armageddon MV" />
          <img src="./Landing/Col-2.gif" alt="Live My life MV" />
          <img src="./Landing/Col-3.gif" alt="Long Chat MV" />
          <img src="./Landing/Col-4.gif" alt="Supernova MV" />
        </div>
        <img
          src="./Landing/Col-AlbumLogo.png"
          alt="Armageddon logo"
          className="w-130 absolute top-0 left-1/2 -translate-x-1/2"
        />
        <div className="absolute top-0 left-32">
          <img src="./Landing/Col-Dog.gif" alt="Ballong dog" className="w-48" />
        </div>

        <div className="absolute top-2/3 right-32">
          <img
            src="./Landing/Col-Gummies.gif"
            alt="Gummi bears"
            className="w-48"
          />
        </div>
      </div>
    </>
  );
}
