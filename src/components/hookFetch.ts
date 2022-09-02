import axios from "axios";

export const doFetching = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
