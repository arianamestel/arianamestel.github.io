import React from "react";
import Icon from "./Icon";
import CSSIcon from "../../assets/cssIcon.jpeg";
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
  { img: JsIcon, alt: "javascript icon" },
  { img: ReactIcon, alt: "react icon" },
  { img: NodeJsIcon, alt: "node icon" },
  { img: HtmlIcon, alt: "html icon" },
  { img: PythonIcon, alt: "python icon" },
  { img: CSSIcon, alt: "css icon" },
  { img: SQLIcon, alt: "sql icon" },
  { img: GitIcon, alt: "git icon" },
  { img: TsIcon, alt: "ts icon" },
  { img: PhpIcon, alt: "php icon" },
];

export const IconList = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-flow-row sm:grid-cols-5 sm:grid-rows-2 grid-cols-2 grid-rows-5 gap-4">
        {icons.map((icon) => (
          <Icon {...icon} key={icon.alt} />
        ))}
      </div>
    </div>
  );
};

export default IconList;
