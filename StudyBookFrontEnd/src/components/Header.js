import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header({ history, isCanBack }) {
  return(
  <header className="relative w-full  flex justify-center items-center border-b z-50">
    <div className="w-6/12 flex justify-center items-center py-3">
      <figure className="font-noto-black text-3xl bg-gradient-to-r from-gray-500 to-gray-900
        bg-clip-text text-transparent">
          <Link to="/">STUDYBOOK</Link>
      </figure>
    </div>
  </header>
  );
}

export default withRouter(Header);