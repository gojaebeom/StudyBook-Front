import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header({ history, isCanBack }) {
  return(
  <header className="relative w-full py-6 flex justify-center items-center border-b">
    {
      isCanBack &&
      <div className="absolute left-0 w-10 cursor-pointer flex justify-center"
        onClick={() => {
          history.goBack();
        }}
      >
        <i className="fas fa-chevron-left text-3xl"></i>
      </div>
    }
    <figure className="font-pacifico text-3xl text-black font-bold">
        <Link to="/">STUDYBOOK</Link>
    </figure>
  </header>
  );
}

export default withRouter(Header);