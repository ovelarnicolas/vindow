import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { HotelController } from "./HotelController";
import { Server } from "../../Server";

describe("HelloWorldController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(
    PlatformTest.bootstrap(Server, {
      mount: {
        "/": [HotelController],
      },
    })
  );
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET rest/hotel?query", async () => {
    const response = await request
      .get("/hotel?query=sheraton buenos aires")
      .expect(200);

    expect(typeof response.body).toEqual("object");
  });
});
