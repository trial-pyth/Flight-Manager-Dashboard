import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/add/Add";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import "./app.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
