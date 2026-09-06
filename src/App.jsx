import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import MemoryHub from "./pages/MemoryHub";
import HerMemories from "./pages/HerMemories";
import OurMemories from "./pages/OurMemories";
import Party from "./pages/Party";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/memories" element={<MemoryHub />} />
      <Route path="/her-memories" element={<HerMemories />} />
      <Route path="/our-memories" element={<OurMemories />} />
      <Route path="/party" element={<Party />} />
    </Routes>
  );
}

export default App;