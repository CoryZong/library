import React, { useState, useEffect } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { AutoComplete, Dropdown, Menu, Avatar, Badge } from "antd";
import "antd/dist/antd.css";

function Nav() {
  const list = [
    {
      value: "Cory",
    },
    {
      value: "Nathan",
    },
    {
      value: "Henry",
    },
    {
      value: "Tris",
    },
    {
      value: "Cooper",
    },
  ];
  const [bellCount, setBellCount] = useState(5);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState([]);

  function onSearch(searchText) {
    setQuery(searchText);
  }
  function filterSearch() {
    let result = list.filter((e, index) => {
      return e.value.includes(query);
    });
    setShow(result);
  }

  useEffect(() => {
    setTimeout(filterSearch, 100);
  }, [query]);

  const picInput = <input type="file" />;
  const menu = (
    <Menu
      items={[
        {
          label: "1st menu item",
          key: "1",
        },
        {
          label: "2nd menu item",
          key: "2",
        },
      ]}
    />
  );

  return (
    <div className="nav">
      <NavLink className="nav__logo" to="/">
        <img src={"https://fakeimg.pl/200x50/"} />
      </NavLink>
      <AutoComplete
        options={show}
        style={{ width: "70%" }}
        onSearch={(e) => setQuery(e)}
        allowClear="true"
      >
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
        <Dropdown overlay={menu} placement="bottom" trigger={["click"]}>
          <Badge count={bellCount} overflowCount={9} offset={[-10, 12]}>
            <img
              src="../../images/bell.png"
              className="nav__icons--bell"
              onClick={() => setBellCount(0)}
            />
          </Badge>
        </Dropdown>
        <i className="fa-solid fa-user-large nav__icons--user">
          <Dropdown
            overlay={picInput}
            placement="bottom"
            overlayClassName="dropdown"
          >
            <img src="../../images/camera.png" className="nav__icons--camera" />
          </Dropdown>
        </i>
      </div>
    </div>
  );
}

export default Nav;
