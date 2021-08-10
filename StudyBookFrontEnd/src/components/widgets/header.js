import { Link, NavLink } from "react-router-dom";

function Header(){
    return(
    <header className="w-full flex justify-center mb-5">
        <div className="w-full md:w-1000 flex justify-between items-center">
            <figure className="font-pacifico text-4xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent p-5">
                <Link to="/">Studybook</Link>
            </figure>
            <ul className="font-noto-light text-lg flex justify-center">
                <li className="mr-3">
                    <NavLink exact to="/" activeStyle={{color:"#1a73e8"}}>피드</NavLink>
                </li>
                <li className="mr-3">
                    <NavLink to="/q-or-a" activeStyle={{color:"#1a73e8"}}>질문게시판</NavLink>
                </li>
                <li className="mr-5">
                    <NavLink to="/draft" activeStyle={{color:"#1a73e8"}}>글쓰기</NavLink>
                </li>
                <li >
                    <NavLink to="/login" activeStyle={{color:"#1a73e8"}}>로그인</NavLink>
                </li>
            </ul>
        </div>
    </header>
    );
}
export default Header;