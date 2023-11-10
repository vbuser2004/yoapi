export const getDaysOfWeekMask = (days: string[]): number => {
  const dayValues: Record<string, number> = {
    sunday: 1,
    monday: 2,
    tuesday: 4,
    wednesday: 8,
    thursday: 16,
    friday: 32,
    saturday: 64,
  };

  let mask: number = 0;

  try {
    // Check if All Week, Weekdays, or Weekends
    if (days[0]?.toLowerCase() == "all") return 127;

    if (days[0]?.toLowerCase() == "weekdays") return 62;

    if (days[0]?.toLowerCase() == "weekends") return 65;

    if (days.length <= 0) return -1;

    if (days == null || undefined) return -1;

    for (const day of days) {
      mask += dayValues[day.toLowerCase()]!;
    }
  } catch {
    return -1;
  }

  return isNaN(mask) ? -1 : mask;
};
