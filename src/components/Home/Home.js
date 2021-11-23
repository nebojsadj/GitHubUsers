import React from "react";
import "./Home.scss";
import { BsFillRecordFill } from "react-icons/bs";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdLocationCity } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { useSelector } from "react-redux";

function Home() {
  const state = useSelector((state) => state.users);
  const { loading, info, repos } = state;

  return (
    <div className="container">
      {(loading && <div className="spinner round"></div>) || (
        <>
          <div className="userContainer">
            <img src={info.avatar_url} alt="avatar"></img>
            <a href={info.html_url} target="_blank" rel="noopener noreferrer">
              <div className="name">{info.name}</div>
            </a>
            <div className="login">{info.login}</div>
          </div>
          <div className="infoContainer">
            {info.location && (
              <div className="location">
                <ImLocation />
                <span>{info.location}</span>
              </div>
            )}
            {info.followers && (
              <div className="followers">
                <HiUserGroup />
                <span>{info.followers}</span>
              </div>
            )}
            {info.following && (
              <div className="following">
                <AiFillHeart />
                <span>{info.following}</span>
              </div>
            )}
            {info.company && (
              <div className="company">
                <MdLocationCity />
                <span>{info.company}</span>
              </div>
            )}
          </div>
        </>
      )}
      <hr width="100%" />
      {(loading && <div className="spinner round"></div>) || (
        <>
          {info && <h2>{`Repositories ${info.public_repos}`}</h2>}
          <div className="reposContainer">
            {repos &&
              repos.map((repo) => (
                <div key={repo.id} className="repo">
                  <div className="repoName">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>{repo.name}</p>
                    </a>
                    <span>{!repo.private && "Public"}</span>
                  </div>
                  <div className="infoHolder">
                    <div className="repoLanguage">
                      <BsFillRecordFill />
                      <span>{repo.language}</span>
                    </div>
                    <div className="repoForks">
                      <CgGitFork />
                      <span>{repo.forks}</span>
                    </div>
                    <div className="repoStars">
                      <AiFillStar />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
