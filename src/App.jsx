import React from "react";
import "./index.scss";
import Router from "./myrouter";
import { BrowserRouter } from "react-router-dom";
import Nav from "./common-component/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Router />
      </div>
    </BrowserRouter>
  );
}
