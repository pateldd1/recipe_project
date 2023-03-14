import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Search from "./components/Search";
import Bookmarks from "./components/Bookmarks";
import Details from "./components/Details";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/bookmarks">Bookmarks</Link>
            </li>
          </ul>
        </nav>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<Search />} />
          {/* 👇️ handle dynamic path */}
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/details" element={<Details />} />
          {/* 👇️ only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
