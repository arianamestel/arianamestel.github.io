import NavBar from "./components/Navigation";
import AboutMe from "./containers/AboutMe";
import Skills from "./containers/Skills";
import StockImage from "./assets/background.jpg";

function App() {
  return (
    <div className="App bg-gray-200 font-mono">
      <NavBar />
      <div className="box-border">
        <div className="description mt-4 sm:mt-8 md:mt-14 text-bold">
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-purple-600">
            Ariana Mestel
          </h1>
          <h3 className="text-2xl sm:text-4xl md:text-6xl text-white">
            Web Developer
          </h3>
        </div>
        <div className="shadow-white">
          <img src={StockImage} alt="computer" className="stockImg" />
        </div>
      </div>
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
