import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Create,
  Search,
  Shelf,
  LoginRegister,
  HealthPrediction,
} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/shelf" element={<Shelf />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/login" element={<LoginRegister />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/prediction" element={<HealthPrediction />} />
      </Routes>
    </div>
  );
};

export default App;
