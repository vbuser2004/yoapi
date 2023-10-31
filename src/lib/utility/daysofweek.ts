export const getDaysOfWeekMask = (days: string[]): number => {
    // Check if All Week, Weekdays, or Weekends
    if (days[0] === 'all') return 127;

    if (days[0] === 'weekdays') return 62;

    if (days[0] === 'weekends') return 65;

    const dayValues: Record<string, number> = {
        sunday: 1,
        monday: 2,
        tuesday: 4,
        wednesday: 8,
        thursday: 16,
        friday: 32,
        saturday: 64,
    };

    let mask = 0;

    for (const day of days) {
        mask += dayValues[day]!;
    }

    return mask;
};
