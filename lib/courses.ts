import { Locale } from './i18n'

export interface Course {
  slug: string
  title: { en: string; ar: string }
  level: { en: string; ar: string }
  duration: { en: string; ar: string }
  format: { en: string; ar: string }
  overview: { en: string; ar: string }
  whoFor: { en: string[]; ar: string[] }
  learn: { en: string[]; ar: string[] }
  tools: { en: string[]; ar: string[] }
  outcomes: { en: string[]; ar: string[] }
}

export interface Diploma {
  slug: string
  title: { en: string; ar: string }
  level: { en: string; ar: string }
  duration: { en: string; ar: string }
  format: { en: string; ar: string }
  overview: { en: string; ar: string }
  note: { en: string; ar: string }
  courses: string[] // course slugs (order matters)
}

/* =========================
   COURSES
========================= */
export const courses: Course[] = [
  {
    slug: 'power-bi-business-intelligence',
    title: {
      en: 'Power BI Fundamentals: From Data to Interactive Dashboards',
      ar: 'أساسيات Power BI: من البيانات إلى لوحات تفاعلية',
    },
    level: { en: 'Beginner', ar: 'مبتدئ' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'A practical beginner course to import, clean, model, and visualize data in Power BI and build interactive dashboards—no programming required.',
      ar: 'كورس عملي للمبتدئين لتعلم استيراد البيانات وتنظيفها وبناء نموذج وعرضها في Power BI وبناء Dashboards تفاعلية—بدون برمجة.',
    },
    whoFor: {
      en: [
        'Fresh graduates and career starters in data analytics',
        'Business professionals (HR, Finance, Supply Chain, Marketing, Operations)',
        'Anyone who wants dashboards without technical background',
      ],
      ar: [
        'الخريجون الجدد وبداية المسار في تحليل البيانات',
        'محترفو الأعمال (HR/Finance/Supply Chain/Marketing/Operations)',
        'أي شخص يريد بناء Dashboards بدون خلفية تقنية',
      ],
    },
    learn: {
      en: [
        'Power BI workflow: data → model → visuals → insights',
        'Import data (Excel/CSV) and validate data types',
        'Power Query cleaning basics',
        'Basic data modeling (relationships)',
        'Beginner DAX measures (SUM/COUNT/AVERAGE) + simple KPIs',
        'Build interactive visuals and slicers',
        'Dashboard design basics',
        'Mini end-to-end dashboard project',
      ],
      ar: [
        'فهم دورة عمل Power BI: بيانات → نموذج → مرئيات → رؤى',
        'استيراد البيانات (Excel/CSV) وفهم أنواع البيانات',
        'أساسيات التنظيف في Power Query',
        'أساسيات Data Modeling (العلاقات)',
        'DAX للمبتدئين (SUM/COUNT/AVERAGE) وKPIs بسيطة',
        'بناء Charts وSlicers تفاعلية',
        'أساسيات تصميم الداشبورد',
        'مشروع صغير End-to-End',
      ],
    },
    tools: {
      en: ['Power BI Desktop', 'Power Query', 'Basic DAX', 'Excel/CSV datasets'],
      ar: ['Power BI Desktop', 'Power Query', 'DAX (أساسيات)', 'Datasets Excel/CSV'],
    },
    outcomes: {
      en: [
        'Build a complete beginner dashboard',
        'Clean and model data correctly',
        'Create KPIs and answer business questions',
      ],
      ar: [
        'بناء Dashboard كامل للمبتدئين',
        'تنظيف البيانات وبناء نموذج صحيح',
        'إنشاء KPIs والإجابة على أسئلة الأعمال',
      ],
    },
  },

  {
    slug: 'sql-for-data-analysis-basics',
    title: {
      en: 'SQL for Data Analysis (Basics)',
      ar: 'SQL لتحليل البيانات (أساسيات)',
    },
    level: { en: 'Beginner', ar: 'مبتدئ' },
    duration: { en: '20–24 hours', ar: '20–24 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Learn SQL for analytics: SELECT, filtering, aggregation, joins, and common analysis patterns—without database administration.',
      ar: 'تعلم SQL للتحليل: SELECT والتصفية والتجميع والـ Joins وأنماط التحليل الشائعة—بدون مهام إدارة قواعد البيانات.',
    },
    whoFor: {
      en: [
        'Beginners who need SQL for analytics',
        'Analysts working with databases',
        'Anyone who needs data extraction for BI',
      ],
      ar: [
        'مبتدئون يحتاجون SQL للتحليل',
        'محللو بيانات يعملون مع قواعد البيانات',
        'أي شخص يحتاج استخراج بيانات للـ BI',
      ],
    },
    learn: {
      en: [
        'How tables/rows/columns represent data',
        'SELECT + WHERE + ORDER BY + LIMIT',
        'Aggregations: COUNT/SUM/AVG + GROUP BY + HAVING',
        'Joins for analysis (INNER/LEFT)',
        'Working with dates/text (basic functions)',
        'Subqueries and CTEs (WITH) basics',
        'Common patterns: top-N, duplicates, data quality checks',
      ],
      ar: [
        'فهم الجداول والصفوف والأعمدة',
        'SELECT و WHERE و ORDER BY و LIMIT',
        'التجميع: COUNT/SUM/AVG مع GROUP BY و HAVING',
        'Joins للتحليل (INNER/LEFT)',
        'التعامل مع التواريخ والنصوص (دوال أساسية)',
        'Subqueries و CTEs (WITH)',
        'أنماط شائعة: Top-N، التكرارات، جودة البيانات',
      ],
    },
    tools: {
      en: ['SQL', 'PostgreSQL (or MySQL)', 'DBeaver (or any SQL client)'],
      ar: ['SQL', 'PostgreSQL (أو MySQL)', 'DBeaver (أو أي SQL client)'],
    },
    outcomes: {
      en: [
        'Write queries for analysis',
        'Use joins and aggregation confidently',
        'Extract data for dashboards and reports',
      ],
      ar: [
        'كتابة استعلامات للتحليل',
        'استخدام joins والتجميع بثقة',
        'استخراج بيانات للـ dashboards والتقارير',
      ],
    },
  },

  {
    slug: 'introduction-to-computers-programming-python',
    title: {
      en: 'Introduction to Computers & Programming using Python',
      ar: 'مقدمة في الحاسوب والبرمجة باستخدام Python',
    },
    level: { en: 'Absolute Beginner', ar: 'مبتدئ تمامًا' },
    duration: { en: '30–36 hours', ar: '30–36 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Start from zero: what a computer is, how it works, what programming means, then build simple Python programs step-by-step.',
      ar: 'من الصفر: ما هو الكمبيوتر وكيف يعمل وما معنى البرمجة، ثم كتابة برامج Python بسيطة خطوة بخطوة.',
    },
    whoFor: {
      en: [
        'Absolute beginners with no programming background',
        'Career shifters and non-technical professionals',
        'Students preparing for data/AI tracks',
      ],
      ar: [
        'مبتدئون تمامًا بدون خبرة برمجية',
        'أشخاص يغيرون مسارهم المهني',
        'طلاب يستعدون لمسارات البيانات والـ AI',
      ],
    },
    learn: {
      en: [
        'What is a computer? hardware vs software',
        'How programs run: inputs → processing → outputs',
        'Algorithmic thinking & problem solving',
        'Python basics: variables, types, input/output',
        'Conditionals and loops',
        'Functions',
        'Working with files (basic)',
      ],
      ar: [
        'ما هو الكمبيوتر؟ الفرق بين Hardware وSoftware',
        'كيف يعمل البرنامج: Input → Processing → Output',
        'التفكير الخوارزمي وحل المشكلات',
        'Python: المتغيرات وأنواع البيانات والإدخال والإخراج',
        'الشروط والحلقات',
        'الدوال',
        'الملفات (أساسيات)',
      ],
    },
    tools: {
      en: ['Python', 'VS Code', 'Google Colab'],
      ar: ['Python', 'VS Code', 'Google Colab'],
    },
    outcomes: {
      en: [
        'Understand core computer/programming concepts',
        'Write simple Python programs confidently',
        'Be ready for Python for Data Analysis',
      ],
      ar: [
        'فهم أساسيات الكمبيوتر والبرمجة',
        'كتابة برامج Python بسيطة بثقة',
        'الاستعداد لكورس Python لتحليل البيانات',
      ],
    },
  },

  {
    slug: 'data-analytics-python',
    title: {
      en: 'Data Analytics with Python',
      ar: 'تحليلات البيانات باستخدام Python',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Use Python for real data analysis: cleaning, exploration, visualization, and reporting using Pandas and NumPy.',
      ar: 'استخدام Python لتحليل بيانات حقيقي: تنظيف، استكشاف، تصوّر، وتقارير باستخدام Pandas وNumPy.',
    },
    whoFor: {
      en: [
        'Learners who finished Python basics',
        'Analysts who want automation beyond Excel',
        'Professionals transitioning into data roles',
      ],
      ar: [
        'من أنهى أساسيات Python',
        'محللو البيانات الذين يريدون أتمتة أكثر من Excel',
        'محترفون ينتقلون لمجال البيانات',
      ],
    },
    learn: {
      en: [
        'Pandas fundamentals: loading, selecting, filtering',
        'Cleaning: missing values, duplicates, types',
        'Grouping and aggregation',
        'Merging datasets',
        'Visualization (Matplotlib)',
        'Mini analysis project + insights report',
      ],
      ar: [
        'أساسيات Pandas: قراءة البيانات، الاختيار، الفلاتر',
        'تنظيف البيانات: القيم الناقصة، التكرار، الأنواع',
        'Grouping والتجميع',
        'دمج datasets',
        'الـ Visualization (Matplotlib)',
        'مشروع صغير وتحليل + تقرير نتائج',
      ],
    },
    tools: {
      en: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter/Colab'],
      ar: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter/Colab'],
    },
    outcomes: {
      en: [
        'Analyze datasets end-to-end using Python',
        'Clean data and produce insights',
        'Build a small portfolio-ready project',
      ],
      ar: [
        'تحليل بيانات End-to-End باستخدام Python',
        'تنظيف البيانات واستخراج insights',
        'مشروع صغير جاهز للـ Portfolio',
      ],
    },
  },

  // باقي كورساتك اللي “مش ضمن الدبلومة” حطيهم هنا زي ما هم
]

/* =========================
   DIPLOMAS
========================= */
export const diplomas: Diploma[] = [
  {
    slug: 'data-analysis-diploma',
    title: {
      en: 'Professional Diploma in Data Analysis',
      ar: 'الدبلومة المهنية في تحليل البيانات',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: {
      en: 'Certificate after completing all included courses',
      ar: 'شهادة بعد إتمام كل كورسات الدبلومة',
    },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'A structured path that builds real data analysis skills using Power BI, SQL, and Python with hands-on projects.',
      ar: 'مسار منظم لبناء مهارات تحليل البيانات باستخدام Power BI وSQL وPython مع تطبيقات ومشاريع عملية.',
    },
    note: {
      en: 'You may enroll in any course as standalone. Completing all diploma courses grants the full diploma certificate.',
      ar: 'يمكنك الالتحاق بأي كورس منفصل. عند إتمام كل كورسات الدبلومة تحصل على شهادة الدبلومة الكاملة.',
    },
    courses: [
      'power-bi-business-intelligence',
      'sql-for-data-analysis-basics',
      'introduction-to-computers-programming-python',
      'data-analytics-python',
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

export function getCourseTitle(course: Course, locale: Locale): string {
  return course.title[locale]
}
