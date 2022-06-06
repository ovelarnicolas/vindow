import { Get, MinLength } from "@tsed/schema";
import { Controller } from "@tsed/common";
import { QueryParams } from "@tsed/platform-params";
import { HotelResponse } from "src/interfaces/Hotel";
import HotelService from "../../services/HotelService";

@Controller("/hotel")
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get("/")
  get(
    @QueryParams("query") @MinLength(3) query: string
  ): Promise<string | HotelResponse> {
    return this.hotelService.findByQuery(query);
  }
}
