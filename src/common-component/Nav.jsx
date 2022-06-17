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
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  return (
    <div className="nav">
      <NavLink to="/">
        <img src={"https://fakeimg.pl/200x50/"} />
      </NavLink>
      <AutoComplete
        options={options}
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
      <div className="nav__item">
        <NavLink className="nav__item--hyperlink" to="studyroom">
          我的書房
        </NavLink>
        <NavLink className="nav__item--hyperlink" to="myfavourite">
          我的最愛
        </NavLink>
        <NavLink className="nav__item--hyperlink" to="bookpurchase">
          書籍採購單
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
