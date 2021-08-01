import { Link } from "react-router-dom";

export default function TopTagList(){
  return(
  <div className="flex flex-col items-start w-full mt-10 ml-3">
    <div className="font-noto-bold text-xl text-gray-500 mb-2">
      인기 태그
    </div>
    <div className="flex flex-wrap">
      <Link to="/" className="font-noto-regular text-blue-500 mr-2">
        # 자바스크립트
      </Link>
      <Link to="/" className="font-noto-regular text-blue-500 mr-2">
        # 자바
      </Link>
      <Link to="/" className="font-noto-regular text-blue-500 mr-2">
        # C#
      </Link>
      <Link to="/" className="font-noto-regular text-blue-500 mr-2">
        # 아마존
      </Link>
    </div>
  </div>
  );
}