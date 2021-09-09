import React from "react";
import PortfolioItem from "./PortfolioItem";
import TheDebateImage from "../../assets/theDebateImage.png";

export const Portfolio = ({ scrollRef }) => {
  return (
    <div id="portfolio" className="w-5/6 mx-auto mt-16 pb-32" ref={scrollRef}>
      <h1 className="text-4xl text-gray-800 text-center	mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-flow gap-4">
        <PortfolioItem
          name="The Debate"
          description="The Debate is a blogging site for students to post articles and have
          discussions about interesting topics. The application includes user
          authentication and the ability to write, edit, and destroy
          posts or comments created by the user. The Debate was built using NodeJs, Express, EJS, HTML, CSS, and MongoDB."
          img={TheDebateImage}
          href="https://debate-blog.herokuapp.com/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
