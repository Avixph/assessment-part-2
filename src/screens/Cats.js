import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { GetCatAPI } from "../services/pet_API.js";

export default function Cats() {
  const [cat, setCat] = useState("");

  const fetchRandomCat = async () => {
    const randCat = await GetCatAPI();
    setCat(randCat.data[0].url);
  };
  useEffect(() => {
    fetchRandomCat();
  }, []);

  return (
    <div>
      <Header />
      <button onClick={fetchRandomCat} style={{ margin: "2%" }}>
        Meow Meow
      </button>
      <div>
        <img src={cat} alt="cat pic" style={{ width: "50%" }} />
      </div>
      <Footer />
    </div>
  );
}
