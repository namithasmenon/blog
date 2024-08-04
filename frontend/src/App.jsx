import { useState } from "react";
import Home from "./components/Home";
//Some code missing here!!!
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/add" element={<Add />}>Add</Route>

      </Routes>
    </>
  );
}

export default App;
