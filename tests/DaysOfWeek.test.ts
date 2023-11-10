import { getDaysOfWeekMask } from "../src/lib/utility/daysofweek";

describe("Calculate Days of the Week Mast", () => {
  test("Sunday only Mask", () => {
    expect(getDaysOfWeekMask(["Sunday"])).toBe(1);
  });

  test("Weekends Only, Weekdays Only, and All", () => {
    expect(getDaysOfWeekMask(["weekends"])).toBe(65);
    expect(getDaysOfWeekMask(["Weekdays"])).toBe(62);
    expect(getDaysOfWeekMask(["all"])).toBe(127);
  });

  test("Invalid Data entered", () => {
    expect(getDaysOfWeekMask(["BadDay"])).toBe(-1);
  });

  test("Invalid Data entered", () => {
    //@ts-ignore
    expect(getDaysOfWeekMask()).toBe(-1);
  });

  test("Monday, Wednesday, and Friday, plus All Caps", () => {
    expect(getDaysOfWeekMask(["MONDAY", "WEDNESDAY", "FRIDAY"])).toBe(42);
  });
});
