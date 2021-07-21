import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header({ history, isCanBack }) {
  return(
  <header className="relative w-full py-6 flex justify-center items-center border-b">
    {/* {
      isCanBack &&
      <div className="absolute left-0 w-10 cursor-pointer flex justify-center"
        onClick={() => {
          history.goBack();
        }}
      >
        <i className="fas fa-chevron-left text-3xl text-gray-700"></i>
      </div>
    } */}
    <figure className="font-noto-black text-3xl bg-gradient-to-r from-gray-500 to-gray-900
      bg-clip-text text-transparent">
        <Link to="/">STUDYBOOK</Link>
    </figure>
  </header>
  );
}

export default withRouter(Header);