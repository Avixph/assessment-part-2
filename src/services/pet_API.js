import axios from "axios";
import { DOG_API_URL, CAT_API_URL, CAT_API_KEY } from "./constants.js";

export async function GetDogAPI() {
  const DogAPI = `${DOG_API_URL}/api/breeds/image/random`;

  const Results = await axios.get(DogAPI).then(({ data }) => {
    return data;
  });

  return Results;
}

export async function GetCatAPI() {
  const CatAPI = `${CAT_API_URL}/v1/images/search?api_key=${CAT_API_KEY}`;

  const Results = await axios.get(CatAPI).then(({ data }) => {
    return data;
  });

  return Results;
}
