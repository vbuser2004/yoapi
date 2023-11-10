import { generateError } from "../dist/lib/utility/createerror.js";
import { ApiError, ApiError_Schema } from "../dist/types/ApiError.js";

describe("Test if generate error works for valid error", () => {
  test("For error 700101", () => {
    expect(generateError("700101", "noMgsId", "Outlet.getState").code).toBe(
      "700101"
    );
  });
  test("For non-existant error - should return 700999", () => {
    expect(generateError("555555", "noMgsId", "Outlet.getState").code).toBe(
      "700999"
    );
  });
  test("Error object returns matches ApiError", () => {
    expect(
      generateError("700102", "noMsgId", "MotionSensor.getState")
    ).toMatchObject({
      code: "700102",
      data: {},
      desc: "Invalid Request Body",
      method: "MotionSensor.getState",
      msgid: "noMsgId",
      time: new Date().getTime(),
    });
  });
});
