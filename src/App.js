import React, { useEffect, useRef, useState } from "react";
import NavBar from "./components/Navigation";
import AboutMe from "./containers/AboutMe";
import Skills from "./containers/Skills";
import Portfolio from "./containers/Portfolio";
import Description from "./components/Description";

const getDimensions = (ele) => {
  const boundClientRect = ele?.getBoundingClientRect();
  const offsetTop = ele?.offsetTop;
  const offsetBottom = offsetTop + boundClientRect?.height;

  return {
    height: boundClientRect?.height,
    offsetTop,
    offsetBottom,
  };
};

export const App = () => {
  const [visibleSection, setVisibleSection] = useState("About me");

  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);

  const navigationSections = [
    { name: "About me", ref: aboutMeRef, id: "aboutMe" },
    { name: "Skills", ref: skillsRef, id: "skills" },
    { name: "Portfolio", ref: portfolioRef, id: "portfolio" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = navigationSections.find(({ name, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return null;
      });

      if (selected && selected.name !== visibleSection) {
        setVisibleSection(selected.name);
      }
      // set visibleSection to last section if user scrolls to bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setVisibleSection(
          navigationSections[navigationSections.length - 1].name
        );
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSection]);

  return (
    <div className="App bg-gray-200 font-mono">
      <NavBar
        visibleSection={visibleSection}
        headerRef={headerRef}
        navigationSections={navigationSections}
      />
      <Description />
      <AboutMe scrollRef={aboutMeRef} />
      <Skills scrollRef={skillsRef} />
      <Portfolio scrollRef={portfolioRef} />
    </div>
  );
};

export default App;
