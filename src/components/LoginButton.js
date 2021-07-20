import KakaoImg from "../images/kakao.png";
import GoogleImg from "../images/google.png";
import axios from "axios";

export default function LoginButton(){

  const googleLoginClick = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    const res = await axios({
      method:"post",
      url:"https://apitest.acme.com/oauth/token",
      headers:{
        "Content-type":"application/x-www-form-urlencoded;charset=utf-8",
        "Authorization":"Basic 880767493513-ried2fter5tut31am250f867tgv7ms14.apps.googleusercontent.com",
      },
      data:params, 
    })
    .then(data => data.data)
    .catch(err => console.log(err));
  }

  return(
    <div className="
      fixed right-6 bottom-6 md:static
      w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center
      border border-gray-300"
    >
      <button title="로그인하여 멋진 글을 작성해주세요!" className="
        relative group
        w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-300
        flex flex-col items-center justify-center">
        <i className="fas fa-user-astronaut text-xl md:text-4xl text-gray-500"></i>
        {/* 카카오 로그인 버튼 */}
        <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`} className="opacity-0 group-hover:opacity-100 absolute -left-7 -top-6 w-11 h-11 
          rounded-full transition-opacity bg-yellow-200  overflow-hidden flex justify-center items-center border"
        >
          <img src={KakaoImg} alt="kakao img" className="rounded-full"/>
        </a>

        {/* 구글 로그인 버튼 */}
        <div className="opacity-0 group-hover:opacity-100 absolute -right-7 -bottom-6 w-11 h-11 
        rounded-full border bg-white transition-opacity flex justify-center items-center"
          onClick={()=>alert("개발중입니다 😅")}
        >
          <img src={GoogleImg} alt="kakao img" className="w-8/12 h-11/8"/>
        </div>
      </button>
    </div>

  )
}