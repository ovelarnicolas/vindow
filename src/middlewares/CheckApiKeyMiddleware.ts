import { Required } from "@tsed/schema";
import { Middleware, QueryParams } from "@tsed/common";
import { NotFound } from "@tsed/exceptions";
import { GOOGLE_API_KEY } from "src/config/envs";

@Middleware()
export default class CheckQueryMiddleware {
  async use(@Required() @QueryParams("query") query: string) {
    console.log("middleware");

    if (!GOOGLE_API_KEY) {
      throw new NotFound("API KEY not found");
    }
  }
}
