import "./App.css";
import MainContainerDounght from "./Components/GraphComponents/MainContainerDounght";
import Header from "./Components/Header/Header";
import SentimeterWordCloudContainerComponent from "./Components/SentimeterAndWordCloud/SentimeterWordCloudContainerComponent";
function App() {
  return (
    <div className="App">
      <Header />
      <MainContainerDounght />
      <SentimeterWordCloudContainerComponent />
    </div>
  );
}

export default App;
