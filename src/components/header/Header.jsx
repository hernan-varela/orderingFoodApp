import React, { useState } from "react";
import style from "./header.module.css";
import logo from "../../assets/images/logoAppFood.png";
import { Link } from "react-router-dom";

function Header() {
  const [selectedOption, setSelectedOption] = useState("Home"); // Estado para almacenar la opción seleccionada

  // Función para establecer la opción seleccionada
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <nav className={style.contHeader}>
        <Link to={"/"} onClick={() => handleOptionClick("Home")}>
          {" "}
          <img className={style.logo} src={logo} alt="image not found" />
          
        </Link>

        <div className={style.options}>
          <Link
            className={`${style.link} ${
              selectedOption === "Home" ? style.active : ""
            }`}
            to={"/"}
            onClick={() => handleOptionClick("Home")}
          >
            Home
          </Link>
          <Link
            className={`${style.link} ${
              selectedOption === "About" ? style.active : ""
            }`}
            to={"/about"}
            onClick={() => handleOptionClick("About")}
          >
            About
          </Link>

          <Link
            className={`${style.link} ${
              selectedOption === "Cart" ? style.active : ""
            }`}
            to={"/cart"}
            onClick={() => handleOptionClick("Cart")}
          >
            Cart
          </Link>
          <Link
            className={`${style.link} ${
              selectedOption === "Log in" ? style.active : ""
            }`}
            to={"/logIn"}
            onClick={() => handleOptionClick("Log in")}
          >
            Log in
          </Link>
          <Link
            className={`${style.link} ${
              selectedOption === "Sing up" ? style.active : ""
            }`}
            to={"/singUp"}
            onClick={() => handleOptionClick("Sing up")}
          >
            Sing up
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
