import FilterComponet from "./Components/FilterComponet/FilterComponet";
import "./App.css";
import DeviceBreak_GenderContainer from "./Components/GraphComponents/DeviceBeakGenderComponents/DeviceBreak_GenderContainer";
import GeographicaTweetOverTimeContainer from "./Components/GraphComponents/Geographical_SentimentOverTimeComponents/GeographicaTweetOverTimeContainer";
import MainContainerDounght from "./Components/GraphComponents/MainContainerDounght";
import Header from "./Components/Header/Header";
import SentimeterWordCloudContainerComponent from "./Components/SentimeterAndWordCloud/SentimeterWordCloudContainerComponent";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <MainContainerDounght />
      <FilterComponet />
      <SentimeterWordCloudContainerComponent />
      <GeographicaTweetOverTimeContainer />
      <DeviceBreak_GenderContainer />
      <Footer />
    </div>
  );
}

export default App;
