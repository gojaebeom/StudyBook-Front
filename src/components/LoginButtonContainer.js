export default function LoginButtonContainer({ children }){
  return(
  <div className="fixed w-full flex justify-center z-40 md:z-0">
    <div className="w-0 h-0 md:w-1000 md:h-screen flex justify-end items-center ">
      {children}
    </div>
  </div>
  )
}