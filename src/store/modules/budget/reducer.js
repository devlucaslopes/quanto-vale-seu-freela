import produce from 'immer';

const INITIAL_STATE = {
  total: 0,
  totalPerHour: 0,
  dailyHours: 0,
  workedDays: 0,
  vacation: 0,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@budget/CALCULATE': {
        const { total, dailyHours, workedDays, vacation } = action.payload;
        const perHour =
          total / (workedDays * 4 * dailyHours) +
          vacation * workedDays * dailyHours;

        draft.total = total;
        draft.dailyHours = dailyHours;
        draft.workedDays = workedDays;
        draft.vacation = vacation;
        draft.totalPerHour = perHour;
        break;
      }
      default:
    }
  });
}
