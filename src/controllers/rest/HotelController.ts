import { Get } from "@tsed/schema";
import { Controller } from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import Hotel, { HotelResponse } from "src/models/Hotel";
import HotelService from "src/services/HotelService";

@Controller("/hotel")
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get("/:query")
  async get(
    @PathParams("query") query: string
  ): Promise<string | HotelResponse> {
    return this.hotelService.findByQuery(query);
  }
}
