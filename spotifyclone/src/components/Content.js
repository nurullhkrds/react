import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "view/Home";
import Search from "view/Search";
import Collections from "view/Collections";

function Content() {
  return (
    <div className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 pt-6">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/collections" element={<Collections />} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
