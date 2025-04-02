import { IProfile } from "@/models/profile.model";
import axios from "axios";

export async function postProfile(data: IProfile) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/lead`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}
