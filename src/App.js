import NavBar from "./components/Navigation";
import AboutMe from "./containers/AboutMe";
import Skills from "./containers/Skills";
import Portfolio from "./containers/Portfolio";
import Description from "./components/Description";

function App() {
  return (
    <div className="App bg-gray-200 font-mono">
      <NavBar />
      <Description />
      <AboutMe />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
