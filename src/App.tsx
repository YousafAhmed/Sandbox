import { Home } from "./components/Homepage/Home/Home";
import { Routes, Route } from "react-router-dom";
import TableData from "./components/Table/table";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Table" element={<TableData />} />
        
      </Routes>
    </div>
  );
}

export default App;
