import "./App.css";
import * as d3 from "d3";
import BarChart from "./Components/BarChart";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>D3 Implementation</h1>
      </header>
      <div>
        <BarChart options={ {}} data={[{day:"Monday",totalBirds:20},{day:"Tuesday",totalBirds:34},,{day:"Wednsday",totalBirds:52}] />
      </div>
    </div>
  );
}

export default App;
