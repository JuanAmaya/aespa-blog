import Divider from "./Divider";
import MovableGif from "./MovableGif";

export default function AlbumCard({ cover, title, bgColor, songs, icon }) {
  return (
    <>
      <div className="grid grid-rows-2 justify-center md:grid-rows-1 md:grid-cols-2 gap-4">
        <img src={cover} alt={`${title} cover`} className="w-96" />
        <div className="relative">
          <p
            className={`uppercase font-bold italic arialFont text-2xl p-2 text-center ${bgColor}`}
          >
            {title}
          </p>
          <ul className="flex flex-col gap-2 my-4">
            {songs.map((song, i) => (
              <li key={i} className="text-mainBlue font-bold text-xl arialFont">
                ● {song}
              </li>
            ))}
          </ul>
          <MovableGif
            gifSrc={icon}
            gifAlt={`${title} gif`}
            styles={"absolute w-44 bottom-0 right-0 z-10"}
          />
        </div>
      </div>
      <Divider />
    </>
  );
}
