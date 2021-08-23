import withHomeHandler from "../hooks/withHomeHandler";

const Home = ({ news }) => {

    return(
    <div className="w-full px-2">
        <h1 className="font-noto-black text-3xl mb-5">IT 타임라인 🍰</h1>
        {
            news.length 
            ? news.map((e, index)=>{
                    if(index % 2 === 0){
                        return(
                        <div key={index} className="font-noto-light hover:text-indigo-400 mb-5  w-full flex justify-start">
                            <a href={e.link} target="_blank"  rel="noreferrer" className="p-5 bg-gray-100 rounded-xl rounded-tl-none w-10/12">
                                <p dangerouslySetInnerHTML={{__html:e.title}} className="text-xl font-noto-medium"></p>
                                <p dangerouslySetInnerHTML={{__html:e.description}} className="hidden md:block"></p>
                            </a>
                        </div>
                        )
                    }else{
                        return(
                        <div key={index} className="font-noto-light hover:text-indigo-400 mb-5  w-full flex justify-end ">
                            <a href={e.link} target="_blank"  rel="noreferrer" className="p-5 border rounded-xl rounded-tr-none w-10/12">
                                <p dangerouslySetInnerHTML={{__html:e.title}} className="text-xl font-noto-medium"></p>
                                <p dangerouslySetInnerHTML={{__html:e.description}} className="hidden md:block"></p>
                            </a>
                        </div>
                        )
                    }
                })
            :<div className="w-full">
                <div className="mb-5  w-full flex justify-start animate-pulse">
                    <div className="p-10 bg-gray-100 rounded-xl rounded-tl-none w-10/12"></div>
                </div>
                <div className="mb-5  w-full flex justify-end animate-pulse">
                    <div className="p-10 bg-gray-300 rounded-xl rounded-tr-none w-10/12"></div>
                </div>
                <div className="mb-5  w-full flex justify-start animate-pulse">
                    <div className="p-10 bg-gray-100 rounded-xl rounded-tl-none w-10/12"></div>
                </div>
                <div className="mb-5  w-full flex justify-end animate-pulse">
                    <div className="p-10 bg-gray-300 rounded-xl rounded-tr-none w-10/12"></div>
                </div>
                <div className="mb-5  w-full flex justify-start animate-pulse">
                    <div className="p-10 bg-gray-100 rounded-xl rounded-tl-none w-10/12"></div>
                </div>
                <div className="mb-5  w-full flex justify-end animate-pulse">
                    <div className="p-10 bg-gray-300 rounded-xl rounded-tr-none w-10/12"></div>
                </div>
                <div className="mb-5  w-full flex justify-start animate-pulse">
                    <div className="p-10 bg-gray-100 rounded-xl rounded-tl-none w-10/12"></div>
                </div>
            </div>
        }
    </div>
    )
}
export default withHomeHandler(Home);