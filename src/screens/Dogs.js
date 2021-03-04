import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { GetDogAPI } from "../services/pet_API.js";

export default function Dogs() {
  const [dog, setDog] = useState("");

  const fetchRandomDog = async () => {
    const randDog = await GetDogAPI();
    setDog(randDog.message);
  };
  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <div>
      <Header />
      <br />
      <button onClick={fetchRandomDog} style={{ margin: "2%" }}>
        Woof Woof
      </button>
      <div>
        <img src={dog} alt="dog pic" style={{ width: "50%" }} />
      </div>
      <Footer />
    </div>
  );
}
