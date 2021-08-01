import Header from "../Header";

export default function DefaultLayout({ left, main, right }){
  return(
  <div className="App w-full flex flex-col items-center">
    <Header/>
    <div className="w-full flex justify-center">
      <div className="relative hidden md:w-auto h-screen md:flex flex-col items-end z-10 ">
        { left }
      </div>
      <div className="relative w-full md:w-700 h-screen flex flex-col items-center z-10 border-r border-l">
        { main }
      </div>
      <div className="relative hidden md:w-auto h-screen md:flex flex-col items-center z-10 ">
        { right }
      </div>
    </div>
  </div>
  );
}