import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";
import Option from "./Option";

export default function ToMenuHeader({ children }) {
  return (
    <>
      <PageTitle>{children}</PageTitle>
      <div className="mt-4">
        <Link to={"/"}>
          <Option title={"Menu"} icon={"/icons/Icon-Menu.png"} />
        </Link>
      </div>
    </>
  );
}
