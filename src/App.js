// import ClassA from "./classes/ClassA";
import { Route, Routes, Link } from "react-router-dom";
import Katzir from "./centers/Katzir";
import NeotShoshanim from "./centers/NeotShoshanim";

function App() {
  return (
    <div className="App">
      <h1>centers</h1>
      <nav>
        <ul>
          <li>
            <Link to="/katzir">Katzir</Link>
          </li>
          <li>
            <Link to="/neotshoshanim">Neot Shoshanim</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/katzir" element={<Katzir />} />
        <Route path="/neotshoshanim" element={<NeotShoshanim />} />
      </Routes>
    </div>
  );
}

export default App;
