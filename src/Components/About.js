import "../App.css";
import chefMatt from "../images/chef_mert.jpg";
import mert from "../images/pic_me.jpg";
import { useState } from "react";


function About() {

  const [pic, setPic] = useState(mert)

  const changPic = () => {
    setPic(chefMatt)
  }

  const changePicTwo = () => {
    setPic(mert)
  }

  return (
    <div className="aboutPage">
      <div className="aboutSectionOne">
        <p>
          My name is Matt and I love food. I've lived in Colorado my whole life
          and in Northern Colorado for the last ten years, where my love for
          good food flourished. I have no cullinary training, but I've found a
          love for cooking that has only emboldened my search for great
          restaurants. Eating out is a culutural treat and finding a truly great
          restaurant, food truck, or a hole in the wall can be an arduous
          journey, but here I hope to catalog the very best food Colorado
          has to offer.
        </p>
      </div>
      <div className="aboutSectionTwo">
        <img src={pic} onMouseOver={changPic} onMouseLeave={changePicTwo} className="chefMert" alt="chefMert" />
      </div>
    </div>
  );
}

export default About;
