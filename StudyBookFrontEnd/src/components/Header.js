import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header({ history, isCanBack }) {
  return(
  <header className="relative w-full flex justify-between items-center border-b z-50 bg-white py-6 px-6">
    <div className="flex">
      <figure className="font-noto-black text-3xl bg-gradient-to-r from-gray-500 to-gray-900
        bg-clip-text text-transparent">
          <Link to="/">STUDYBOOK</Link>
      </figure>
      <div className="w-6/12">
      </div>
    </div>
    <div className="font-noto-bold text-lg">
        <Link to="/login">로그인</Link>
    </div>
  </header>
  );
}

export default withRouter(Header);