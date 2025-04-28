import "./App.css";
import Nav from "./componets/Nav/Nav";
import Home from "./componets/Routing/Home/Home";
import Electronics from "./componets/Routing/Electronics/Electronics";
import Men from "./componets/Routing/Men's/Men";
import Women from "./componets/Routing/Women's/Women";
import Jewellery from "./componets/Routing/Jewellery/Jewellery";
import Pagenotfound from "./componets/Routing/pagenotfound/Pagenotfound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/electronics"} element={<Electronics />} />
        <Route path={"/men-fasion"} element={<Men />} />
        <Route path={"/women-fasion"} element={<Women />} />
        <Route path={"/jewellery"} element={<Jewellery />} />
        <Route path={"*"} element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;