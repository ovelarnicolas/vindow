import { Service } from "@tsed/di";
import { HotelResponse } from "src/models/Hotel";
import axios, { AxiosError, AxiosResponse } from "axios";
import { GOOGLE_API_KEY } from "../config/envs/index";

const BASE_URI =
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=place_id,name&input=";

@Service()
export default class HotelService {
  async findByQuery(query: string): Promise<string | HotelResponse> {
    const url = `${BASE_URI}${query}&inputtype=textquery&key=${GOOGLE_API_KEY}`;

    return axios
      .get<HotelResponse>(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((resp: AxiosResponse<HotelResponse>) => {
        return resp.data;
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      });
  }
}
