import React from "react";
import style from "./header.module.css";
import logo from "../../assets/images/logoAppFood.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className={style.contHeader}>
        <Link to={"/"}>
          {" "}
          <img className={style.logo} src={logo} alt="image not found" />
        </Link>

        <div className={style.options}>
          <Link className={style.link} to={"/"}>Home</Link>
          <Link className={style.link} to={"/about"}>About</Link>

          <Link className={style.link} to={'/cart'}>Cart</Link>
          <Link className={style.link} to={"/logIn"}>Log in</Link>
          <Link className={style.link} to={"/singUp"}>Sing up</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
