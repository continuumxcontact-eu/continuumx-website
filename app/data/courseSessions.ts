export type Session = {
  id: string
  courseSlug: string
  isActive: boolean
  label: string // English only
}

export const sessions: Session[] = [
 
  {
    id: 'Ramdan-> Sat 12:30 PM – 16:30 PM / After Ramdan-> Sat 10:00 AM – 14:00 PM',
    courseSlug: 'Power BI Beginner',
    isActive: true,
    label: 'Ramdan-> Sat 12:30 PM – 16:30 PM / After Ramdan-> Sat 10:00 AM – 14:00 PM',
  },
  {
    id: 'Ramdan-> Sat 19:30 PM – 00:30 AM / After Ramdan-> Sat 18:00 PM – 22:00 PM',
    courseSlug: 'Power BI Beginner',
    isActive: true,
    label: 'Ramdan-> Sat 19:30 PM – 00:30 AM / After Ramdan-> Sat 18:00 PM – 22:00 PM',
  },


  // =========================
  // Excel for Data Analysis
  // slug: excel-for-data-analysis
  // =========================
  {
    id: 'excel_round1',
    courseSlug: 'excel-for-data-analysis',
    isActive: false,
    label: 'Sat 4:00–7:00 PM ',
  },

  // =========================
  // SQL for Data Analysis
  // slug: sql-for-data-analysis
  // =========================
  {
    id: 'Ramdan-> Fri 10:00 AM – 15:00 PM / After Ramadan-> Sat 10:00 AM – 15:00 PM',
    courseSlug: 'sql-for-data-analysis',
    isActive: true,
    label: 'Ramdan-> Fri 10:00 AM – 15:00 PM / After Ramadan-> Sat 10:00 AM – 15:00 PM',
  },
  {
    id: 'Ramdan-> Fri 20:30 PM – 00:30 AM / After Ramdan-> Fri 18:00 PM – 22:00 PM',
    courseSlug: 'sql-for-data-analysis',
    isActive: true,
    label: 'Ramdan-> Fri 20:30 PM – 00:30 AM / After Ramdan-> Fri 18:00 PM – 22:00 PM',
  },

  // =========================
  // Power BI Intermediate
  // slug: power-bi-intermediate
  // =========================
  {
    id: 'pbi_intermediate_round1',
    courseSlug: 'power-bi-intermediate',
    isActive: false,
    label: 'Round 1: Wed 6:00–9:00 PM (Start: Mar 11, 2026)',
  },

  // =========================
  // Statistics for Data Analysis
  // slug: statistics-for-data-analysis
  // =========================
  {
    id: 'stats_round1',
    courseSlug: 'statistics-for-data-analysis',
    isActive: false,
    label: 'Round 1: Fri 6:00–9:00 PM (Start: Mar 13, 2026)',
  },

  // =========================
  // Python Basics for Analysts
  // slug: python-basics-for-analysts
  // =========================
  {
    id: 'Ramdan-> Mon,Thu 20:30 PM – 23:00 PM / After Ramdan-> Mon,Thu 19:00 PM – 21:30 PM',
    courseSlug: 'python-basics-for-analysts',
    isActive: true,
    label: 'Ramdan-> Mon,Thu 20:30 PM – 23:00 PM / After Ramdan-> Mon,Thu 19:00 PM – 21:30 PM',
  },
 

  // =========================
  // Data Analytics with Python
  // slug: data-analytics-python
  // =========================
  {
    id: 'python_analytics_round1',
    courseSlug: 'data-analytics-python',
    isActive: false,
    label: 'Round 1: Tue 6:00–9:00 PM (Start: Mar 17, 2026)',
  },

  // =========================
  // Power BI Advanced & Capstone
  // slug: power-bi-advanced-capstone
  // =========================
  {
    id: 'pbi_advanced_capstone_round1',
    courseSlug: 'power-bi-advanced-capstone',
    isActive: false,
    label: 'Round 1: Thu 6:00–9:00 PM (Start: Mar 19, 2026)',
  },

  // =========================
  // Introduction to Artificial Intelligence
  // slug: introduction-to-ai
  // =========================
  {
    id: 'intro_ai_round1',
    courseSlug: 'introduction-to-ai',
    isActive: false,
    label: 'Coming soon (date to be announced)',
  },
]
