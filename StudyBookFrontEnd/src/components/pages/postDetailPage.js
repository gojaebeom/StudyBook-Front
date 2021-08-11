import { Link } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import img from "../../images/StudyBook.svg";

function PostDetailPage(){
    return(
    <DefaultLayout>
        <div className="w-10/12">
            <div className="w-full font-noto-black text-5xl text-black leading-tight flex justify-center">자바스크립트를 활용하여 정렬 알고리즘을 구현해보자</div>
            <div className="flex justify-center items-center my-10">
                <Link to="/users/1" className="w-16 h-16 flex justify-center items-center border rounded-full mr-3">
                    <img src={img} alt="img" className="rounded-full w-12 h-12"/>
                </Link>
                <div className="flex items-center">
                    <div className="flex flex-col items-start  mr-5">
                        <div className="font-pacifico text-gray-600">written by</div>
                        <Link to="/users/1"  className="font-noto-bold text-lg text-gray-700">안녕봇</Link>
                    </div>
                    <div className="flex flex-col items-start ">
                        <div className="font-pacifico text-gray-600">posted on</div>
                        <div className="font-noto-bold text-lg text-gray-700">2021. 08. 01</div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
    );
}
export default PostDetailPage;