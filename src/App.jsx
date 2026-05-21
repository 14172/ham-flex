import {
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import Home from "./pages/Home";
import Level from "./pages/Level";

import "./index.css";

function LevelWrapper() {
  const { id } = useParams();

  return <Level key={id} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/level/:id"
        element={<LevelWrapper />}
      />
    </Routes>
  );
}