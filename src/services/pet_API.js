import axios from "axios";
import {
  DOG_API_URL,
  DOG_API_KEY,
  CAT_API_URL,
  CAT_API_KEY,
} from "./Constants.js";

export async function GetDogAPI() {
  const DogAPI = `${DOG_API_URL}/v1/breeds?api_key=${DOG_API_KEY}`;

  const Results = await axios.get(DogAPI).then(({ data }) => {
    return data;
  });

  return Results;
}

export async function GetCatAPI() {
  const RandomAPI = `${CAT_API_URL}/v1/breeds?api_key=${CAT_API_KEY}`;

  const Results = await axios.get(DogAPI).then(({ data }) => {
    return data;
  });

  return Results;
}
