import { PlatformTest } from "@tsed/common";
import HotelService from "./HotelService";

describe("HotelService", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  describe("with inject()", () => {
    it(
      "should get the service from the inject method",
      PlatformTest.inject([HotelService], (hotelService: HotelService) => {
        expect(hotelService).toBeInstanceOf(HotelService);
      })
    );
  });
});
