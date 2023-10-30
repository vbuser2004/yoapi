export const getDaysOfWeekMask = (days: string[]): number => {
  // Check if All Week, Weekdays, or Weekends
  if (days[0] === "All") return 127;

  if (days[0] === "Weekdays") return 62;

  if (days[0] === "Weekends") return 65;

  const dayValues: Record<string, number> = {
    Sunday: 1,
    Monday: 2,
    Tuesday: 4,
    Wednesday: 8,
    Thursday: 16,
    Friday: 32,
    Saturday: 64,
  };

  let mask = 0;

  for (const day of days) {
    mask += dayValues[day]!;
  }

  return mask;
};
