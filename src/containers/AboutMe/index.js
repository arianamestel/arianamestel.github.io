import React from "react";
import image from "../../assets/profilePic.png";

export const AboutMe = ({ scrollRef }) => {
  return (
    <div className="bg-white w-screen py-8" id="aboutMe" ref={scrollRef}>
      <div className="mx-auto w-5/6">
        <div className="mx-auto w-48 mb-8">
          <img className="rounded-full shadow-2xl" src={image} alt="Ariana" />
        </div>
        <div className=" text-lg">
          <p className="text-purple-600 text-2xl">Hey there, I'm Ariana!</p>
          <p>
            I'm a New York based software engineer who specializes in building exceptional UI. 
            Currently, I am a full-stack engineer at a company focused on building groundbreaking 
            features for our market intelligence platform. In my free time, I enjoy doing 
            freelance web development, cooking and traveling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
