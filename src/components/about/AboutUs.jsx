import React from "react";
import imageAbout from "../../assets/images/aboutUs_img.jpg"

const AboutUs = () => {
  return (
    <div>
      <div>
        <h3>About us</h3>
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        reprehenderit, et quae ipsum quibusdam repudiandae voluptatem illum
        consequatur? Ipsam repellat obcaecati quibusdam ad dicta ipsum, amet
        enim laudantium illo explicabo?</p>
      </div>

      <div>
        <img src={imageAbout} alt="image About"  />
      </div>

    </div>
  );
};

export default AboutUs;
