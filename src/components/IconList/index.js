import React from "react";
import Icon from "./Icon";
import CSSIcon from "../../assets/cssIcon.png";
import HtmlIcon from "../../assets/htmlIcon.png";
import JsIcon from "../../assets/jsIcon.png";
import PythonIcon from "../../assets/pythonIcon.png";
import ReactIcon from "../../assets/reactIcon.png";
import SQLIcon from "../../assets/sqlIcon.png";
import NodeJsIcon from "../../assets/nodeJsIcon.png";
import GitIcon from "../../assets/gitIcon.png";
import TsIcon from "../../assets/tsIcon.png";
import PhpIcon from "../../assets/phpIcon.svg";

export const icons = [
  { img: JsIcon, alt: "javascript icon", name: "Javascript" },
  { img: ReactIcon, alt: "react icon", name: "React" },
  { img: NodeJsIcon, alt: "node icon", name: "NodeJs" },
  { img: HtmlIcon, alt: "html icon", name: "Html" },
  { img: PythonIcon, alt: "python icon", name: "Python" },
  { img: CSSIcon, alt: "css icon", name: "CSS" },
  { img: SQLIcon, alt: "sql icon", name: "SQL" },
  { img: GitIcon, alt: "git icon", name: "Git" },
  { img: TsIcon, alt: "ts icon", name: "Typescript" },
  { img: PhpIcon, alt: "php icon", name: "Php" },
];

export const IconList = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-flow-row grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-5 md:grid-rows-2 gap-4">
        {icons.map((icon) => (
          <Icon {...icon} key={icon.alt} />
        ))}
      </div>
    </div>
  );
};

export default IconList;
