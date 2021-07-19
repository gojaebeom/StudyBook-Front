import { Link } from "react-router-dom";

export default function LoginButton(){
  return(
  <div className="
  fixed right-6 bottom-6 md:static
  w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center
  border border-gray-300 
  ">
    <Link to="/users/login" className="
      w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-300
      flex flex-col items-center justify-center">
      <i className="fas fa-sign-in-alt text-3xl text-gray-500"></i>
      {/* <span className="font-noto-light text-base text-white">로그인</span> */}
    </Link>
  </div>
  )
}