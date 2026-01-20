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
      en: 'Power BI Beginner: Data Visualization & Interactive Dashboards',
      ar: 'Power BI للمبتدئين: تصور البيانات ولوحات تفاعلية',
    },
    level: { en: 'Beginner (Zero-friendly)', ar: 'مبتدئ (مناسب للصفر)' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'A beginner-friendly, highly practical introduction to Power BI focused on visualization and dashboard thinking. Learners explore real datasets, build interactive reports, and understand the end-to-end BI workflow—without heavy DAX or complex modeling.',
      ar: 'مقدمة عملية جدًا في Power BI تركّز على فهم التصور ولوحات المعلومات. ستتعلم استكشاف بيانات واقعية وبناء تقارير تفاعلية وفهم دورة عمل الـ BI بالكامل—بدون تعقيد في DAX أو Modeling متقدم.',
    },
    whoFor: {
      en: [
        'Absolute beginners who want to “see the big picture” of data analytics',
        'Business professionals (HR, Finance, Supply Chain, Marketing, Operations)',
        'Fresh graduates and career starters in data analytics and BI',
      ],
      ar: [
        'مبتدئون تمامًا يريدون فهم الصورة الكبيرة لتحليل البيانات',
        'محترفو الأعمال (HR/Finance/Supply Chain/Marketing/Operations)',
        'الخريجون الجدد وبداية المسار المهني في تحليل البيانات وBI',
      ],
    },
    learn: {
      en: [
        'How BI works: data → preparation → visuals → insights',
        'Import datasets (Excel/CSV) and validate data types',
        'Power Query essentials: cleaning & simple transformations',
        'Report building: charts, tables, filters, slicers, drill-through (intro)',
        'Design principles for clear, executive-friendly dashboards',
        'Basic measures and KPIs (light DAX: SUM/COUNT/AVERAGE)',
        'A guided mini project: build your first interactive dashboard',
      ],
      ar: [
        'فهم دورة الـ BI: بيانات → تجهيز → مرئيات → رؤى',
        'استيراد البيانات (Excel/CSV) وفهم أنواع البيانات',
        'أساسيات Power Query: تنظيف وتحويلات بسيطة',
        'بناء التقارير: Charts وTables وFilters وSlicers وDrill-through (مقدمة)',
        'مبادئ تصميم Dashboards واضحة واحترافية',
        'مقاييس وKPIs بسيطة (DAX خفيف: SUM/COUNT/AVERAGE)',
        'مشروع صغير مُوجّه: أول Dashboard تفاعلي',
      ],
    },
    tools: {
      en: ['Power BI Desktop', 'Power Query', 'Light DAX', 'Excel/CSV datasets'],
      ar: ['Power BI Desktop', 'Power Query', 'DAX (خفيف)', 'Datasets Excel/CSV'],
    },
    outcomes: {
      en: [
        'Build a complete beginner dashboard with interactive filtering',
        'Understand BI workflow and dashboard thinking',
        'Prepare and visualize data confidently in Power BI',
      ],
      ar: [
        'إنشاء Dashboard كامل للمبتدئين مع تفاعل وفلاتر',
        'فهم دورة عمل الـ BI وطريقة التفكير في الـ Dashboards',
        'تجهيز البيانات وعرضها بثقة داخل Power BI',
      ],
    },
  },

  /* -------------------------------------------------
     EXCEL FOR DATA ANALYSIS
  -------------------------------------------------- */
  {
    slug: 'excel-for-data-analysis',
    title: {
      en: 'Excel for Data Analysis: Cleaning, Pivoting, and Reporting',
      ar: 'Excel لتحليل البيانات: تنظيف وPivot وتقارير',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'A hands-on course that builds strong analysis fundamentals using Excel. Learners clean data, use formulas and PivotTables, and create clear analytical summaries—forming the perfect foundation before SQL and Power BI modeling.',
      ar: 'كورس عملي يضع أساس قوي للتحليل باستخدام Excel. ستتعلم تنظيف البيانات، واستخدام المعادلات وPivotTables، وبناء ملخصات تحليلية واضحة—كأساس مثالي قبل SQL وPower BI المتقدم.',
    },
    whoFor: {
      en: [
        'Beginners starting a data analytics career',
        'Business professionals who work with spreadsheets daily',
        'Anyone who wants strong foundations before BI/SQL',
      ],
      ar: [
        'المبتدئون الذين يبدأون مسار تحليل البيانات',
        'محترفو الأعمال الذين يتعاملون مع ملفات Excel يوميًا',
        'أي شخص يريد أساس قوي قبل BI وSQL',
      ],
    },
    learn: {
      en: [
        'Data types, structure, and common quality issues',
        'Data cleaning: duplicates, missing values, formatting, validation',
        'Core formulas for analysis (IF, XLOOKUP, TEXT, DATE, logical checks)',
        'PivotTables & PivotCharts for fast analysis',
        'Sorting, filtering, conditional formatting for insight discovery',
        'Building a compact analytical report with business KPIs',
        'Mini project: Excel analysis + summary dashboard sheet',
      ],
      ar: [
        'أنواع البيانات وبنيتها ومشاكل الجودة الشائعة',
        'تنظيف البيانات: التكرار، القيم الناقصة، التنسيقات، التحقق',
        'معادلات أساسية للتحليل (IF, XLOOKUP, TEXT, DATE وغيرها)',
        'PivotTables وPivotCharts للتحليل السريع',
        'الفرز والفلاتر وConditional Formatting لاكتشاف Insights',
        'بناء تقرير تحليلي مختصر مع KPIs للأعمال',
        'مشروع صغير: تحليل Excel + صفحة ملخص Dashboard',
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
        'Be fully ready for SQL and Power BI Intermediate',
      ],
      ar: [
        'تنظيف وتنظيم بيانات واقعية داخل Excel',
        'استخراج Insights وبناء KPIs باستخدام Pivot',
        'الاستعداد الكامل لـ SQL وPower BI (Intermediate)',
      ],
    },
  },

  /* -------------------------------------------------
     SQL FOR DATA ANALYSIS (BASICS → PRACTICAL)
  -------------------------------------------------- */
  {
    slug: 'sql-for-data-analysis',
    title: {
      en: 'SQL for Data Analysis: Querying, Joins, and Analytics Patterns',
      ar: 'SQL لتحليل البيانات: الاستعلامات وJoins وأنماط التحليل',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Learn SQL the way analysts use it: extracting data, validating quality, and answering business questions. Focus is on analytics—not database administration.',
      ar: 'تعلم SQL بالطريقة التي يستخدمها محللو البيانات: استخراج البيانات، التحقق من الجودة، والإجابة على أسئلة الأعمال. التركيز على التحليل—not إدارة قواعد البيانات.',
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
        'Relational data basics: tables, keys, and relationships',
        'SELECT, WHERE, ORDER BY, LIMIT',
        'Aggregations: COUNT/SUM/AVG + GROUP BY + HAVING',
        'Joins (INNER/LEFT) for analysis use-cases',
        'Working with dates and text (practical functions)',
        'Subqueries and CTEs (WITH) for readable analytics',
        'Analytics patterns: top-N, cohorts (intro), duplicates, data checks',
        'Exporting/querying data for BI dashboards',
      ],
      ar: [
        'أساسيات البيانات العلائقية: الجداول والمفاتيح والعلاقات',
        'SELECT وWHERE وORDER BY وLIMIT',
        'التجميع: COUNT/SUM/AVG مع GROUP BY وHAVING',
        'Joins (INNER/LEFT) لحالات التحليل الشائعة',
        'التعامل مع التواريخ والنصوص (دوال عملية)',
        'Subqueries وCTEs (WITH) لكتابة تحليلات منظمة',
        'أنماط تحليل: Top-N، Cohort (مقدمة)، التكرارات، فحوص الجودة',
        'تجهيز البيانات لتغذية Dashboards وReports',
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
     POWER BI (INTERMEDIATE) - Modeling & DAX Foundations
  -------------------------------------------------- */
  {
    slug: 'power-bi-intermediate',
    title: {
      en: 'Power BI Intermediate: Data Modeling, Power Query, and DAX Foundations',
      ar: 'Power BI متوسط: نمذجة البيانات وPower Query وDAX (أساسيات متقدمة)',
    },
    level: { en: 'Intermediate', ar: 'متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Move beyond basic dashboards into professional BI building. Learners build solid data models, apply practical Power Query transformations, and create reliable DAX measures for KPI-driven reporting.',
      ar: 'الانتقال من Dashboards الأساسية إلى بناء BI احترافي. ستتعلم بناء نموذج بيانات قوي، وتطبيق تحويلات عملية في Power Query، وإنشاء Measures قوية بـ DAX لتقارير تعتمد على KPIs.',
    },
    whoFor: {
      en: [
        'Learners who completed Power BI Beginner',
        'Anyone who knows basic Excel and needs professional dashboards',
        'Analysts who want stronger modeling + DAX skills',
      ],
      ar: [
        'من أنهى Power BI للمبتدئين',
        'من لديه أساس Excel ويريد Dashboards احترافية',
        'محللو بيانات يريدون Modeling أقوى وDAX عملي',
      ],
    },
    learn: {
      en: [
        'Power Query deeper skills: merge/append, error handling, best practices',
        'Data modeling: relationships, cardinality, filter direction',
        'Intro to star schema (conceptual foundation)',
        'DAX foundations: measures vs columns, context basics',
        'Core DAX patterns for KPIs (CALCULATE intro, DIVIDE, time basics)',
        'Building multi-page reports with drill-down and consistent UX',
        'Practical project: KPI dashboard powered by SQL-ready dataset',
      ],
      ar: [
        'مهارات أعمق في Power Query: دمج/إلحاق، معالجة الأخطاء، أفضل الممارسات',
        'Data Modeling: العلاقات، Cardinality، اتجاه الفلاتر',
        'مقدمة Star Schema كأساس للفهم',
        'أساسيات DAX: الفرق بين Measures وColumns، مبادئ الـ Context',
        'أنماط DAX لعمل KPIs (مقدمة CALCULATE، DIVIDE، أساسيات الوقت)',
        'بناء تقارير متعددة الصفحات مع Drill-down وتجربة مستخدم موحدة',
        'مشروع عملي: KPI Dashboard يعتمد على Dataset جاهز للـ BI/SQL',
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
     STATISTICS FOR DATA ANALYSIS
  -------------------------------------------------- */
  {
    slug: 'statistics-for-data-analysis',
    title: {
      en: 'Statistics for Data Analysis: From Descriptive Metrics to Decision Making',
      ar: 'الإحصاء لتحليل البيانات: من الوصف إلى اتخاذ القرار',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'A practical statistics course designed for analysts. Learners build statistical intuition to interpret KPIs, measure variability, analyze relationships, and make basic data-driven conclusions.',
      ar: 'كورس إحصاء عملي موجه لمحللي البيانات. ستبني فهمًا إحصائيًا لتفسير KPIs، وقياس التشتت، وتحليل العلاقات، والوصول لاستنتاجات مبنية على البيانات.',
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
        'Distributions & probability basics (analyst-focused)',
        'Sampling intuition and why it matters in reporting',
        'Correlation and interpretation (common pitfalls)',
        'Intro to simple regression (concept + interpretation)',
        'Basic hypothesis testing concepts (p-value intuition, not heavy math)',
        'Statistics for KPIs: comparing periods and understanding noise',
      ],
      ar: [
        'إحصاء وصفي: المتوسط/الوسيط، التباين، الانحراف المعياري',
        'التوزيعات والاحتمالات (بشكل عملي للمحلل)',
        'فكرة العينات ولماذا تهم في التقارير',
        'الارتباط وكيفية تفسيره وتجنب الأخطاء الشائعة',
        'مقدمة في الانحدار البسيط (مفهوم وتفسير)',
        'مفاهيم اختبار الفرضيات (فكرة p-value بدون تعقيد)',
        'إحصاء الـ KPIs: مقارنة الفترات وفهم الضوضاء في البيانات',
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
     PYTHON BASICS (ZERO → READY)
  -------------------------------------------------- */
  {
    slug: 'python-basics-for-analysts',
    title: {
      en: 'Python Basics for Data Analysts: Programming Fundamentals',
      ar: 'أساسيات Python لمحللي البيانات: مبادئ البرمجة',
    },
    level: { en: 'Absolute Beginner', ar: 'مبتدئ تمامًا' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Start from zero and learn programming fundamentals with Python. This course focuses on problem-solving and writing clean, simple code that prepares you for Python-based data analysis.',
      ar: 'ابدأ من الصفر وتعلم أساسيات البرمجة باستخدام Python. يركز الكورس على التفكير المنطقي وحل المشكلات وكتابة كود بسيط وواضح يمهّد لتحليل البيانات بالبرمجة.',
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
        'Variables, data types, operators, and basic debugging',
        'Conditionals and loops (practical patterns)',
        'Functions and writing reusable code',
        'Lists, dictionaries, and working with structured data',
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
      en: 'Data Analytics with Python: Pandas, NumPy, and Practical EDA',
      ar: 'تحليل البيانات باستخدام Python: Pandas وNumPy وEDA عملي',
    },
    level: { en: 'Beginner → Intermediate', ar: 'مبتدئ → متوسط' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'Analyze real datasets end-to-end using Python. Learners clean, explore, and visualize data with Pandas and NumPy, then communicate insights in a clear reporting style.',
      ar: 'تحليل بيانات واقعية End-to-End باستخدام Python. ستتعلم تنظيف البيانات واستكشافها وعرضها باستخدام Pandas وNumPy ثم تقديم Insights في شكل تقرير واضح.',
    },
    whoFor: {
      en: [
        'Learners who completed Python Basics for Analysts',
        'Analysts who want automation beyond Excel',
        'Professionals transitioning into data roles',
      ],
      ar: [
        'من أنهى كورس أساسيات Python للمحللين',
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
      en: 'Power BI Advanced & Capstone: DAX, Performance, and End-to-End BI Delivery',
      ar: 'Power BI متقدم + مشروع تخرّج: DAX وPerformance وحل BI متكامل',
    },
    level: { en: 'Advanced', ar: 'متقدم' },
    duration: { en: '30 hours', ar: '30 ساعة' },
    format: { en: 'Online/Hybrid', ar: 'أونلاين/مختلط' },
    overview: {
      en: 'A capstone-style advanced course that integrates everything learned across the diploma. Learners build a production-ready BI solution: strong modeling, advanced DAX, optimized performance, and a final portfolio dashboard backed by real business storytelling.',
      ar: 'كورس متقدم بنظام Capstone يدمج كل ما تم تعلمه في الدبلومة. ستبني حل BI جاهز للاستخدام: Modeling قوي، DAX متقدم، تحسين الأداء، وDashboard نهائي للـ Portfolio مع Storytelling احترافي.',
    },
    whoFor: {
      en: [
        'Learners who completed Power BI Intermediate',
        'Analysts aiming for senior-level BI reporting skills',
        'Professionals building a public portfolio (LinkedIn/GitHub)',
      ],
      ar: [
        'من أنهى Power BI Intermediate',
        'محللو بيانات يستهدفون مستوى أعلى في BI',
        'من يريد بناء Portfolio قوي (LinkedIn/GitHub)',
      ],
    },
    learn: {
      en: [
        'Advanced data modeling: star schema patterns, role-playing dimensions (practical)',
        'Advanced DAX: context mastery, CALCULATE patterns, iterators (X functions)',
        'Time intelligence patterns (practical KPI comparisons)',
        'Performance optimization: model size, DAX optimization, Performance Analyzer',
        'Advanced Power Query: best practices, folding awareness, robust transformations',
        'Executive dashboard UX: storytelling, navigation, consistency, accessibility',
        'Capstone delivery: SQL extraction + transformation + modeling + measures + final dashboard + insights presentation',
      ],
      ar: [
        'نمذجة بيانات متقدمة: أنماط Star Schema وRole-playing dimensions (عملي)',
        'DAX متقدم: فهم الـ Context بعمق، أنماط CALCULATE، ودوال Iterators (X)',
        'Time intelligence patterns لمقارنات KPIs بذكاء',
        'تحسين الأداء: حجم الموديل، تحسين DAX، Performance Analyzer',
        'Power Query متقدم: أفضل الممارسات، فهم Query Folding بشكل عملي',
        'UX للـ Dashboards التنفيذية: Storytelling، تنقل، اتساق، وإتاحة',
        'مشروع تخرّج متكامل: SQL استخراج + تحويل + Modeling + Measures + Dashboard نهائي + عرض Insights',
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
      en: 'A structured, job-oriented path designed for learners starting from zero. The diploma builds real analytics skills across Excel, SQL, Statistics, Python, and Power BI—ending with an advanced capstone project and a portfolio-ready dashboard.',
      ar: 'مسار منظم وموجّه لسوق العمل ومناسب لبدء التعلم من الصفر. تبني الدبلومة مهارات تحليل حقيقية عبر Excel وSQL والإحصاء وPython وPower BI—وتنتهي بمشروع تخرّج متقدم وDashboard جاهز للـ Portfolio.',
    },
    note: {
      en: 'Each course can be taken as a standalone micro-credential. The recommended order is designed to ensure smooth progression from zero knowledge to advanced capability. Completing all included courses (and the capstone) grants the full diploma certificate.',
      ar: 'يمكن دراسة أي كورس كـ Micro-credential مستقل. الترتيب المقترح مصمم لضمان انتقال سلس من الصفر إلى مستوى متقدم. عند إتمام جميع كورسات الدبلومة (ومشروع التخرج) تحصل على شهادة الدبلومة الكاملة.',
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
