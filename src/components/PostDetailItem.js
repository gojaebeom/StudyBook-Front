export default function PostDetailItem({ item }){
  return(
  <div className="w-full flex flex-col items-center">
    <div className="group relative w-full p-6 ">
      <i className={`fas fa-quote-left text-gray-100 text-5xl  transition-all`}></i>
      <h1 className="font-noto-black text-4xl bg-gradient-to-r from-gray-500 to-gray-900
      bg-clip-text text-transparent mb-3">
          {item.title}
      </h1>
      <div className="flex justify-start items-center mb-3">
          {/* 프로필 이미지 */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dotted flex justify-center items-center 
          mr-3 hover:border-purple-300 transition-all cursor-pointer">
              <img className="w-16 h-16 rounded-full" 
                  src={item.profileImg} alt="cover img" />
          </div>
          <div className="flex flex-col font-noto-medium text-2xl ">
              <div className="font-noto-medium text-black text-2xl">
                {item.nickname}
              </div>
              <div className="font-noto-regular text-lg text-gray-500">
                {item.publishedAt}
              </div>
          </div>
      </div>
      <div className="font-noto-regular text-xl text-gray-600 ">
        <div className="transition-all">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  </div>
  )
}