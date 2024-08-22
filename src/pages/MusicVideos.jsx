import MovableGif from "../components/MovableGif";
import ToMenuHeader from "../components/ToMenuHeader";
import MUSICVIDEOS from "../data/MUSICVIDEOS.json";

export default function MusicVideos() {
  return (
    <div className="flex flex-col items-center max-w-screen-md mx-auto">
      <ToMenuHeader>Music Videos</ToMenuHeader>
      <div className="mt-28 relative">
        <div className="bg-red-300 bg-cover w-96 md:w-192 h-130 mx-auto overflow-y-scroll relative bg-[url('/MV/Space.gif')]">
          <div className="flex flex-col gap-20 mx-14">
            {MUSICVIDEOS.reverse().map((video) => (
              <div className="relative">
                <img
                  src={video.songLogo}
                  alt="Logo"
                  className="absolute md:-left-36 md:top-1/2 md:-translate-y-1/2 w-96 md:rotate-270"
                />
                <div className="my-8 md:mx-8 w-full h-96 pt-1/2">
                  <iframe className="w-full h-full" src={video.url}></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MovableGif
          gifSrc={"./MV/Corner1.gif"}
          gifAlt={"My World gif"}
          styles={"absolute -top-28 w-60"}
        />
        <MovableGif
          gifSrc={"./MV/Corner2.gif"}
          gifAlt={"Chips gif"}
          styles={"hidden md:block absolute -top-12 right-10 w-40"}
        />
        <MovableGif
          gifSrc={"./MV/Corner3.gif"}
          gifAlt={"Milk gif"}
          styles={"absolute -bottom-10 right-0 w-40"}
        />
        <MovableGif
          gifSrc={"./MV/Corner4.gif"}
          gifAlt={"Ballon dog gif"}
          styles={"hidden md:block absolute -bottom-0 -left-10 w-52"}
        />
      </div>
    </div>
  );
}
