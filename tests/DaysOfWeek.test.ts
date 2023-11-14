import { getDaysOfWeekMask } from "../dist/lib/utility/daysofweek";

describe("Calculate Days of the Week Mast", () => {
  test("Individual Days of the Week", () => {
    expect(getDaysOfWeekMask(["Sunday"])).toBe(1);
    expect(getDaysOfWeekMask(["Monday"])).toBe(2);
    expect(getDaysOfWeekMask(["Tuesday"])).toBe(4);
    expect(getDaysOfWeekMask(["Wednesday"])).toBe(8);
    expect(getDaysOfWeekMask(["Thursday"])).toBe(16);
    expect(getDaysOfWeekMask(["Friday"])).toBe(32);
    expect(getDaysOfWeekMask(["Saturday"])).toBe(64);
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
    //@ts-ignore
    expect(getDaysOfWeekMask(undefined)).toBe(-1);
    expect(getDaysOfWeekMask([])).toBe(-1);
  });

  test("Monday, Wednesday, and Friday, plus All Caps", () => {
    expect(getDaysOfWeekMask(["MONDAY", "WEDNESDAY", "FRIDAY"])).toBe(42);
  });
});
