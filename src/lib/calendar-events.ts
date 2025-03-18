const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth();

const EVENT_COLORS = [
  "#E57373",
  "#81C784",
  "#64B5F6",
  "#4DB6AC",
  "#BA68C8",
  "#FFB74D",
  "#F06292",
  "#9575CD",
  "#4FC3F7",
  "#A1887F",
];

export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  color: string;
};

export const events: CalendarEvent[] = [
  {
    id: 1,
    title: "Event 1",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 1),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 2),
    color: EVENT_COLORS[0],
  },
  {
    id: 2,
    title: "Event 2",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 5),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 7),
    color: EVENT_COLORS[1],
  },
  {
    id: 3,
    title: "Event 3",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 10),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 13),
    color: EVENT_COLORS[2],
  },
  {
    id: 4,
    title: "Event 4",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 13),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 17),
    color: EVENT_COLORS[3],
  },
  {
    id: 5,
    title: "Event 5",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 16),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 21),
    color: EVENT_COLORS[4],
  },
  {
    id: 6,
    title: "Event 6",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 20),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 26),
    color: EVENT_COLORS[5],
  },
  {
    id: 7,
    title: "Event 7",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 23),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 30),
    color: EVENT_COLORS[6],
  },
  {
    id: 8,
    title: "Event 8",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 26),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH + 1, 3),
    color: EVENT_COLORS[7],
  },
  {
    id: 9,
    title: "Event 9",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 30),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 31),
    color: EVENT_COLORS[8],
  },
  {
    id: 10,
    title: "Event 10",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 3),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 4),
    color: EVENT_COLORS[9],
  },
  {
    id: 11,
    title: "Event 11",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 6),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 7),
    color: EVENT_COLORS[0],
  },
  {
    id: 12,
    title: "Event 12",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 10),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 12),
    color: EVENT_COLORS[1],
  },
  {
    id: 13,
    title: "Event 13",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 13),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 14),
    color: EVENT_COLORS[2],
  },
  {
    id: 14,
    title: "Event 14",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 16),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 17),
    color: EVENT_COLORS[3],
  },
  {
    id: 15,
    title: "Event 15",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 20),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 22),
    color: EVENT_COLORS[4],
  },
  {
    id: 16,
    title: "Event 16",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 23),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 24),
    color: EVENT_COLORS[5],
  },
  {
    id: 17,
    title: "Event 17",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 26),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 27),
    color: EVENT_COLORS[6],
  },
  {
    id: 18,
    title: "Event 18",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 30),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 1),
    color: EVENT_COLORS[7],
  },
  {
    id: 19,
    title: "Event 19",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 3),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 4),
    color: EVENT_COLORS[8],
  },
  {
    id: 20,
    title: "Event 20",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 6),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 7),
    color: EVENT_COLORS[9],
  },
  {
    id: 21,
    title: "Event 21",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 10),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 12),
    color: EVENT_COLORS[0],
  },
  {
    id: 22,
    title: "Event 22",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 13),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 14),
    color: EVENT_COLORS[1],
  },
  {
    id: 23,
    title: "Event 23",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 16),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 17),
    color: EVENT_COLORS[2],
  },
  {
    id: 24,
    title: "Event 24",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 20),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 22),
    color: EVENT_COLORS[3],
  },
  {
    id: 25,
    title: "Event 25",
    start: new Date(CURRENT_YEAR, CURRENT_MONTH, 23),
    end: new Date(CURRENT_YEAR, CURRENT_MONTH, 24),
    color: EVENT_COLORS[4],
  },
];
