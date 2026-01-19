import { Locale } from './i18n'

export interface Course {
  slug: string
  title: {
    en: string
    ar: string
  }
  level: {
    en: string
    ar: string
  }
  duration: {
    en: string
    ar: string
  }
  format: {
    en: string
    ar: string
  }
  overview: {
    en: string
    ar: string
  }
  whoFor: {
    en: string[]
    ar: string[]
  }
  learn: {
    en: string[]
    ar: string[]
  }
  tools: {
    en: string[]
    ar: string[]
  }
  outcomes: {
    en: string[]
    ar: string[]
  }
}

export const courses: Course[] = [
  
  {
    slug: 'data-analytics-python',
    title: {
      en: 'Data Analytics with Python',
      ar: 'تحليلات البيانات باستخدام Python',
    },
    level: {
      en: 'Beginner → Intermediate',
      ar: 'مبتدئ → متوسط',
    },
    duration: {
      en: '30 hours',
      ar: '30 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'Master the fundamentals of data analytics using Python. Learn to manipulate, analyze, and visualize data to extract meaningful insights for business decision-making.',
      ar: 'أتقن أساسيات تحليلات البيانات باستخدام Python. تعلم معالجة وتحليل وتصور البيانات لاستخراج رؤى ذات معنى لاتخاذ القرارات التجارية.',
    },
    whoFor: {
      en: [
        'Beginners with basic programming knowledge',
        'Business analysts looking to enhance their skills',
        'Professionals transitioning to data roles',
      ],
      ar: [
        'المبتدئون الذين لديهم معرفة أساسية بالبرمجة',
        'محللو الأعمال الذين يتطلعون إلى تحسين مهاراتهم',
        'المهنيون الذين ينتقلون إلى أدوار البيانات',
      ],
    },
    learn: {
      en: [
        'Python fundamentals for data analysis',
        'Data manipulation with Pandas and NumPy',
        'Data visualization with Matplotlib and Seaborn',
        'Statistical analysis and hypothesis testing',
        'Working with real-world datasets',
      ],
      ar: [
        'أساسيات Python لتحليل البيانات',
        'معالجة البيانات باستخدام Pandas و NumPy',
        'تصور البيانات باستخدام Matplotlib و Seaborn',
        'التحليل الإحصائي واختبار الفرضيات',
        'العمل مع مجموعات البيانات الواقعية',
      ],
    },
    tools: {
      en: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
      ar: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    },
    outcomes: {
      en: [
        'Proficient in Python for data analysis',
        'Ability to clean and prepare datasets',
        'Create compelling data visualizations',
        'Perform statistical analysis',
        'Build data-driven reports',
      ],
      ar: [
        'الإتقان في Python لتحليل البيانات',
        'القدرة على تنظيف وإعداد مجموعات البيانات',
        'إنشاء تصورات بيانات مقنعة',
        'إجراء التحليل الإحصائي',
        'بناء تقارير مدعومة بالبيانات',
      ],
    },
  },

  // ✅ UPDATED COURSE (keep slug to avoid breaking links)
  {
    slug: 'power-bi-business-intelligence',
    title: {
      en: 'Power BI Fundamentals: From Data to Interactive Dashboards',
      ar: 'أساسيات Power BI: من البيانات إلى لوحات تفاعلية',
    },
    level: {
      en: 'Beginner',
      ar: 'مبتدئ',
    },
    duration: {
      en: '30 hours',
      ar: '30 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'A practical beginner course that teaches you how to import, clean, model, and visualize data using Microsoft Power BI. You will build interactive dashboards and learn to answer real business questions—no programming required.',
      ar: 'كورس عملي للمبتدئين يعلّمك استيراد البيانات وتنظيفها وبناء نموذج بيانات وعرضها باستخدام Microsoft Power BI. ستبني لوحات تفاعلية وتتعلم الإجابة عن أسئلة أعمال واقعية—بدون برمجة.',
    },
    whoFor: {
      en: [
        'Fresh graduates and career starters in data analytics',
        'Business professionals (HR, Finance, Supply Chain, Marketing, Operations)',
        'Anyone who wants to build dashboards and understand data with no technical background',
        'Professionals who work with Excel and want a modern reporting tool',
      ],
      ar: [
        'الخريجون الجدد وبداية المسار في تحليل البيانات',
        'محترفو الأعمال: HR والمالية وسلاسل الإمداد والتسويق والعمليات',
        'أي شخص يريد فهم البيانات وبناء Dashboards بدون خلفية تقنية',
        'كل من يعمل على Excel ويريد أداة تقارير حديثة واحترافية',
      ],
    },
    learn: {
      en: [
        'Understand the BI workflow: from raw data to insights and decisions',
        'Navigate Power BI Desktop confidently (Report / Data / Model views)',
        'Import data from Excel/CSV and validate data types',
        'Clean and transform data using Power Query (remove duplicates, handle missing values, split/merge columns, filters)',
        'Build a simple and correct data model (fact vs dimension basics, relationships)',
        'Create beginner-friendly DAX measures (SUM, COUNT, AVERAGE) and simple KPIs',
        'Build interactive visuals (charts, tables, slicers) with proper filtering',
        'Apply dashboard design basics (layout, readability, KPI placement, storytelling)',
        'Build a mini end-to-end dashboard project (Sales/HR/Finance scenario)',
      ],
      ar: [
        'فهم دورة عمل ذكاء الأعمال: من البيانات الخام إلى الرؤى واتخاذ القرار',
        'التعامل مع Power BI Desktop بثقة (Report / Data / Model)',
        'استيراد البيانات من Excel/CSV وفهم أنواع البيانات والتحقق منها',
        'تنظيف وتحويل البيانات باستخدام Power Query (إزالة التكرار، القيم الناقصة، تقسيم/دمج الأعمدة، الفلاتر)',
        'بناء نموذج بيانات بسيط وصحيح (أساسيات Fact/Dimension وإنشاء العلاقات)',
        'إنشاء Measures في DAX للمبتدئين (SUM/COUNT/AVERAGE) وKPIs بسيطة',
        'بناء مرئيات تفاعلية (Charts/Tables/Slicers) وفلاتر بشكل صحيح',
        'أساسيات تصميم الداشبورد (تنظيم، وضوح، توزيع KPIs، Data Storytelling)',
        'تنفيذ مشروع صغير End-to-End (سيناريو Sales/HR/Finance)',
      ],
    },
    tools: {
      en: [
        'Microsoft Power BI Desktop',
        'Power Query (Data Transformation)',
        'Basic DAX (Measures & KPIs)',
        'Data Modeling (Relationships)',
        'Excel/CSV Datasets',
      ],
      ar: [
        'Microsoft Power BI Desktop',
        'Power Query (تحويل وتنظيف البيانات)',
        'DAX (أساسيات الـ Measures والـ KPIs)',
        'Data Modeling (العلاقات بين الجداول)',
        'Datasets بصيغة Excel/CSV',
      ],
    },
    outcomes: {
      en: [
        'Build an interactive dashboard from a real dataset',
        'Prepare and clean data correctly inside Power BI (Power Query)',
        'Create a correct data model and relationships',
        'Create meaningful KPIs and answer business questions using visuals',
        'Gain a portfolio-ready beginner project and be ready for Excel, Statistics, SQL, and Advanced Power BI',
      ],
      ar: [
        'بناء Dashboard تفاعلي من بيانات واقعية',
        'تنظيف وتجهيز البيانات بشكل صحيح داخل Power BI (Power Query)',
        'بناء نموذج بيانات صحيح وإنشاء العلاقات بين الجداول',
        'إنشاء KPIs مفيدة والإجابة عن أسئلة الأعمال باستخدام المرئيات',
        'مشروع جاهز للعرض في Portfolio والاستعداد لمسارات Excel والإحصاء وSQL وPower BI Advanced',
      ],
    },
  },
  {
    slug: 'sql-for-data-analysis-basics',
    title: {
      en: 'SQL for Data Analysis (Basics)',
      ar: 'SQL لتحليل البيانات (أساسيات)',
    },
    level: {
      en: 'Beginner',
      ar: 'مبتدئ',
    },
    duration: {
      en: '30 hours',
      ar: '30 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'Learn the essential SQL skills needed for data analysis. This course focuses on reading and analyzing data using SELECT queries, filtering, aggregation, joins, and basic analytical patterns. It is designed for analysts who want to extract insights from databases without diving into database administration tasks like creating or deleting tables.',
      ar: 'تعلم مهارات SQL الأساسية المطلوبة لتحليل البيانات. يركز الكورس على قراءة البيانات وتحليلها باستخدام استعلامات SELECT، التصفية، التجميع، الربط بين الجداول (Joins)، وأنماط تحليلية مهمة. الكورس مخصص لمحللي البيانات الذين يريدون استخراج رؤى من قواعد البيانات بدون الدخول في مهام إدارة قواعد البيانات مثل إنشاء أو حذف الجداول.',
    },
    whoFor: {
      en: [
        'Beginners who want to learn SQL for analytics',
        'Data analysts working with databases',
        'Professionals transitioning to data roles',
        'Anyone who needs to query data without database admin responsibilities',
      ],
      ar: [
        'المبتدئون الذين يريدون تعلم SQL للتحليل',
        'محللو البيانات الذين يعملون مع قواعد البيانات',
        'المهنيون الذين ينتقلون إلى أدوار البيانات',
        'أي شخص يحتاج لاستخراج البيانات بدون مهام إدارة قواعد البيانات',
      ],
    },
    learn: {
      en: [
        'How databases and tables store data (concepts for analysts)',
        'Writing SELECT queries to retrieve data',
        'Filtering with WHERE, IN, BETWEEN, LIKE, and NULL handling',
        'Sorting and limiting results (ORDER BY, LIMIT)',
        'Aggregation and grouping (COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING)',
        'Joins for analysis (INNER, LEFT) and when to use each',
        'Working with dates and text (basic functions)',
        'Subqueries and CTEs (WITH) for cleaner analysis',
        'Window functions basics (ROW_NUMBER, RANK, running totals) — optional intro',
        'Common analytics patterns: top-N, cohort-like grouping, duplicate checks, data quality checks',
      ],
      ar: [
        'مفاهيم قواعد البيانات والجداول بشكل مناسب للمحللين',
        'كتابة استعلامات SELECT لاستخراج البيانات',
        'التصفية باستخدام WHERE و IN و BETWEEN و LIKE والتعامل مع NULL',
        'ترتيب النتائج وتحديد عدد السجلات (ORDER BY, LIMIT)',
        'التجميع والتلخيص (COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING)',
        'الربط بين الجداول للتحليل (INNER, LEFT) ومتى نستخدم كل نوع',
        'التعامل مع التواريخ والنصوص (دوال أساسية)',
        'Subqueries و CTEs (WITH) لتنظيم التحليل',
        'مقدمة اختيارية في Window Functions (ROW_NUMBER, RANK, running totals)',
        'أنماط تحليل شائعة: Top-N، تجميعات شبيهة بالـ Cohort، كشف التكرارات، فحوصات جودة البيانات',
      ],
    },
    tools: {
      en: ['SQL', 'PostgreSQL (or MySQL)', 'DB Browser / DBeaver', 'Sample Analytics Dataset'],
      ar: ['SQL', 'PostgreSQL (أو MySQL)', 'DB Browser / DBeaver', 'بيانات تدريبية للتحليل'],
    },
    outcomes: {
      en: [
        'Ability to write SQL queries to extract and analyze data',
        'Confidence in using filtering, aggregation, and joins',
        'Capability to answer common business questions using SQL',
        'Readiness to work with BI tools and analytics workflows',
      ],
      ar: [
        'القدرة على كتابة استعلامات SQL لاستخراج وتحليل البيانات',
        'الثقة في استخدام التصفية والتجميع وJoins',
        'الإجابة على أسئلة الأعمال الشائعة باستخدام SQL',
        'الاستعداد للعمل مع أدوات الـ BI ومسارات التحليل',
      ],
    },
  },
  
  {
    slug: 'introduction-to-computers-programming-python',
    title: {
      en: 'Introduction to Computers & Programming using Python',
      ar: 'مقدمة في الحاسوب والبرمجة باستخدام Python',
    },
    level: {
      en: 'Absolute Beginner',
      ar: 'مبتدئ تمامًا (من الصفر)',
    },
    duration: {
      en: '30–36 hours',
      ar: '30–36 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'This course is designed for absolute beginners with no prior technical or programming background. Learners start by understanding what a computer is, how it works, and what programming means, then gradually move into writing simple Python programs. By the end of the course, learners will be fully prepared to start data analytics, AI, or software development tracks.',
      ar: 'هذا الكورس مخصص للمبتدئين تمامًا بدون أي خلفية تقنية أو برمجية. يبدأ بشرح ما هو الكمبيوتر وكيف يعمل وما معنى البرمجة، ثم ينتقل تدريجيًا إلى كتابة برامج بسيطة باستخدام Python. في نهاية الكورس يكون المتدرب مؤهلًا للانتقال إلى مسارات تحليل البيانات أو الذكاء الاصطناعي أو تطوير البرمجيات.',
    },
    whoFor: {
      en: [
        'Absolute beginners with no programming background',
        'Career shifters and non-technical professionals',
        'Students preparing for data analytics or AI tracks',
        'Anyone who wants to learn programming from scratch',
      ],
      ar: [
        'المبتدئون تمامًا بدون أي خبرة برمجية',
        'الأشخاص الراغبون في تغيير مسارهم المهني',
        'الطلاب الذين يستعدون لمسارات تحليل البيانات أو الذكاء الاصطناعي',
        'أي شخص يرغب في تعلم البرمجة من الصفر',
      ],
    },
    learn: {
      en: [
        'What a computer is and how it works',
        'Difference between hardware and software',
        'What programming means and why it is used',
        'Basic algorithmic thinking and problem solving',
        'Python basics: variables, data types, input and output',
        'Conditional statements and logical thinking',
        'Loops and repetition',
        'Functions and reusable code',
      ],
      ar: [
        'ما هو الكمبيوتر وكيف يعمل',
        'الفرق بين الهاردوير والسوفتوير',
        'معنى البرمجة ولماذا نستخدمها',
        'أساسيات التفكير الخوارزمي وحل المشكلات',
        'أساسيات Python: المتغيرات وأنواع البيانات والإدخال والإخراج',
        'الشروط والمنطق البرمجي',
        'الحلقات التكرارية',
        'الدوال وإعادة استخدام الكود',
      ],
    },
    tools: {
      en: ['Python', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
      ar: ['Python', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
    },
    outcomes: {
      en: [
        'Understand core computer and programming concepts',
        'Write simple Python programs with confidence',
        'Solve basic problems using logical thinking',
        'Be ready to start Data Analytics with Python',
      ],
      ar: [
        'فهم أساسيات الكمبيوتر والبرمجة',
        'كتابة برامج Python بسيطة بثقة',
        'حل مشكلات أساسية باستخدام التفكير المنطقي',
        'الاستعداد للبدء في تحليلات البيانات باستخدام Python',
      ],
    },
  },
  

  {
    slug: 'machine-learning-foundations',
    title: {
      en: 'Machine Learning Foundations',
      ar: 'أساسيات التعلم الآلي',
    },
    level: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '30 hours',
      ar: '30 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'Build a solid foundation in machine learning concepts and algorithms. Learn to implement ML models and evaluate their performance for real-world applications.',
      ar: 'بناء أساس متين في مفاهيم وخوارزميات التعلم الآلي. تعلم تنفيذ نماذج ML وتقييم أدائها للتطبيقات الواقعية.',
    },
    whoFor: {
      en: [
        'Data analysts ready to advance',
        'Software engineers entering ML',
        'Researchers and academics',
      ],
      ar: [
        'محللو البيانات المستعدون للتقدم',
        'مهندسو البرمجيات الذين يدخلون ML',
        'الباحثون والأكاديميون',
      ],
    },
    learn: {
      en: [
        'Supervised and unsupervised learning',
        'Regression and classification algorithms',
        'Model evaluation and validation',
        'Feature engineering techniques',
        'Hyperparameter tuning',
        'Introduction to neural networks',
      ],
      ar: [
        'التعلم الخاضع للإشراف وغير الخاضع للإشراف',
        'خوارزميات الانحدار والتصنيف',
        'تقييم والتحقق من النماذج',
        'تقنيات هندسة الميزات',
        'ضبط المعاملات الفائقة',
        'مقدمة للشبكات العصبية',
      ],
    },
    tools: {
      en: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      ar: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    outcomes: {
      en: [
        'Understand ML algorithms and concepts',
        'Implement and train ML models',
        'Evaluate model performance',
        'Apply ML to solve business problems',
        'Prepare for advanced ML topics',
      ],
      ar: [
        'فهم خوارزميات ومفاهيم ML',
        'تنفيذ وتدريب نماذج ML',
        'تقييم أداء النماذج',
        'تطبيق ML لحل مشاكل الأعمال',
        'الاستعداد لمواضيع ML المتقدمة',
      ],
    },
  },
  {
    slug: 'ai-tools-professionals',
    title: {
      en: 'AI Tools for Professionals',
      ar: 'أدوات الذكاء الاصطناعي للمحترفين',
    },
    level: {
      en: 'All levels',
      ar: 'جميع المستويات',
    },
    duration: {
      en: '12 hours',
      ar: '12 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'Discover and master the latest AI tools that can enhance your productivity and workflow. Learn to leverage AI for content creation, analysis, and automation.',
      ar: 'اكتشف وأتقن أحدث أدوات الذكاء الاصطناعي التي يمكن أن تعزز إنتاجيتك وسير عملك. تعلم الاستفادة من الذكاء الاصطناعي لإنشاء المحتوى والتحليل والأتمتة.',
    },
    whoFor: {
      en: [
        'All professionals seeking efficiency',
        'Content creators and marketers',
        'Business owners and entrepreneurs',
      ],
      ar: [
        'جميع المهنيين الذين يسعون للكفاءة',
        'منشئو المحتوى والمسوقون',
        'أصحاب الأعمال ورجال الأعمال',
      ],
    },
    learn: {
      en: [
        'Overview of modern AI tools landscape',
        'Prompt engineering best practices',
        'AI for content generation',
        'AI for data analysis and insights',
        'Automation with AI assistants',
        'Ethical considerations and best practices',
      ],
      ar: [
        'نظرة عامة على مشهد أدوات الذكاء الاصطناعي الحديثة',
        'أفضل ممارسات هندسة المطالبات',
        'الذكاء الاصطناعي لتوليد المحتوى',
        'الذكاء الاصطناعي لتحليل البيانات والرؤى',
        'الأتمتة باستخدام مساعدي الذكاء الاصطناعي',
        'الاعتبارات الأخلاقية وأفضل الممارسات',
      ],
    },
    tools: {
      en: ['ChatGPT', 'Claude', 'Midjourney', 'Various AI platforms'],
      ar: ['ChatGPT', 'Claude', 'Midjourney', 'منصات الذكاء الاصطناعي المختلفة'],
    },
    outcomes: {
      en: [
        'Proficient with leading AI tools',
        'Create high-quality content faster',
        'Automate repetitive tasks',
        'Make informed decisions about AI adoption',
        'Apply AI ethically in professional settings',
      ],
      ar: [
        'الإتقان في أدوات الذكاء الاصطناعي الرائدة',
        'إنشاء محتوى عالي الجودة بشكل أسرع',
        'أتمتة المهام المتكررة',
        'اتخاذ قرارات مستنيرة حول اعتماد الذكاء الاصطناعي',
        'تطبيق الذكاء الاصطناعي بشكل أخلاقي في البيئات المهنية',
      ],
    },
  },
  {
    slug: 'advanced-analytics-supply-chain',
    title: {
      en: 'Advanced Analytics for Supply Chain',
      ar: 'التحليلات المتقدمة لسلسلة التوريد',
    },
    level: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '18 hours',
      ar: '18 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'Apply advanced analytics techniques to optimize supply chain operations. Learn forecasting, inventory optimization, and demand planning using data science methods.',
      ar: 'طبق تقنيات التحليلات المتقدمة لتحسين عمليات سلسلة التوريد. تعلم التنبؤ وتحسين المخزون وتخطيط الطلب باستخدام طرق علم البيانات.',
    },
    whoFor: {
      en: [
        'Supply chain professionals',
        'Operations managers',
        'Data analysts in logistics',
      ],
      ar: [
        'المهنيون في سلسلة التوريد',
        'مديرو العمليات',
        'محللو البيانات في الخدمات اللوجستية',
      ],
    },
    learn: {
      en: [
        'Supply chain data analysis',
        'Demand forecasting models',
        'Inventory optimization techniques',
        'Risk analysis and mitigation',
        'Performance metrics and KPIs',
        'Case studies from real supply chains',
      ],
      ar: [
        'تحليل بيانات سلسلة التوريد',
        'نماذج التنبؤ بالطلب',
        'تقنيات تحسين المخزون',
        'تحليل المخاطر والتخفيف',
        'مقاييس الأداء ومؤشرات الأداء الرئيسية',
        'دراسات حالة من سلاسل التوريد الحقيقية',
      ],
    },
    tools: {
      en: ['Python', 'R', 'Excel', 'Tableau', 'SQL'],
      ar: ['Python', 'R', 'Excel', 'Tableau', 'SQL'],
    },
    outcomes: {
      en: [
        'Optimize supply chain operations',
        'Build demand forecasting models',
        'Reduce inventory costs',
        'Improve supply chain visibility',
        'Make data-driven supply chain decisions',
      ],
      ar: [
        'تحسين عمليات سلسلة التوريد',
        'بناء نماذج التنبؤ بالطلب',
        'تقليل تكاليف المخزون',
        'تحسين رؤية سلسلة التوريد',
        'اتخاذ قرارات سلسلة التوريد المدعومة بالبيانات',
      ],
    },
  },
  {
    slug: 'deep-learning-computer-vision',
    title: {
      en: 'Applied Deep Learning & Computer Vision',
      ar: 'التعلم العميق التطبيقي ورؤية الكمبيوتر',
    },
    level: {
      en: 'Advanced',
      ar: 'متقدم',
    },
    duration: {
      en: '30 hours',
      ar: '30 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'Master deep learning and computer vision techniques for real-world applications. Build neural networks, work with images, and deploy models for production use.',
      ar: 'أتقن تقنيات التعلم العميق ورؤية الكمبيوتر للتطبيقات الواقعية. بناء الشبكات العصبية والعمل مع الصور ونشر النماذج للاستخدام الإنتاجي.',
    },
    whoFor: {
      en: [
        'Experienced ML practitioners',
        'Computer vision engineers',
        'Researchers in AI/ML',
      ],
      ar: [
        'ممارسو ML ذوو الخبرة',
        'مهندسو رؤية الكمبيوتر',
        'الباحثون في الذكاء الاصطناعي/ML',
      ],
    },
    learn: {
      en: [
        'Deep neural network architectures',
        'Convolutional Neural Networks (CNNs)',
        'Transfer learning and fine-tuning',
        'Image classification and object detection',
        'Model deployment and optimization',
        'Real-world computer vision projects',
      ],
      ar: [
        'هندسة الشبكات العصبية العميقة',
        'الشبكات العصبية التلافيفية (CNNs)',
        'نقل التعلم والضبط الدقيق',
        'تصنيف الصور واكتشاف الكائنات',
        'نشر وتحسين النماذج',
        'مشاريع رؤية الكمبيوتر الواقعية',
      ],
    },
    tools: {
      en: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Python'],
      ar: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Python'],
    },
    outcomes: {
      en: [
        'Build and train deep learning models',
        'Implement computer vision solutions',
        'Apply transfer learning effectively',
        'Deploy models to production',
        'Solve complex visual recognition tasks',
      ],
      ar: [
        'بناء وتدريب نماذج التعلم العميق',
        'تنفيذ حلول رؤية الكمبيوتر',
        'تطبيق نقل التعلم بشكل فعال',
        'نشر النماذج للإنتاج',
        'حل مهام التعرف البصري المعقدة',
      ],
    },
  },
]

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}

export function getCourseTitle(course: Course, locale: Locale): string {
  return course.title[locale]
}
