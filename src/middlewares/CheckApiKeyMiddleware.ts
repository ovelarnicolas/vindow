import { Middleware } from "@tsed/common";
import { NotFound } from "@tsed/exceptions";
import { GOOGLE_API_KEY } from "../config/envs/index";

@Middleware()
export default class CheckQueryMiddleware {
  async use() {
    console.log("middleware");

    if (!GOOGLE_API_KEY) {
      throw new NotFound("API KEY not found");
    }
  }
}
