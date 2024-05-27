import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./views/HomePages";
import Contacto from "./views/ContactoPages";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
