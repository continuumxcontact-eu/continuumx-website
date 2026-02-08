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
  /* -------------------------------------------------
     POWER BI (BEGINNER) - Visualization & Motivation
  -------------------------------------------------- */
  {
    slug: 'power-bi-business-intelligence',
    title: {
      en: 'Power BI Beginner',
      ar: 'Power BI للمبتدئين',
    },
    level: { en: 'Beginner (Zero-friendly)', ar: 'مبتدئ (مناسب للصفر)' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
  
    overview: {
      en: 'A highly practical introduction that starts with what data and data analysis mean in real business contexts, then focuses on visualization and dashboard thinking. Learn how Power BI fits into the BI workflow and build interactive reports—without heavy DAX or complex modeling.',
      ar: 'مقدمة عملية تبدأ بشرح معنى البيانات وتحليل البيانات في سياق الأعمال، ثم تركز على تصور البيانات وطريقة التفكير في الداشبورد. ستتعلم دور Power BI في دورة عمل الـ BI وتبني تقارير تفاعلية—بدون DAX ثقيل أو Modeling معقد.',
    },
  
    whoFor: {
      en: [
        'Absolute beginners who want to understand the big picture of data analytics',
        'Business professionals (HR, Finance, Supply Chain, Marketing, Operations)',
        'Fresh graduates and career starters in data analytics and BI',
      ],
      ar: [
        'مبتدئون تمامًا يريدون فهم الصورة الكاملة لتحليل البيانات',
        'محترفو الأعمال (HR / Finance / Supply Chain / Marketing / Operations)',
        'الخريجون الجدد وبداية المسار المهني في تحليل البيانات وذكاء الأعمال',
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
      ar: [
        'ما هي البيانات وما هو تحليل البيانات ودور أدوات الـ BI',
        'دورة عمل الـ BI: بيانات → تجهيز → مرئيات → رؤى',
        'استيراد البيانات (Excel / CSV) والتحقق من أنواع البيانات',
        'أساسيات Power Query: تنظيف وتحويلات بسيطة',
        'بناء التقارير: Charts وTables وFilters وSlicers (ومقدمة خفيفة للـ Drill-through)',
        'مبادئ تصميم داشبورد واضح ومناسب للإدارة',
        'KPIs ومقاييس بسيطة (DAX أساسي: SUM / COUNT / AVERAGE)',
        'مشروع تطبيقي مُوجّه: أول Dashboard تفاعلي',
      ],
    },
  
    tools: {
      en: ['Power BI Desktop', 'Power Query', 'Light DAX', 'Excel / CSV datasets'],
      ar: ['Power BI Desktop', 'Power Query', 'DAX (خفيف)', 'Datasets Excel / CSV'],
    },
  
    outcomes: {
      en: [
        'Build a complete beginner-level dashboard with interactive filtering',
        'Understand the BI workflow and dashboard thinking',
        'Prepare and visualize data confidently using Power BI',
      ],
      ar: [
        'إنشاء Dashboard كامل للمبتدئين مع فلاتر وتفاعل',
        'فهم دورة عمل الـ BI وطريقة التفكير في الداشبورد',
        'تجهيز البيانات وعرضها بثقة باستخدام Power BI',
      ],
    },
  },
  

  /* -------------------------------------------------
     EXCEL FOR DATA ANALYSIS
  -------------------------------------------------- */
  {
    slug: 'excel-for-data-analysis',
    title: {
      en: 'Excel for Data Analysis',
      ar: 'Excel لتحليل البيانات',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Build strong analysis fundamentals using Excel: clean data, use formulas and PivotTables, and create clear KPI summaries—perfect preparation for SQL and Power BI.',
      ar: 'بناء أساس قوي للتحليل باستخدام Excel: تنظيف البيانات، المعادلات، PivotTables، وملخصات KPIs واضحة—تمهيد ممتاز لـ SQL وPower BI.',
    },
    whoFor: {
      en: [
        'Beginners starting a data analytics career',
        'Business professionals working with spreadsheets daily',
        'Anyone who wants strong foundations before BI/SQL',
      ],
      ar: [
        'المبتدئون الذين يبدأون مسار تحليل البيانات',
        'محترفو الأعمال الذين يتعاملون مع Excel يوميًا',
        'أي شخص يريد أساس قوي قبل BI وSQL',
      ],
    },
    learn: {
      en: [
        'Data structure, types, and common quality issues',
        'Cleaning: duplicates, missing values, formatting, validation rules',
        'Core formulas (IF, XLOOKUP, TEXT, DATE, logical checks)',
        'PivotTables & PivotCharts for fast analysis',
        'Sorting, filtering, έχ conditional formatting for insight discovery',
        'Compact analytical reporting: KPIs, trends, comparisons',
        'Mini project: Excel analysis + one-page summary report',
      ],
      ar: [
        'هيكلة البيانات وأنواعها ومشاكل الجودة الشائعة',
        'تنظيف البيانات: التكرار، القيم الناقصة، التنسيق، قواعد التحقق',
        'معادلات أساسية (IF, XLOOKUP, TEXT, DATE وغيرها)',
        'PivotTables وPivotCharts للتحليل السريع',
        'الفرز والفلاتر وConditional Formatting لاستخراج Insights',
        'تقارير مختصرة: KPIs واتجاهات ومقارنات',
        'مشروع صغير: تحليل Excel + تقرير ملخص صفحة واحدة',
      ],
    },
    tools: {
      en: ['Microsoft Excel', 'Excel templates', 'Business datasets (CSV/Excel)'],
      ar: ['Microsoft Excel', 'Templates Excel', 'Datasets أعمال (CSV/Excel)'],
    },
    outcomes: {
      en: [
        'Clean and structure real datasets in Excel',
        'Produce pivot-based insights and KPI summaries',
        'Be ready for SQL and Power BI Intermediate',
      ],
      ar: [
        'تنظيف وتنظيم بيانات واقعية داخل Excel',
        'استخراج Insights وبناء KPIs باستخدام Pivot',
        'الاستعداد لـ SQL وPower BI (Intermediate)',
      ],
    },
  },

  /* -------------------------------------------------
     SQL FOR DATA ANALYSIS
  -------------------------------------------------- */
  {
    slug: 'sql-for-data-analysis',
    title: {
      en: 'SQL for Data Analysis',
      ar: 'SQL لتحليل البيانات',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Learn SQL the way analysts use it: extract data, validate quality, and answer business questions. Focus is on analytics—not database administration.',
      ar: 'تعلم SQL كما يستخدمه محللو البيانات: استخراج بيانات، التحقق من الجودة، والإجابة على أسئلة الأعمال. التركيز على التحليل—not إدارة قواعد البيانات.',
    },
    whoFor: {
      en: [
        'Learners who want to work with databases confidently',
        'Power BI users who need reliable data extraction',
        'Analysts building reports, dashboards, and KPIs',
      ],
      ar: [
        'من يريد التعامل مع قواعد البيانات بثقة',
        'مستخدمو Power BI الذين يحتاجون لاستخراج بيانات صحيح',
        'محللو البيانات لبناء تقارير وDashboards وKPIs',
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
      ar: [
        'أساسيات البيانات العلائقية: الجداول والمفاتيح والعلاقات',
        'SELECT وWHERE وORDER BY وLIMIT',
        'التجميع: COUNT/SUM/AVG مع GROUP BY وHAVING',
        'Joins (INNER/LEFT) لحالات التحليل الشائعة',
        'دوال التواريخ والنصوص (أنماط عملية)',
        'Subqueries وCTEs (WITH) لكتابة تحليلات منظمة',
        'أنماط تحليل: Top-N، التكرارات، فحوص جودة البيانات',
        'تجهيز بيانات للـ Dashboards والتقارير',
      ],
    },
    tools: {
      en: ['SQL', 'PostgreSQL (recommended)', 'DBeaver / pgAdmin / any SQL client'],
      ar: ['SQL', 'PostgreSQL (مُفضل)', 'DBeaver / pgAdmin / أي SQL client'],
    },
    outcomes: {
      en: [
        'Write correct, readable SQL queries for analysis',
        'Use joins and aggregations to answer business questions',
        'Extract dashboard-ready datasets with confidence',
      ],
      ar: [
        'كتابة استعلامات SQL صحيحة ومنظمة للتحليل',
        'استخدام joins والتجميع للإجابة على أسئلة الأعمال',
        'تجهيز بيانات جاهزة للـ Dashboards بثقة',
      ],
    },
  },

  /* -------------------------------------------------
     POWER BI (INTERMEDIATE)
  -------------------------------------------------- */
  {
    slug: 'power-bi-intermediate',
    title: {
      en: 'Power BI Intermediate',
      ar: 'Power BI مستوى متوسط',
    },
    level: { en: 'Intermediate', ar: 'متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Build professional BI reports: strong data models, practical Power Query transformations, and reliable DAX measures for KPI-driven reporting.',
      ar: 'بناء تقارير BI احترافية: نمذجة بيانات قوية، تحويلات عملية في Power Query، وMeasures موثوقة بـ DAX لتقارير تعتمد على KPIs.',
    },
    whoFor: {
      en: [
        'Learners who completed Power BI Beginner',
        'Anyone with basic Excel/SQL who wants professional dashboards',
        'Analysts who want stronger modeling + DAX skills',
      ],
      ar: [
        'من أنهى Power BI للمبتدئين',
        'من لديه أساس Excel/SQL ويريد Dashboards احترافية',
        'محللو بيانات يريدون Modeling أقوى وDAX عملي',
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
      ar: [
        'Power Query بعمق: merge/append، معالجة الأخطاء، أفضل الممارسات',
        'Data Modeling: العلاقات، Cardinality، اتجاه الفلاتر',
        'مقدمة Star Schema كأساس للفهم',
        'أساسيات DAX: Measures vs Columns، ومبادئ الـ Context',
        'Measures أساسية للـ KPIs (مقدمة CALCULATE، DIVIDE، مقارنات وقت بسيطة)',
        'هيكلة تقرير متعدد الصفحات مع تنقل وتجربة مستخدم موحدة',
        'مشروع عملي: KPI Dashboard على Model نظيف ومنظم',
      ],
    },
    tools: {
      en: ['Power BI Desktop', 'Power Query', 'DAX (foundations)', 'SQL-ready datasets'],
      ar: ['Power BI Desktop', 'Power Query', 'DAX (أساسيات)', 'Datasets جاهزة للـ BI/SQL'],
    },
    outcomes: {
      en: [
        'Build a professional Power BI model and KPI report',
        'Create reliable measures and structured reporting pages',
        'Be ready for Advanced Power BI & Capstone',
      ],
      ar: [
        'بناء نموذج Power BI احترافي وتقرير KPIs',
        'إنشاء Measures موثوقة وبناء صفحات تقارير منظمة',
        'الاستعداد لـ Advanced Power BI & Capstone',
      ],
    },
  },

  /* -------------------------------------------------
     STATISTICS
  -------------------------------------------------- */
  {
    slug: 'statistics-for-data-analysis',
    title: {
      en: 'Statistics for Data Analysis',
      ar: 'الإحصاء لتحليل البيانات',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Practical statistics for analysts: interpret KPIs, understand variability, analyze relationships, and make basic data-driven conclusions.',
      ar: 'إحصاء عملي للمحللين: تفسير KPIs، فهم التشتت، تحليل العلاقات، والوصول لاستنتاجات مبنية على البيانات.',
    },
    whoFor: {
      en: [
        'Learners who want to interpret data beyond charts',
        'Power BI / SQL learners who need stronger reasoning',
        'Professionals who want confidence in analytics decisions',
      ],
      ar: [
        'من يريد فهم البيانات بشكل أعمق من الرسوم',
        'دارسو Power BI وSQL الذين يحتاجون تفسيرًا منطقيًا للأرقام',
        'محترفون يريدون الثقة في القرارات التحليلية',
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
      ar: [
        'الإحصاء الوصفي: المتوسط/الوسيط، التباين، الانحراف المعياري',
        'الاحتمالات والتوزيعات (بشكل عملي للمحلل)',
        'فكرة العينات ولماذا تهم في التقارير',
        'الارتباط: تفسيره وتجنب الأخطاء الشائعة',
        'مقدمة في الانحدار البسيط (مفهوم وتفسير)',
        'فهم اختبار الفرضيات (p-value والثقة والمعنى العملي)',
        'مقارنات KPIs بين الفترات وفهم الضوضاء في البيانات',
      ],
    },
    tools: {
      en: ['Excel (for calculations)', 'Power BI (for KPI context examples)', 'Simple datasets'],
      ar: ['Excel (للحسابات)', 'Power BI (أمثلة KPIs)', 'Datasets بسيطة'],
    },
    outcomes: {
      en: [
        'Interpret KPIs with statistical reasoning',
        'Explain variability and relationships clearly',
        'Make more confident, data-driven conclusions',
      ],
      ar: [
        'تفسير KPIs بمنطق إحصائي',
        'شرح التشتت والعلاقات بشكل واضح',
        'اتخاذ استنتاجات مبنية على البيانات بثقة',
      ],
    },
  },

  /* -------------------------------------------------
     PYTHON BASICS
  -------------------------------------------------- */
  {
    slug: 'python-basics-for-analysts',
    title: {
      en: 'Python Basics for Analysts',
      ar: 'أساسيات Python للمحللين',
    },
    level: { en: 'Absolute Beginner', ar: 'مبتدئ تمامًا' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Start from zero and learn programming fundamentals with Python. Focus on problem-solving and clean code to prepare for Python-based data analysis.',
      ar: 'ابدأ من الصفر وتعلم أساسيات البرمجة بـ Python. يركز الكورس على حل المشكلات وكتابة كود واضح تمهيدًا لتحليل البيانات بالبرمجة.',
    },
    whoFor: {
      en: [
        'Absolute beginners with no programming background',
        'Career shifters and non-technical professionals',
        'Learners preparing for Data Analytics with Python',
      ],
      ar: [
        'مبتدئون تمامًا بدون خلفية برمجية',
        'من يغير مساره المهني أو خلفيته غير تقنية',
        'من يستعد لكورس تحليل البيانات باستخدام Python',
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
      ar: [
        'كيف يعمل البرنامج: Input → Processing → Output',
        'المتغيرات وأنواع البيانات والعمليات وDebugging بسيط',
        'الشروط والحلقات (أنماط عملية)',
        'الدوال وكتابة كود قابل لإعادة الاستخدام',
        'Lists وDictionaries والتعامل مع بيانات منظمة',
        'قراءة وكتابة ملفات (أساسيات CSV)',
        'تمارين صغيرة تبني طريقة تفكير المحلل',
      ],
    },
    tools: {
      en: ['Python', 'VS Code', 'Google Colab'],
      ar: ['Python', 'VS Code', 'Google Colab'],
    },
    outcomes: {
      en: [
        'Write clean Python code for small tasks and logic problems',
        'Understand core programming concepts confidently',
        'Be ready for Data Analytics with Python (Pandas/NumPy)',
      ],
      ar: [
        'كتابة كود Python واضح لمهام منطقية بسيطة',
        'فهم أساسيات البرمجة بثقة',
        'الاستعداد لكورس تحليل البيانات باستخدام Python (Pandas/NumPy)',
      ],
    },
  },

  /* -------------------------------------------------
     DATA ANALYTICS WITH PYTHON
  -------------------------------------------------- */
  {
    slug: 'data-analytics-python',
    title: {
      en: 'Data Analytics with Python',
      ar: 'تحليل البيانات بـ Python',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Analyze real datasets end-to-end using Python. Clean, explore, and visualize data with Pandas and NumPy, then communicate insights in a clear reporting style.',
      ar: 'تحليل بيانات واقعية End-to-End باستخدام Python. تنظيف واستكشاف وعرض البيانات بـ Pandas وNumPy ثم تقديم Insights في تقرير واضح.',
    },
    whoFor: {
      en: [
        'Learners who completed Python Basics for Analysts',
        'Analysts who want automation beyond Excel',
        'Professionals transitioning into data roles',
      ],
      ar: [
        'من أنهى أساسيات Python للمحللين',
        'محللو البيانات الذين يريدون أتمتة أكثر من Excel',
        'محترفون ينتقلون لمجال البيانات',
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
      ar: [
        'أساسيات Pandas: قراءة البيانات، الاختيار، الفلاتر، التحويلات',
        'تنظيف البيانات: القيم الناقصة، التكرار، الأنواع، Outliers (مقدمة)',
        'Grouping والتجميع للإجابة على أسئلة الأعمال',
        'دمج datasets وتجهيز جداول جاهزة للتحليل',
        'الـ Visualization (Matplotlib) وسرد القصة من البيانات',
        'منهجية EDA: سؤال → استكشاف → تحقق → استنتاج',
        'مشروع Portfolio: تحليل + تقرير Insights',
      ],
    },
    tools: {
      en: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter/Colab'],
      ar: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter/Colab'],
    },
    outcomes: {
      en: [
        'Perform end-to-end EDA on real datasets',
        'Clean and transform data efficiently',
        'Deliver a portfolio-ready analysis project',
      ],
      ar: [
        'تنفيذ EDA كامل على بيانات واقعية',
        'تنظيف وتحويل البيانات بكفاءة',
        'مشروع جاهز للـ Portfolio',
      ],
    },
  },

  /* -------------------------------------------------
     POWER BI (ADVANCED) - Capstone Integration
  -------------------------------------------------- */
  {
    slug: 'power-bi-advanced-capstone',
    title: {
      en: 'Power BI Advanced & Capstone',
      ar: 'Power BI متقدم + Capstone',
    },
    level: { en: 'Advanced', ar: 'متقدم' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'A capstone-style advanced course that integrates the diploma skills. Build a production-ready BI solution with advanced DAX, optimized performance, and a portfolio-grade final dashboard.',
      ar: 'كورس متقدم بنظام Capstone يدمج مهارات الدبلومة. ستبني حل BI جاهز للاستخدام بـ DAX متقدم وتحسين أداء وDashboard نهائي قوي للـ Portfolio.',
    },
    whoFor: {
      en: [
        'Learners who completed Power BI Intermediate',
        'Analysts aiming for senior-level BI reporting skills',
        'Professionals building a public portfolio (LinkedIn/GitHub)',
      ],
      ar: [
        'من أنهى Power BI (المستوى المتوسط)',
        'محللو بيانات يستهدفون مستوى أعلى في BI',
        'من يريد بناء Portfolio قوي (LinkedIn/GitHub)',
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
      ar: [
        'Modeling متقدم: أنماط Star Schema وRole-playing dimensions بشكل عملي',
        'DAX متقدم: فهم الـ Context بعمق، أنماط CALCULATE، ودوال Iterators (X)',
        'Time intelligence لمقارنات KPIs بذكاء',
        'تحسين الأداء: حجم الموديل، تحسين DAX، Performance Analyzer',
        'Power Query متقدم: تحويلات قوية وفهم Query Folding عمليًا',
        'UX تنفيذي: Storytelling، تنقل، اتساق',
        'مشروع تخرّج: SQL استخراج → تحويل → Modeling → Measures → Dashboard نهائي → عرض Insights',
      ],
    },
    tools: {
      en: ['Power BI Desktop', 'DAX (advanced)', 'Power Query (advanced)', 'SQL datasets', 'Performance Analyzer'],
      ar: ['Power BI Desktop', 'DAX (متقدم)', 'Power Query (متقدم)', 'Datasets SQL', 'Performance Analyzer'],
    },
    outcomes: {
      en: [
        'Deliver a production-ready BI solution with advanced measures and optimized performance',
        'Present insights professionally to stakeholders',
        'Graduate with a portfolio-grade capstone dashboard',
      ],
      ar: [
        'تسليم حل BI جاهز للاستخدام بمقاييس متقدمة وأداء محسن',
        'عرض Insights باحتراف أمام الإدارة وأصحاب المصلحة',
        'التخرج بمشروع Dashboard قوي للـ Portfolio',
      ],
    },
  },

  {
    slug: 'introduction-to-ai',
    title: {
      en: 'Introduction to Artificial Intelligence',
      ar: 'مقدمة في الذكاء الاصطناعي',
    },
    level: {
      en: 'Beginner (Non-technical)',
      ar: 'مبتدئ (غير تقني)',
    },
    duration: {
      en: '',
      ar: '',
    },
    format: {
      en: '',
      ar: '',
    },
    overview: {
      en: 'Comming soon.',
      ar: '',
    },
    whoFor: {
      en: [
        'Absolute beginners curious about AI',
        'Business professionals and decision-makers',
        'Students exploring AI before technical learning',
      ],
      ar: [
        'مبتدئون تمامًا مهتمون بالذكاء الاصطناعي',
        'محترفو الأعمال وصناع القرار',
        'طلاب يريدون فهم AI قبل التعمق التقني',
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
      ar: [
        'ما هو الذكاء الاصطناعي فعليًا',
        'الفرق بين AI وData Analytics وMachine Learning',
        'تطبيقات الذكاء الاصطناعي في الواقع',
        'مصطلحات ومفاهيم أساسية في AI',
        'أخلاقيات الذكاء الاصطناعي وحدوده',
      ],
    },
    tools: {
      en: ['Case studies', 'Videos', 'Interactive discussions'],
      ar: ['دراسات حالة', 'فيديوهات', 'مناقشات تفاعلية'],
    },
    outcomes: {
      en: [
        'Understand AI concepts clearly without coding',
        'Make informed decisions when working with AI teams',
        'Know whether to pursue technical AI learning next',
      ],
      ar: [
        'فهم واضح لمفاهيم الذكاء الاصطناعي بدون برمجة',
        'القدرة على اتخاذ قرارات واعية عند العمل مع فرق AI',
        'تحديد الخطوة التالية في تعلم الذكاء الاصطناعي',
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
    level: { en: 'Zero → Advanced', ar: 'من الصفر → متقدم' },
    duration: {
      en: '240 hours (8 courses × 30 hours) + Diploma Certificate upon completion',
      ar: '240 ساعة (8 كورسات × 30 ساعة) + شهادة الدبلومة عند الإتمام',
    },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'A structured, job-oriented path designed for learners starting from zero. Build real analytics skills across Excel, SQL, Statistics, Python, and Power BI—ending with an advanced capstone project and a portfolio-ready dashboard.',
      ar: 'مسار منظم وموجه لسوق العمل ومناسب لبدء التعلم من الصفر. تبني الدبلومة مهارات تحليل حقيقية عبر Excel وSQL والإحصاء وPython وPower BI—وتنتهي بمشروع تخرّج متقدم وDashboard جاهز للـ Portfolio.',
    },
    note: {
      en: 'Each course can be taken as a standalone micro-credential. The recommended order ensures smooth progression from zero knowledge to advanced capability. Completing all included courses (and the capstone) grants the full diploma certificate.',
      ar: 'يمكن دراسة أي كورس كـ Micro-credential مستقل. الترتيب المقترح يضمن انتقالًا سلسًا من الصفر إلى مستوى متقدم. عند إتمام جميع كورسات الدبلومة (ومشروع التخرج) تحصل على شهادة الدبلومة الكاملة.',
    },
    courses: [
      // 1) Motivation / Visualization first
      'power-bi-business-intelligence',

      // 2) Foundations
      'excel-for-data-analysis',

      // 3) Data access
      'sql-for-data-analysis',

      // 4) Build professional BI
      'power-bi-intermediate',

      // 5) Reasoning & interpretation
      'statistics-for-data-analysis',

      // 6) Programming foundations
      'python-basics-for-analysts',

      // 7) Python analytics
      'data-analytics-python',

      // 8) Advanced integration & capstone
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

export function getCourseTitle(course: Course, locale: Locale): string {
  return course.title[locale]
}
