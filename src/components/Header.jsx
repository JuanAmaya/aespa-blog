const NUM = 3;

export default function Header({ bannerENG, bannerKOR }) {
  return (
    <header>
      <div className="flex flex-col items-center">
        <img src="/Landing/logo.gif" alt="Aespa logo" className="w-128" />
        <div className="w-72 md:w-128 overflow-hidden mt-4">
          <div className="w-max flex flex-row flex-nowrap gap-1 text-3xl text-mainBlue font-bold italic">
            {[...Array(NUM)].map((i) => (
              <div className="carousel arialFont" key={i}>
                <span>★ {bannerENG}</span>
                <span>★ {bannerKOR}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
