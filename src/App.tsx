import { Main } from "./containers/Home/Index";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import TableData from "./containers/Table/Index";
import FormPage from "./containers/Home/FormInput";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="Sign" element={<Main/>}/>
          <Route path="Table" element={<TableData />} />
          <Route path="Form" element={<FormPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
