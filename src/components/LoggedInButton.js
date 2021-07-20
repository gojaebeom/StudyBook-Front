import { Link } from "react-router-dom";
import CoverImg from "../images/cover.jpg";

export default function LoggedInButton() {
  return(
    <div className="
      fixed right-6 bottom-6 md:static
      w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center
      border cursor-pointer"
    >
      <Link to="/users/1" className="relative group 
        w-12 h-12 md:w-16 md:h-16 rounded-full bg-white
        flex flex-col items-center justify-center overflow-hidden">
        <img src={CoverImg} alt="profile img" className="w-full h-full"/>
      </Link>
    </div>
  );
}