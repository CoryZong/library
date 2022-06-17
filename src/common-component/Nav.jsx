import "./index.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <NavLink className="nav--hyperlink" to="/">
        <img src={"https://fakeimg.pl/200x50/"} />
      </NavLink>
      <NavLink className="nav--hyperlink" to="studyroom">
        我的書房
      </NavLink>
      <NavLink className="nav--hyperlink" to="myfavourite">
        我的最愛
      </NavLink>
      <NavLink className="nav--hyperlink" to="bookpurchase">
        書籍採購單
      </NavLink>
    </div>
  );
}

export default Nav;
