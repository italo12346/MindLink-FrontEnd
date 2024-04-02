import { BrowserRouter as Router } from "react-router-dom";
import Content from "../components/layout/content";
import NavBar from "../components/layout/navBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar />
        </header>
        <Content />
      </Router>
    </div>
  );
}

export default App;
