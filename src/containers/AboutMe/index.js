import React from "react";
import image from "../../assets/profilePic.png";

export const AboutMe = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-1">
          <div className="font-mono text-purple-600">
            <p className="text-3xl">
              Hey there, I'm Ariana! <span className="text-4xl">👋🏼</span>
            </p>
            <p className="text-2xl">
              I am a Software Engineer at CB Insights. I specialize in Front End
              development.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="m-auto w-2/3">
            <img className="rounded-full shadow-2xl" src={image} alt="Ariana" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
