export function calculate(total, dailyHours, workedDays, vacation) {
  return {
    type: '@budget/CALCULATE',
    payload: { total, dailyHours, workedDays, vacation },
  };
}
