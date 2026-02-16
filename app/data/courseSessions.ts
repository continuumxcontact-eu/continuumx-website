export type Session = {
  id: string;
  courseSlug: string;
  isActive: boolean;
  label: string;   // English only
};

export const sessions: Session[] = [
  {
    id: "pbi_beg_round1",
    courseSlug: "power-bi-beginner",
    isActive: true,
    label: "Round 1: Thu 6:00–9:00 PM (Start: Mar 5, 2026)",
  },
  {
    id: "excel_round1",
    courseSlug: "excel-for-data-analysis",
    isActive: true,
    label: "Round 1: Sat 4:00–7:00 PM (Start: Mar 7, 2026)",
  },
];
