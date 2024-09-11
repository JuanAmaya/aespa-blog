import PROFILE from "../data/PROFILE.json";
import ProfileCard from "../components/ProfileCard";
import Divider from "../components/Divider";
import ToMenuHeader from "../components/ToMenuHeader";
import LoadPageAnimation from "../components/LoadPageAnimation";

export default function Profile() {
  return (
    <LoadPageAnimation styles="flex flex-col items-center max-w-screen-md mx-auto">
      <ToMenuHeader>Profile</ToMenuHeader>

      <div className="m-8">
        {PROFILE.map((idol, i) => (
          <>
            <ProfileCard
              key={idol.id}
              name={idol.idolName}
              idolLogo={idol.logo}
              realname={idol.realName}
              birthDate={idol.birthDate}
              idolImg={idol.pictures}
              idolIcon={idol.icon}
            />
            <Divider />
          </>
        ))}
      </div>
    </LoadPageAnimation>
  );
}
