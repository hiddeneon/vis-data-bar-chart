import BarChart from "./components/BarChart";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 id="title">United States GDP</h1>
      <div id="container">
        <BarChart />
      </div>
    </div>
  );
};

export default App;
