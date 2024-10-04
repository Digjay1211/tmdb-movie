import React, { useRef, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";

import logo from "../../assets/Logo_White.png";
import { AppBar, Box } from "@mui/material";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <AppBar
      ref={headerRef}
      position="fixed"
      className="header"
      // sx={{ justifyContent: "space-between", display: "inline-flex" }}
    >
      <Box className="header__wrap container">
        {/* <div  className="header"> */}
        {/* <div className="header__wrap container"> */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" width={100} />
          </Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </Box>

      {/* </div> */}
      {/* </div> */}
    </AppBar>
  );
};

export default Header;
