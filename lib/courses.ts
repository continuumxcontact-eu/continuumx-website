export type Locale = 'en'

export interface Course {
  slug: string
  title: { en: string }
  level: { en: string }
  duration: { en: string }
  format: { en: string }
  overview: { en: string }
  whoFor: { en: string[] }
  learn: { en: string[] }
  tools: { en: string[] }
  outcomes: { en: string[] }
}

export interface Diploma {
  slug: string
  title: { en: string }
  level: { en: string }
  duration: { en: string }
  format: { en: string }
  overview: { en: string }
  note: { en: string }
  courses: string[] // course slugs (order matters)
}

/* =========================
   COURSES
========================= */
export const courses: Course[] = [
  /* -------------------------------------------------
     POWER BI (BEGINNER) - Visualization & Motivation
  -------------------------------------------------- */
  {
    slug: 'power-bi-business-intelligence',
    title: { en: 'Power BI Beginner' },
    level: { en: 'Beginner (Zero-friendly)' },
    duration: { en: '30 hours' },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'A highly practical introduction that starts with what data and data analysis mean in real business contexts, then focuses on visualization and dashboard thinking. Learn how Power BI fits into the BI workflow and build interactive reports—without heavy DAX or complex modeling.',
    },

    whoFor: {
      en: [
        'Absolute beginners who want to understand the big picture of data analytics',
        'Business professionals (HR, Finance, Supply Chain, Marketing, Operations)',
        'Fresh graduates and career starters in data analytics and BI',
      ],
    },

    learn: {
      en: [
        'What data is, what data analysis means, and the role of BI tools',
        'BI workflow: data → preparation → visuals → insights',
        'Import datasets (Excel/CSV) and validate data types',
        'Power Query essentials: cleaning & simple transformations',
        'Build reports: charts, tables, filters, slicers (with a light intro to drill-through)',
        'Dashboard design principles for clarity and executive readability',
        'Light measures & KPIs (basic DAX: SUM / COUNT / AVERAGE)',
        'Guided mini project: your first interactive dashboard',
      ],
    },

    tools: {
      en: ['Power BI Desktop', 'Power Query', 'Light DAX', 'Excel / CSV datasets'],
    },

    outcomes: {
      en: [
        'Build a complete beginner-level dashboard with interactive filtering',
        'Understand the BI workflow and dashboard thinking',
        'Prepare and visualize data confidently using Power BI',
      ],
    },
  },

  /* -------------------------------------------------
     EXCEL FOR DATA ANALYSIS
  -------------------------------------------------- */
  {
    slug: 'excel-for-data-analysis',
    title: { en: 'Excel for Data Analysis' },
    level: { en: 'Beginner → Intermediate' },
    duration: { en: '30 hours' },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'Build strong analysis fundamentals using Excel: clean data, use formulas and PivotTables, and create clear KPI summaries—perfect preparation for SQL and Power BI.',
    },

    whoFor: {
      en: [
        'Beginners starting a data analytics career',
        'Business professionals working with spreadsheets daily',
        'Anyone who wants strong foundations before BI/SQL',
      ],
    },

    learn: {
      en: [
        'Data structure, types, and common quality issues',
        'Cleaning: duplicates, missing values, formatting, validation rules',
        'Core formulas (IF, XLOOKUP, TEXT, DATE, logical checks)',
        'PivotTables & PivotCharts for fast analysis',
        'Sorting, filtering, conditional formatting for insight discovery',
        'Compact analytical reporting: KPIs, trends, comparisons',
        'Mini project: Excel analysis + one-page summary report',
      ],
    },

    tools: {
      en: ['Microsoft Excel', 'Excel templates', 'Business datasets (CSV/Excel)'],
    },

    outcomes: {
      en: [
        'Clean and structure real datasets in Excel',
        'Produce pivot-based insights and KPI summaries',
        'Be ready for SQL and Power BI Intermediate',
      ],
    },
  },

  /* -------------------------------------------------
     SQL FOR DATA ANALYSIS
  -------------------------------------------------- */
  {
    slug: 'sql-for-data-analysis',
    title: { en: 'SQL for Data Analysis' },
    level: { en: 'Beginner → Intermediate' },
    duration: { en: '30 hours' },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'Learn SQL the way analysts use it: extract data, validate quality, and answer business questions. Focus is on analytics—not database administration.',
    },

    whoFor: {
      en: [
        'Learners who want to work with databases confidently',
        'Power BI users who need reliable data extraction',
        'Analysts building reports, dashboards, and KPIs',
      ],
    },

    learn: {
      en: [
        'Relational basics: tables, keys, and relationships',
        'SELECT, WHERE, ORDER BY, LIMIT',
        'Aggregations: COUNT/SUM/AVG + GROUP BY + HAVING',
        'Joins (INNER/LEFT) for common analysis use-cases',
        'Dates & text functions (practical patterns)',
        'Subqueries and CTEs (WITH) for readable analytics',
        'Analytics patterns: top-N, duplicates, data checks',
        'Export/query data for dashboards and reporting',
      ],
    },

    tools: {
      en: ['SQL', 'PostgreSQL (recommended)', 'DBeaver / pgAdmin / any SQL client'],
    },

    outcomes: {
      en: [
        'Write correct, readable SQL queries for analysis',
        'Use joins and aggregations to answer business questions',
        'Extract dashboard-ready datasets with confidence',
      ],
    },
  },

  /* -------------------------------------------------
     POWER BI (INTERMEDIATE)
  -------------------------------------------------- */
  {
    slug: 'power-bi-intermediate',
    title: { en: 'Power BI Intermediate' },
    level: { en: 'Intermediate' },
    duration: { en: '30 hours' },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'Build professional BI reports: strong data models, practical Power Query transformations, and reliable DAX measures for KPI-driven reporting.',
    },

    whoFor: {
      en: [
        'Learners who completed Power BI Beginner',
        'Anyone with basic Excel/SQL who wants professional dashboards',
        'Analysts who want stronger modeling + DAX skills',
      ],
    },

    learn: {
      en: [
        'Power Query deeper skills: merge/append, error handling, best practices',
        'Data modeling: relationships, cardinality, filter direction',
        'Intro to star schema (conceptual foundation)',
        'DAX foundations: measures vs columns, context basics',
        'Core KPI measures (CALCULATE intro, DIVIDE, simple time comparisons)',
        'Multi-page report structure, navigation, and consistent UX',
        'Practical project: KPI dashboard built on a clean model',
      ],
    },

    tools: {
      en: ['Power BI Desktop', 'Power Query', 'DAX (foundations)', 'SQL-ready datasets'],
    },

    outcomes: {
      en: [
        'Build a professional Power BI model and KPI report',
        'Create reliable measures and structured reporting pages',
        'Be ready for Advanced Power BI & Capstone',
      ],
    },
  },

  /* -------------------------------------------------
     STATISTICS
  -------------------------------------------------- */
  {
    slug: 'statistics-for-data-analysis',
    title: { en: 'Statistics for Data Analysis' },
    level: { en: 'Beginner → Intermediate' },
    duration: { en: '30 hours' },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'Practical statistics for analysts: interpret KPIs, understand variability, analyze relationships, and make basic data-driven conclusions.',
    },

    whoFor: {
      en: [
        'Learners who want to interpret data beyond charts',
        'Power BI / SQL learners who need stronger reasoning',
        'Professionals who want confidence in analytics decisions',
      ],
    },

    learn: {
      en: [
        'Descriptive statistics: mean/median, variance, standard deviation',
        'Probability & distributions (analyst-focused)',
        'Sampling intuition and why it matters in reporting',
        'Correlation (interpretation + common pitfalls)',
        'Intro to simple regression (concept + interpretation)',
        'Hypothesis testing intuition (p-values, confidence, practical meaning)',
        'KPI comparisons: period-over-period and understanding noise',
      ],
    },

    tools: {
      en: ['Excel (for calculations)', 'Power BI (for KPI context examples)', 'Simple datasets'],
    },

    outcomes: {
      en: [
        'Interpret KPIs with statistical reasoning',
        'Explain variability and relationships clearly',
        'Make more confident, data-driven conclusions',
      ],
    },
  },

  /* -------------------------------------------------
     PYTHON BASICS
  -------------------------------------------------- */
  {
    slug: 'python-basics-for-analysts',
    title: { en: 'Python Basics for Analysts' },
    level: { en: 'Absolute Beginner' },
    duration: { en: '30 hours' },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'Start from zero and learn programming fundamentals with Python. Focus on problem-solving and clean code to prepare for Python-based data analysis.',
    },

    whoFor: {
      en: [
        'Absolute beginners with no programming background',
        'Career shifters and non-technical professionals',
        'Learners preparing for Data Analytics with Python',
      ],
    },

    learn: {
      en: [
        'How programs work: inputs → processing → outputs',
        'Variables, types, operators, and basic debugging',
        'Conditionals and loops (practical patterns)',
        'Functions and writing reusable code',
        'Lists, dictionaries, and structured data basics',
        'Reading/writing files (CSV basics)',
        'Mini exercises that build analyst-style thinking',
      ],
    },

    tools: {
      en: ['Python', 'VS Code', 'Google Colab'],
    },

    outcomes: {
      en: [
        'Write clean Python code for small tasks and logic problems',
        'Understand core programming concepts confidently',
        'Be ready for Data Analytics with Python (Pandas/NumPy)',
      ],
    },
  },

  /* -------------------------------------------------
     DATA ANALYTICS WITH PYTHON
  -------------------------------------------------- */
  {
    slug: 'data-analytics-python',
    title: { en: 'Data Analytics with Python' },
    level: { en: 'Beginner → Intermediate' },
    duration: { en: '30 hours' },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'Analyze real datasets end-to-end using Python. Clean, explore, and visualize data with Pandas and NumPy, then communicate insights in a clear reporting style.',
    },

    whoFor: {
      en: [
        'Learners who completed Python Basics for Analysts',
        'Analysts who want automation beyond Excel',
        'Professionals transitioning into data roles',
      ],
    },

    learn: {
      en: [
        'Pandas essentials: loading, selecting, filtering, transforming',
        'Cleaning: missing values, duplicates, types, outliers (intro)',
        'Grouping & aggregation for business questions',
        'Merging datasets and building analysis-ready tables',
        'Visualization (Matplotlib) and insight storytelling',
        'EDA workflow: ask → explore → validate → conclude',
        'Portfolio project: analysis + insights report',
      ],
    },

    tools: {
      en: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter/Colab'],
    },

    outcomes: {
      en: [
        'Perform end-to-end EDA on real datasets',
        'Clean and transform data efficiently',
        'Deliver a portfolio-ready analysis project',
      ],
    },
  },

  /* -------------------------------------------------
     POWER BI (ADVANCED) - Capstone Integration
  -------------------------------------------------- */
  {
    slug: 'power-bi-advanced-capstone',
    title: { en: 'Power BI Advanced & Capstone' },
    level: { en: 'Advanced' },
    duration: { en: '30 hours' },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'A capstone-style advanced course that integrates the diploma skills. Build a production-ready BI solution with advanced DAX, optimized performance, and a portfolio-grade final dashboard.',
    },

    whoFor: {
      en: [
        'Learners who completed Power BI Intermediate',
        'Analysts aiming for senior-level BI reporting skills',
        'Professionals building a public portfolio (LinkedIn/GitHub)',
      ],
    },

    learn: {
      en: [
        'Advanced modeling: practical star schema patterns and role-playing dimensions',
        'Advanced DAX: context mastery, CALCULATE patterns, iterators (X functions)',
        'Time intelligence patterns for KPI comparisons',
        'Performance optimization: model size, DAX tuning, Performance Analyzer',
        'Advanced Power Query: robust transformations and folding awareness',
        'Executive dashboard UX: storytelling, navigation, consistency',
        'Capstone delivery: SQL extraction → transformation → modeling → measures → final dashboard → insights presentation',
      ],
    },

    tools: {
      en: ['Power BI Desktop', 'DAX (advanced)', 'Power Query (advanced)', 'SQL datasets', 'Performance Analyzer'],
    },

    outcomes: {
      en: [
        'Deliver a production-ready BI solution with advanced measures and optimized performance',
        'Present insights professionally to stakeholders',
        'Graduate with a portfolio-grade capstone dashboard',
      ],
    },
  },

  /* -------------------------------------------------
     INTRODUCTION TO AI (Standalone)
  -------------------------------------------------- */
  {
    slug: 'introduction-to-ai',
    title: { en: 'Introduction to Artificial Intelligence' },
    level: { en: 'Beginner (Non-technical)' },
    duration: { en: '' },
    format: { en: '' },

    overview: { en: 'Comming soon.' }, // keeping same text as on website :contentReference[oaicite:1]{index=1}

    whoFor: {
      en: [
        'Absolute beginners curious about AI',
        'Business professionals and decision-makers',
        'Students exploring AI before technical learning',
      ],
    },

    learn: {
      en: [
        'What Artificial Intelligence really means',
        'AI vs Data Analytics vs Machine Learning',
        'Real-world AI applications (business, healthcare, marketing)',
        'Basic AI terminology and concepts',
        'Ethics, limitations, and common misconceptions',
      ],
    },

    tools: {
      en: ['Case studies', 'Videos', 'Interactive discussions'],
    },

    outcomes: {
      en: [
        'Understand AI concepts clearly without coding',
        'Make informed decisions when working with AI teams',
        'Know whether to pursue technical AI learning next',
      ],
    },
  },
]

