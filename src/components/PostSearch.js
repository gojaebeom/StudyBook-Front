export default function PostSearch(){
  return(
  <div className="w-11/12 flex justify-between border font-noto-regular">
    <select className="cursor-pointer outline-none p-3 rounded-2xl">
      <option>태그</option>
      <option>제목</option>
      <option>닉네임</option>
    </select>
    <input className="outline-none p-3 w-full" 
      placeholder="찾으시는 글이 있나요?"
    />
    <button className="p-3">
      <i className="fas fa-search"></i>
    </button>
  </div>
  );
}