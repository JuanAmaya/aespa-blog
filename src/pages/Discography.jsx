import AlbumCard from "../components/AlbumCard";
import LoadPageAnimation from "../components/LoadPageAnimation";
import ToMenuHeader from "../components/ToMenuHeader";
import DISCOGRAPHY from "../data/DISCOGRAPHY.json";
const DISCOGRAPHY_REVERSED = DISCOGRAPHY.reverse();

export default function Discography() {
  return (
    <LoadPageAnimation styles="flex flex-col items-center max-w-screen-md mx-auto">
      <ToMenuHeader>Discography</ToMenuHeader>
      <div className="mt-8">
        {DISCOGRAPHY_REVERSED.map((album) => (
          <AlbumCard
            key={album.id}
            title={album.title}
            bgColor={album.bgColor}
            cover={album.cover}
            songs={album.songs}
            icon={album.icon}
          />
        ))}
      </div>
    </LoadPageAnimation>
  );
}
