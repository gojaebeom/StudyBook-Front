import { useDispatch } from "react-redux";
import Header from "../Header";

export default function DefaultLayout({ left, main, right }){

  const dispatch = useDispatch();
  const clickHandler = (e) => {
    let el = e.target;
    const target = document.querySelector("#loggedin-toggle");
    while(el){
      el = el.parentNode;
      if(el === target){
        return;
      }
      if(el.nodeName === "BODY"){
        break;
      }
    }
    dispatch({type:"CLOSE_LOGGEDIN_MENU"});
  }

  return(
  <div className="App w-full flex flex-col items-center"
    onClick={clickHandler}
  >
    <Header/>
    <div className="w-full flex justify-center">
      <div className="relative hidden lg:w-80 h-screen md:flex flex-col items-end ">
        { left }
      </div>
      <div className="relative w-full lg:w-700 h-screen flex flex-col items-center lg:border-l lg:border-r">
        { main }
      </div>
      <div className="relative hidden lg:w-80 h-screen md:flex flex-col items-start">
        { right }
      </div>
    </div>
  </div>
  );
}