import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CardGrid from "./components/cardGrid";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <CardGrid />
    </div>
  );
}

export default App;
