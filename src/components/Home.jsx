import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "../scss/home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
