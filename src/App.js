import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { basicURL } from "./redux/initialState";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { get_user_info, get_user_repos } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_user_info(basicURL, "nebojsadj"));
    dispatch(get_user_repos(basicURL, "nebojsadj/repos"));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </>
  );
}

export default App;
