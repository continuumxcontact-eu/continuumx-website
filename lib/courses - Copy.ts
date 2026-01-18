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
  {
    slug: 'power-bi-business-intelligence',
    title: {
      en: 'Power BI for Business Intelligence',
      ar: 'Power BI لذكاء الأعمال',
    },
    level: {
      en: 'Beginner → Intermediate',
      ar: 'مبتدئ → متوسط',
    },
    duration: {
      en: '24 hours',
      ar: '24 ساعة',
    },
    format: {
      en: 'Online/Hybrid',
      ar: 'أونلاين/مختلط',
    },
    overview: {
      en: 'Learn to build powerful business intelligence dashboards and reports using Microsoft Power BI. Transform raw data into actionable insights for stakeholders.',
      ar: 'تعلم بناء لوحات معلومات وتقارير ذكاء أعمال قوية باستخدام Microsoft Power BI. حوّل البيانات الأولية إلى رؤى قابلة للتنفيذ لأصحاب المصلحة.',
    },
    whoFor: {
      en: [
        'Business analysts and data professionals',
        'Managers needing data visualization skills',
        'Anyone working with business data',
      ],
      ar: [
        'محللو الأعمال والمهنيون في البيانات',
        'المديرون الذين يحتاجون مهارات تصور البيانات',
        'أي شخص يعمل مع بيانات الأعمال',
      ],
    },
    learn: {
      en: [
        'Power BI interface and navigation',
        'Data import and transformation',
        'Creating relationships between data sources',
        'Building interactive dashboards',
        'DAX formulas for calculations',
        'Sharing and collaboration features',
      ],
      ar: [
        'واجهة Power BI والتنقل',
        'استيراد وتحويل البيانات',
        'إنشاء علاقات بين مصادر البيانات',
        'بناء لوحات معلومات تفاعلية',
        'صيغ DAX للحسابات',
        'ميزات المشاركة والتعاون',
      ],
    },
    tools: {
      en: ['Power BI Desktop', 'Power BI Service', 'DAX', 'Power Query'],
      ar: ['Power BI Desktop', 'Power BI Service', 'DAX', 'Power Query'],
    },
    outcomes: {
      en: [
        'Create professional BI dashboards',
        'Connect to multiple data sources',
        'Write DAX formulas for advanced calculations',
        'Publish and share reports securely',
        'Enable data-driven decision making',
      ],
      ar: [
        'إنشاء لوحات معلومات BI احترافية',
        'الاتصال بمصادر بيانات متعددة',
        'كتابة صيغ DAX للحسابات المتقدمة',
        'نشر ومشاركة التقارير بشكل آمن',
        'تمكين اتخاذ القرارات المدعومة بالبيانات',
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
