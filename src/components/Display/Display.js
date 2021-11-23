import React from "react";
import { Link } from "react-router-dom";
import "./Display.scss";
import { basicURL } from "../../redux/initialState";
import { useDispatch } from "react-redux";
import { get_user_info, get_user_repos } from "../../redux/actions";

function Display({ user }) {
  const dispatch = useDispatch();

  const displayUserGitHub = (name) => {
    dispatch(get_user_info(basicURL, name));
    dispatch(get_user_repos(basicURL, `${name}/repos`));
    window.scrollTo(0, 0);
  };

  return (
    <div className="display">
      <div className="avatar">
        <img src={user.avatar_url} alt="avatar" />
        <Link to="/">
          <button className="btn" onClick={() => displayUserGitHub(user.login)}>
            Details
          </button>
        </Link>
      </div>
      <div className="login">{`Login: ${user.login}`}</div>
    </div>
  );
}

export default Display;
