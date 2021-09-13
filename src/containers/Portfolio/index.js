import React from "react";
import PortfolioItem from "./PortfolioItem";
import TheDebateImage from "../../assets/theDebateImage.png";
import GoogleAPIImage from "../../assets/googleAPIIMage.png";

export const Portfolio = ({ scrollRef }) => {
  return (
    <div id="portfolio" className="w-5/6 mx-auto mt-16 pb-16" ref={scrollRef}>
      <h1 className="text-4xl text-gray-800 text-center	mb-8">Portfolio</h1>
      <PortfolioItem
        name="The Debate"
        description="The Debate is a blogging site for students to post articles and have
          discussions about interesting topics. The application includes user
          authentication and the ability to write, edit, and destroy
          posts or comments created by the user. The Debate was built using NodeJs, Express, EJS, HTML, CSS, and MongoDB."
        img={TheDebateImage}
        href="https://debate-blog.herokuapp.com/"
        leftAligned
      />
      <PortfolioItem
        name="Google Search API"
        description="This site leverages the Google Search API to retrieve search results based 
          on the inputted keyword. The user can select, save, and download the results in JSON, CSV, 
          or XML format. This site was built using React."
        img={GoogleAPIImage}
        href="https://am-google-api.herokuapp.com/"
      />
    </div>
  );
};

export default Portfolio;
