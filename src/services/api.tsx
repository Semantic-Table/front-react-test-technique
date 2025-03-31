import { Sport } from "@/components/Burger";
import axios from "axios";

export const getMessage = async (sport: Sport, question: string) => {
  return axios
    .get(`http://localhost:8000/${sport}`, { params: { question } })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
