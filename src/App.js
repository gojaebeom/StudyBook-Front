import CoverImg from "./images/cover.jpg";
import CoverImg2 from "./images/cover2.jpg";

function App() {
    return (
        <div className="App w-full flex justify-center">
            <div className="w-full md:w-700 h-screen flex flex-col items-center">
                <header className="w-full py-6 flex justify-center items-center border-b border-gray-100">
                    <figure className="font-pacifico text-3xl text-black font-bold">
                        STUDYBOOK
                    </figure>
                </header>
                <br/>
                {/* 카드 */}
                <div className="w-full flex flex-col items-center">
                    <div className="group relative w-full p-6 ">
                        <i className="fas fa-quote-left group-hover:text-green-300 text-5xl text-green-100 transition-all"></i>
                        <h1 className="font-noto-black text-4xl 
                        bg-gradient-to-r from-green-400 to-blue-500 
                        bg-clip-text text-transparent mb-3">
                            객체지향, 함수지향 프로그래밍의 차이점을 알아보자
                        </h1>
                        <div className="flex justify-start items-center mb-3">
                            {/* 프로필 이미지 */}
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dotted flex justify-center items-center 
                            mr-3 hover:border-purple-300 transition-all cursor-pointer">
                                <img className="w-16 h-16 rounded-full" 
                                    src={CoverImg} alt="cover img" />
                            </div>
                            <div className="flex flex-col font-noto-medium text-2xl ">
                                <div className="font-noto-medium text-black text-2xl">
                                    안녕봇
                                </div>
                                <div className="font-noto-regular text-lg text-gray-500">
                                    방금 전 &nbsp;&nbsp;.12 읽음
                                </div>
                            </div>
                        </div>
                        <div className="font-noto-regular text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
            
                <div className="relative w-1/2 border-b border-gray-100 my-10">

                </div>

                {/* 카드 */}
                <div className="w-full flex flex-col items-center">
                    <div className="group relative w-full p-6 ">
                        <i className="group-hover:text-purple-300 fas fa-quote-left text-5xl text-purple-100 transition-all"></i>
                        <h1 className="
                        font-noto-black text-4xl 
                        bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                        bg-clip-text text-transparent mb-3">
                            Javascript를 활용한 정렬 알고리즘
                        </h1>
                        <div className="flex justify-start items-center mb-3">
                            {/* 프로필 이미지 */}
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dotted flex justify-center items-center 
                            mr-3 hover:border-purple-300 transition-all cursor-pointer">
                                <img className="w-16 h-16 rounded-full" 
                                    src={CoverImg2} alt="cover img" />
                            </div>
                            <div className="flex flex-col  ">
                                <div className="font-noto-medium text-black text-2xl">
                                    HelloWorld
                                </div>
                                <div className="font-noto-regular text-lg text-gray-500">
                                    12분 전
                                </div>
                            </div>
                        </div>
                        <div className="font-noto-regular text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
