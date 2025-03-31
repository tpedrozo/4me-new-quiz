import { IProfile } from "@/models/profile.model";
import axios from "axios";

export async function postProfile(data: IProfile) {
  const response = await axios.post("http://localhost:3000/lead", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}
