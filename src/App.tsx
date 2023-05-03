import { Header } from "antd/lib/layout/layout";
import { Home } from "./Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header>
        <Home />
      </Header>
    </div>
  );
}

export default App;
