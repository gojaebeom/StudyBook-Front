export default function PostFilter(){

  return(
  <div className="font-noto-light flex justify-start items-center mt-3">
    <button className="border px-2 py-1 rounded-md text-xl ml-2">
      <i className="fab fa-bandcamp mr-1"></i>
      인기
    </button>
    <button className="border px-2 py-1 rounded-md text-xl ml-2">
      <i className="far fa-clock mr-1"></i>
      최근
    </button>
    <button className="border px-2 py-1 rounded-md text-xl ml-2">
      <i className="fas fa-history mr-1"></i>
      오래된
    </button>
  </div>
  );
}