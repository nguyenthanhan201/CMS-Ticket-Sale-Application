import "./assets/css/App.css";
import "./assets/css/Home.css";
import "./assets/css/Normalcss.css";
import Routers from "./routes/Routers";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routers />
      </div>
    </div>
  );
}

export default App;
