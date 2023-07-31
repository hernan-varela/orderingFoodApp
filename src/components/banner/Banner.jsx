import React from 'react';
import style from './Banner.module.css';
import hamburger from '../../assets/images/hamburgerBanner.png'

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.description}>
        <h1>Ordering food here is very easy  !</h1>
        <p>Explore our delicious menu and place your orders easily.</p>
        <button className={style.button}>Get started!</button>
      </div>
      <div className={style.imageContainer}>
        <img src={hamburger} alt="BannerHamburger" className={style.image} />
      </div>
    </div>
  );
};

export default Banner;
