import NavBar from "./components/Navigation";
import Routes from "./Routes";

function App() {
  return (
    <div className="App bg-gray-200 h-screen">
      <NavBar />
      <div className="my-auto">
        <Routes />
      </div>
    </div>
  );
}

export default App;
