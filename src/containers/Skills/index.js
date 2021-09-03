import React from "react";
import IconList from "../../components/IconList";

export const Skills = () => {
  return (
    <div id="skills" className=" w-5/6 mx-auto my-8">
      <div className="mb-10">
        <h1 className="text-4xl text-gray-800 text-center	mb-2">What I Do</h1>
        <p className="text-lg mx-auto">
          <span className="text-purple-600 text-2xl mr-2">
            Website Development.
          </span>
          Whether you're in need of a simple website to serve as a landing page
          for your business or you want to add a complex feature to your site, I
          am here to help! I am passionate about building responsive websites
          that can be easily viewed on phones, tablets, and desktops. No
          business too big or too small - I enjoy working with them all!
        </p>
      </div>
      <div>
        <h1 className="text-4xl text-gray-800 text-center	mb-8">Technologies</h1>
        <IconList />
      </div>
    </div>
  );
};

export default Skills;
