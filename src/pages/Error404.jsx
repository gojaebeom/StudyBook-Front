import { Link } from "react-router-dom";
import Error404Img from "../assets/images/404.svg";

const Error404 = () => {
    return(
    <div className="fixed w-full left-0 top-0 bg-indigo-900 overflow-hidden h-screen">
        <img src={Error404Img} alt="cover" className="absolute h-full w-full object-cover"/>
        <div className="inset-0 bg-black opacity-25 absolute">
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
            <div className="w-full font-mono flex flex-col items-center relative z-10">
                <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                    Not Found
                </h1>
                <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                    404
                </p>
                <Link to="/" className="font-extrabold text-8xl my-10 text-white underline ">
                    Go to Home
                </Link>
            </div>
        </div>
    </div>
    );
}
export default Error404;