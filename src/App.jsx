import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Consumption from "./pages/Consumption";
import Header from "./components/Header";
import Equipament from "./pages/Equipament";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consumption" element={<Consumption />} />
        <Route path="/equipament" element={<Equipament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
