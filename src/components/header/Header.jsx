import React from "react";
import style from "./header.module.css";
import logo from "../../assets/images/logoAppFood.png"

function Header() {
  return (
    <>
      <nav className={style.contHeader}>

        
          <img className={style.logo} src={logo} alt="image not found" />
        

        <div className= {style.options}>
            <div>Home</div>
            <div>About</div>
       

        
            <div>Cart</div>
            <div>Log in</div>
            <div>Sing up</div>
        </div>
      </nav>
    </>
  );
}

export default Header;
