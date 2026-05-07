import { CreateClassEventInput } from "@/types/classEvent";

const atTime = (
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number
) => new Date(year, month - 1, day, hours, minutes, 0, 0);

// Returns deterministic class seed data around the provided reference date.
export const buildClassSeedData = (referenceDate = new Date()): CreateClassEventInput[] => {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth() + 1;
  const previousMonth = month === 1 ? 12 : month - 1;
  const previousMonthYear = month === 1 ? year - 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextMonthYear = month === 12 ? year + 1 : year;

  return [
    // Past classes
    {
      title: "POOMSAE CLASS",
      classType: "poomsae",
      location: "Great Hall North",
      startAt: atTime(previousMonthYear, previousMonth, 4, 17, 0),
      endAt: atTime(previousMonthYear, previousMonth, 4, 19, 0),
      visibility: "both",
    },
    {
      title: "SPARRING CLASS",
      classType: "sparring",
      location: "Great Hall North",
      startAt: atTime(previousMonthYear, previousMonth, 6, 17, 0),
      endAt: atTime(previousMonthYear, previousMonth, 6, 19, 0),
      visibility: "both",
    },
    // Current month classes
    {
      title: "DEMO KICKING",
      classType: "demo",
      location: "Great Hall North",
      startAt: atTime(year, month, 4, 17, 0),
      endAt: atTime(year, month, 19, 0),
      visibility: "both",
    },
    {
      title: "SPARRING CLASS",
      classType: "sparring",
      location: "Great Hall North",
      startAt: atTime(year, month, 11, 17, 0),
      endAt: atTime(year, month, 19, 0),
      visibility: "both",
    },
    {
      title: "POOMSAE CLASS",
      classType: "poomsae",
      location: "Great Hall North",
      startAt: atTime(year, month, 13, 17, 0),
      endAt: atTime(year, month, 19, 0),
      visibility: "both",
    },
    {
      title: "EXEC TRAINING",
      classType: "other",
      location: "Great Hall South",
      startAt: atTime(year, month, 21, 18, 0),
      endAt: atTime(year, month, 21, 20, 0),
      visibility: "admin",
    },
    // Next month classes
    {
      title: "POOMSAE CLASS",
      classType: "poomsae",
      location: "Great Hall North",
      startAt: atTime(nextMonthYear, nextMonth, 3, 17, 0),
      endAt: atTime(nextMonthYear, nextMonth, 3, 19, 0),
      visibility: "both",
    },
    {
      title: "SPARRING CLASS",
      classType: "sparring",
      location: "Great Hall North",
      startAt: atTime(nextMonthYear, nextMonth, 10, 17, 0),
      endAt: atTime(nextMonthYear, nextMonth, 10, 19, 0),
      visibility: "both",
    },
  ];
};
