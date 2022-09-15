import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>} />
        <Route path="/login" element={<h1>Login Screen</h1>} />
        <Route path="/accounts" element={<h1>List of accounts</h1>} />
        <Route path="/articles" element={<h1>List of articles</h1>} />
        <Route path="/themes" element={<h1>List of themes</h1>} />
        <Route path="/tags" element={<h1>List of tags</h1>} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
