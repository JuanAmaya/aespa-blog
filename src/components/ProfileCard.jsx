import MovableGif from "./MovableGif";

export default function ProfileCard({
  name,
  idolLogo,
  realname,
  birthDate,
  idolImg,
  idolIcon,
}) {
  return (
    <div
      className={`flex flex-col gap-8 relative ${
        name == "winter" || name == "ningning"
          ? "md:flex-row-reverse"
          : "md:flex-row"
      }`}
    >
      <div className="">
        <div className="bg-mainBlue text-white font-bold text-center text-2xl p-2 border-4 border-black arialFont">
          <span className="uppercase">{name}</span>
          <span>.exe</span>
        </div>
        <div className="bg-windowsGray p-4 border-x-4 border-b-4 border-black flex flex-col items-center">
          <img src={idolLogo} alt={`${name} logo`} className="w-96 md:w-192" />
          <div className="flex flex-col font-bold italic text-mainBlue text-xl arialFont">
            <span>NAME: {realname}</span>
            <span>BIRTH: {birthDate}</span>
          </div>
        </div>
      </div>

      <MovableGif
        gifSrc={idolIcon}
        gifAlt={`${name} icon`}
        styles={`absolute w-52 md:bottom-0  z-10 ${
          name == "winter" || name == "ningning" ? "md:right-9" : "md:left-9"
        }`}
      />

      <div className="h-128 overflow-hidden md:h-auto relative">
        <img
          src="./profile/noise.gif"
          alt="noise"
          className="absolute md:h-full w-full opacity-10"
        />
        <img
          src={idolImg}
          alt={`${name} pics`}
          className="w-full md:h-full md:object-cover"
        />
      </div>
    </div>
  );
}
