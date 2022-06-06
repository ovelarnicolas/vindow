import { Get, MinLength } from "@tsed/schema";
import { Controller, UseBefore } from "@tsed/common";
import { QueryParams } from "@tsed/platform-params";
import { HotelResponse } from "src/interfaces/Hotel";
import HotelService from "../../services/HotelService";
import CheckQueryMiddleware from "../../middlewares/CheckApiKeyMiddleware";

@Controller("/hotel")
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get("/")
  @UseBefore(CheckQueryMiddleware)
  get(
    @QueryParams("query") @MinLength(3) query: string
  ): Promise<string | HotelResponse> {
    return this.hotelService.findByQuery(query);
  }
}
