import { useSelector } from "react-redux";
import Header from "../Header";
import LoggedInButton from "../LoggedInButton";
import LoginButton from "../LoginButton";
import LoginButtonContainer from "../LoginButtonContainer";

export default function DefaultLayout({ children }){

  const loginState = useSelector(state => state.loginReducer)

  return(
  <div className="App w-full flex justify-center">
      <div className="relative w-full md:w-700 h-screen flex flex-col items-center z-10">
        <Header/>
        <br/>
        { children }
      </div>
      <LoginButtonContainer>
        { loginState && <LoggedInButton /> }
        { !loginState && <LoginButton /> }
      </LoginButtonContainer>
  </div>
  );
}