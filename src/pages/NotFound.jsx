import { Link } from "react-router-dom";
import Option from "../components/Option";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-8 gap-4">
      <h1 className="text-7xl text-aespaPink font-bold italic timesFont text-center">
        Page Not Found :&#40;
      </h1>
      <Link to={"/"}>
        <Option title={"Menu"} icon={"/icons/Icon-Menu.png"} />
      </Link>
      <img src="NotFound.gif" alt="Aespa sad" className="w-192 mt-8" />
    </div>
  );
}