/* =========================
   DIPLOMAS
========================= */
export const diplomas: Diploma[] = [
  {
    slug: 'data-analysis-diploma',
    title: { en: 'Professional Diploma in Data Analysis' },
    level: { en: 'Zero → Advanced' },
    duration: {
      en: '240 hours (8 courses × 30 hours) + Diploma Certificate upon completion',
    },
    format: { en: 'Online/Hybrid' },

    overview: {
      en: 'A structured, job-oriented path designed for learners starting from zero. Build real analytics skills across Excel, SQL, Statistics, Python, and Power BI—ending with an advanced capstone project and a portfolio-ready dashboard.',
    },

    note: {
      en: 'Each course can be taken as a standalone micro-credential. The recommended order ensures smooth progression from zero knowledge to advanced capability. Completing all included courses (and the capstone) grants the full diploma certificate.',
    },

    courses: [
      'power-bi-business-intelligence',
      'excel-for-data-analysis',
      'sql-for-data-analysis',
      'power-bi-intermediate',
      'statistics-for-data-analysis',
      'python-basics-for-analysts',
      'data-analytics-python',
      'power-bi-advanced-capstone',
    ],
  },
]

/* =========================
   HELPERS
========================= */
export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export function getDiploma(slug: string): Diploma | undefined {
  return diplomas.find((d) => d.slug === slug)
}

export function getDiplomaCourses(diploma: Diploma): Course[] {
  return diploma.courses
    .map((s) => getCourse(s))
    .filter((c): c is Course => Boolean(c))
}

export function getCourseTitle(course: Course, _locale: Locale = 'en'): string {
  return course.title.en
}
