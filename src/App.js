import NavBar from "./components/Navigation";
import AboutMe from "./containers/AboutMe";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import StockImage from "./assets/background.jpg";

function App() {
  return (
    <div className="App bg-gray-200 font-mono">
      <NavBar />
      <img src={StockImage} alt="computer" className="w-screen" />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
