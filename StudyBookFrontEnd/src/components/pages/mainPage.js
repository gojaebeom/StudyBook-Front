import { Link } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import img from "../../images/StudyBook.svg";

function MainPage(){
    return(
    <DefaultLayout>
        <div id="filter" className="w-full border mb-5">
            <button className="mr-5">최신순</button>
            <button className="mr-5">오래된순</button>
            <button className="mr-5">인기순</button>
        </div>

        <div className="w-full grid grid-flow-col md:grid-flow-row md:grid-cols-3 md:grid-rows-3 md:gap-4">
            
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
        </div>
    </DefaultLayout>
    );
}
export default MainPage;