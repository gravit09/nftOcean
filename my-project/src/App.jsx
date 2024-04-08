import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Table from "./Table";
import CardRow from "./CardRow";
import Card from "./Card";
import TopCollector from "./TopCollector";
import Art from "./Art";
import Gaming from "./Gaming";
import Music from "./Music";
import Pfp from "./Pfp";
import Footer from "./Footer";

function App() {
  const [topImages, setTopImages] = useState([
    "https://th.bing.com/th?id=OPHS.%2byVC1VdQ4sjKng474C474&w=592&h=550&o=5&dpr=2&pid=21.1",
    "https://th.bing.com/th?id=OPHS.%2byVC1VdQ4sjKng474C474&w=592&h=550&o=5&dpr=2&pid=21.1",
    "https://th.bing.com/th?id=OPHS.%2byVC1VdQ4sjKng474C474&w=592&h=550&o=5&dpr=2&pid=21.1",
    "https://th.bing.com/th?id=OPHS.%2byVC1VdQ4sjKng474C474&w=592&h=550&o=5&dpr=2&pid=21.1",
    "https://th.bing.com/th?id=OPHS.%2byVC1VdQ4sjKng474C474&w=592&h=550&o=5&dpr=2&pid=21.1",
    "https://th.bing.com/th?id=OPHS.%2byVC1VdQ4sjKng474C474&w=592&h=550&o=5&dpr=2&pid=21.1",
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Card />
              <Table />
              <CardRow />
              <TopCollector />
              <Art />
              <Gaming />
              <Pfp />
              <Music />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
