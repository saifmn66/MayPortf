import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallpage from "./pages/Gallpage";
import Contact from "./pages/Contact";
import Navb from "./components/Navb";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallerie" element={<Gallpage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
