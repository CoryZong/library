import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { AutoComplete } from "antd";
import "antd/dist/antd.css";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

function Nav() {
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);
  };
  return (
    <div className="nav">
      <NavLink className="nav__logo" to="/">
        <img src={"https://fakeimg.pl/200x50/"} />
      </NavLink>
      <AutoComplete options={options} style={{ width: "70%" }} onSearch={onSearch} allowClear="true">
        <input className="nav__input" type="text" placeholder="請輸入關鍵字" />
      </AutoComplete>
      <i className="fa-solid fa-magnifying-glass nav__glass"></i>
      <div className="nav__right">
        <NavLink to="studyroom">我的書房</NavLink>
        <NavLink to="myfavourite">我的最愛</NavLink>
        <NavLink to="bookpurchase">書籍採購單</NavLink>
        <span style={{ color: "rgb(238, 233, 229)" }}>|</span>
        <span style={{ fontWeight: "bold" }}>後台</span>
      </div>
      <div className="nav__icons">
        <i className="fa-regular fa-bell nav__icons--bell"></i>
        <i className="fa-solid fa-user-large nav__icons--user">
          <i className="fa-solid fa-camera nav__icons--camera"></i>
        </i>
      </div>
    </div>
  );
}

export default Nav;
