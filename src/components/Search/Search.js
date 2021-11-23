import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import Display from "../Display/Display";
import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { get_search_users } from "../../redux/actions";
import { searchURL } from "../../redux/initialState";

function Search() {
  const [enterName, setEnterName] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);

  const { loading, search } = state;
  const { items } = search;

  const searchUsers = (name) => {
    dispatch(get_search_users(searchURL, name));
  };

  return (
    <>
      <div className="searchContainer">
        <FaGithub className="gitHubIcon" />
        <div className="searchHolder">
          <input
            onChange={(e) => setEnterName(e.target.value)}
            type="text"
            placeholder="Search Users"
            value={enterName}
          />
          <button
            type="button"
            disabled={!enterName}
            onClick={() => searchUsers(enterName)}
          >
            <MdPersonSearch />
          </button>
        </div>
      </div>
      <div className="displayContainer">
        {(loading && <div className="spinner round"></div>) || (
          <>
            {items &&
              items.map((user) => <Display key={user.id} user={user} />)}
          </>
        )}
      </div>
    </>
  );
}

export default Search;
