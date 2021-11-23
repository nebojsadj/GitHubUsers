import React from "react";
import { NavLink, Link } from "react-router-dom";
import { basicURL } from "../../redux/initialState";
import { get_user_info, get_user_repos } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./Navbar.scss";

function Navbar() {
  const myAccount = (name) => {
    dispatch(get_user_info(basicURL, name));
    dispatch(get_user_repos(basicURL, `${name}/repos`));
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="navContainer">
        <Link
          to="/"
          onClick={() => myAccount("nebojsadj")}
          className="navBrand"
        >
          Nebojsa
        </Link>
        <ul className="navMenu">
          <li className="navItem">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/search" className="link">
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
