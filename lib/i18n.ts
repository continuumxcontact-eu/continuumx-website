export type Locale = 'en' | 'ar'

export const locales: Locale[] = ['en', 'ar']
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    nav: {
      services: 'Services',
      courses: 'Courses',
      about: 'About',
      contact: 'Contact',
      enroll: 'Enroll',
    },
    home: {
      h1: 'Continuum X — AI, Data & Analytics for Real-World Impact',
      subtext: 'We deliver professional training programs and AI-driven business solutions to help teams and organizations make smarter decisions.',
      trust: 'EU-registered • Estonia-based • Professional delivery',
      ctaCourses: 'Explore Courses',
      ctaConsultation: 'Request a Consultation',
    },
    services: {
      title: 'Our Services',
      ai: {
        title: 'AI & Data Consulting',
        description: 'Strategic guidance for implementing AI and data analytics solutions.',
        bullets: [
          'Data strategy and architecture design',
          'AI implementation roadmaps',
          'Performance optimization and scaling',
        ],
      },
      bi: {
        title: 'BI & Dashboards',
        description: 'Transform your data into actionable insights with powerful business intelligence tools.',
        bullets: [
          'Custom dashboard development',
          'Real-time data visualization',
          'KPI tracking and reporting',
        ],
      },
      custom: {
        title: 'Custom AI Solutions',
        description: 'Tailored AI applications designed to solve your specific business challenges.',
        bullets: [
          'Machine learning model development',
          'AI integration with existing systems',
          'Ongoing support and maintenance',
        ],
      },
      training: {
        title: 'Training & Diplomas',
        description: 'Professional certification programs to upskill your team.',
        bullets: [
          'Hands-on practical training',
          'Industry-recognized certificates',
          'Flexible scheduling options',
        ],
      },
      cta: 'Request a Consultation',
    },
    courses: {
      title: 'Our Courses',
      enroll: 'Enroll Now',
      viewDetails: 'View Details',
      overview: 'Overview',
      whoFor: "Who it's for",
      learn: "What you'll learn",
      format: 'Format',
      duration: 'Duration',
      level: 'Level',
      tools: 'Tools',
      outcomes: 'Outcomes',
      certificate: 'Certificate',
      certificateText: 'Upon successful completion, you will receive a professional certificate from Continuum X OÜ.',
    },
    forms: {
      enrollment: {
        title: 'Enroll in a Course',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone/WhatsApp',
        country: 'Country',
        background: 'Background',
        backgroundOptions: {
          student: 'Student',
          professional: 'Professional',
          engineer: 'Engineer',
          businessOwner: 'Business Owner',
          other: 'Other',
        },
        course: 'Course of Interest',
        schedule: 'Preferred Schedule',
        scheduleOptions: {
          weekdays: 'Weekdays evenings',
          weekends: 'Weekends',
          flexible: 'Flexible',
        },
        message: 'Message',
        consent: 'I agree to the Privacy Policy and Terms of Service',
        submit: 'Submit Enrollment',
        success: 'Thank you! Your enrollment has been submitted successfully.',
      },
      consultation: {
        title: 'Request a Consultation',
        name: 'Name',
        email: 'Email',
        company: 'Company',
        serviceType: 'Service Type',
        serviceOptions: {
          dashboards: 'Dashboards',
          aiConsulting: 'AI Consulting',
          training: 'Training',
          other: 'Other',
        },
        budget: 'Budget Range',
        budgetOptions: {
          under1k: '< €1,000',
          '1k-5k': '€1,000 – €5,000',
          '5k-15k': '€5,000 – €15,000',
          over15k: '€15,000+',
        },
        message: 'Message',
        submit: 'Submit Request',
        success: 'Thank you! Your consultation request has been submitted successfully.',
      },
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
    },
    about: {
      title: 'About Continuum X',
      content: 'Continuum X OÜ is an EU-registered company based in Tallinn, Estonia, specializing in AI, data analytics, business intelligence, and professional training. We help organizations leverage cutting-edge technology to make data-driven decisions and achieve their business objectives.',
    },
    contact: {
      title: 'Contact Us',
      email: 'Email',
      address: 'Address',
      addressValue: 'Tallinn, Estonia',
    },
    footer: {
      description: 'Professional AI, Data Analytics, and Business Intelligence solutions.',
      links: {
        services: 'Services',
        courses: 'Courses',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      company: 'Continuum X OÜ • Registered in Estonia • Tallinn',
      copyright: '© 2026 Continuum X OÜ. All rights reserved.',
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: February 2026',
        content: [
          'Continuum X OÜ is committed to protecting your privacy and handling your personal data responsibly.',
          'We may collect the following information during registration: full name, email address, phone number, course selection, and payment details through secure payment providers.',
          'Your information is used to process course registrations, send updates and materials, issue certificates, provide support, and improve our services.',
          'We do not sell or rent your personal data to third parties. Your data is stored securely and accessed only by authorized personnel.',
          'We may use trusted third-party services for payments, email delivery, and analytics. These providers are required to protect your data under applicable laws.',
          'By enrolling, you agree to receive course-related communications. You may unsubscribe from non-essential messages at any time.',
          'Your data is retained only as long as necessary for educational, legal, or administrative purposes.',
          'You have the right to access, correct, or request deletion of your personal data. You may also withdraw consent for data processing at any time.',
          'For any privacy-related inquiries, please contact: contact@continuumx-ai.com',
        ],
      },
      terms: {
        title: 'Terms of Service',
        lastUpdated: 'Last updated: February 2026',
        content: [
          'By enrolling in any course or service offered by Continuum X OÜ, you agree to the following terms and conditions.',
        'Enrollment is confirmed only after full payment or an approved payment arrangement.',
        'Access to course materials is granted solely to the registered participant. Materials may not be copied, shared, recorded, or redistributed without written permission.',
        'Course fees must be paid before the start date unless otherwise agreed.',
        'Refund Policy: Participants may withdraw during the first week and receive a full refund. Withdrawal during the second week is eligible for a 50% refund. No refunds will be issued after the second week.',
        'Refunds will be processed within 7–14 business days using the original payment method.',
        'Continuum X reserves the right to reschedule sessions, change instructors, or update course content if necessary. Participants will be notified in advance of significant changes.',
        'Certificates are issued only to participants who meet course requirements, including attendance or assessments where applicable.',
        'All course materials, including slides, code, and datasets, remain the intellectual property of Continuum X.',
        'Continuum X is not responsible for participant-side technical issues, internet connectivity problems, or device compatibility issues.',
        'These terms are governed by the laws of Estonia and applicable European Union regulations.',
        'For any questions regarding these terms, contact: contact@continuumx-ai.com',
        ],
      },
    },
    notFound: {
      title: '404 - Page Not Found',
      message: 'The page you are looking for does not exist.',
      home: 'Go Home',
    },
    thankYou: {
      title: 'Thank You!',
      message: 'We have received your submission and will get back to you soon.',
      home: 'Return Home',
    },
  },
  ar: {
    nav: {
      services: 'الخدمات',
      courses: 'الدورات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      enroll: 'سجل الآن',
    },
    home: {
      h1: 'Continuum X — الذكاء الاصطناعي والبيانات والتحليلات لأثر واقعي',
      subtext: 'نقدّم برامج تدريب احترافية وحلول أعمال مدعومة بالذكاء الاصطناعي لمساعدة الفرق والمؤسسات على اتخاذ قرارات أذكى.',
      trust: 'شركة مسجلة في الاتحاد الأوروبي • مقر قانوني في إستونيا • تنفيذ احترافي',
      ctaCourses: 'استعرض الدورات',
      ctaConsultation: 'اطلب استشارة',
    },
    services: {
      title: 'خدماتنا',
      ai: {
        title: 'استشارات الذكاء الاصطناعي والبيانات',
        description: 'إرشاد استراتيجي لتنفيذ حلول الذكاء الاصطناعي وتحليلات البيانات.',
        bullets: [
          'استراتيجية البيانات وتصميم البنية التحتية',
          'خطط تنفيذ الذكاء الاصطناعي',
          'تحسين الأداء والتوسع',
        ],
      },
      bi: {
        title: 'ذكاء الأعمال ولوحات المعلومات',
        description: 'حوّل بياناتك إلى رؤى قابلة للتنفيذ باستخدام أدوات ذكاء الأعمال القوية.',
        bullets: [
          'تطوير لوحات معلومات مخصصة',
          'تصور البيانات في الوقت الفعلي',
          'تتبع مؤشرات الأداء الرئيسية وإعداد التقارير',
        ],
      },
      custom: {
        title: 'حلول ذكاء اصطناعي مخصصة',
        description: 'تطبيقات ذكاء اصطناعي مصممة خصيصاً لحل تحديات عملك المحددة.',
        bullets: [
          'تطوير نماذج التعلم الآلي',
          'دمج الذكاء الاصطناعي مع الأنظمة الموجودة',
          'الدعم والصيانة المستمرة',
        ],
      },
      training: {
        title: 'التدريب والدبلومات المهنية',
        description: 'برامج شهادات احترافية لرفع مهارات فريقك.',
        bullets: [
          'تدريب عملي مباشر',
          'شهادات معترف بها في الصناعة',
          'خيارات جدولة مرنة',
        ],
      },
      cta: 'اطلب استشارة',
    },
    courses: {
      title: 'دوراتنا',
      enroll: 'سجل الآن',
      viewDetails: 'عرض التفاصيل',
      overview: 'نظرة عامة',
      whoFor: 'لمن هذه الدورة',
      learn: 'ما الذي ستتعلمه',
      format: 'التنسيق',
      duration: 'المدة',
      level: 'المستوى',
      tools: 'الأدوات',
      outcomes: 'النتائج',
      certificate: 'الشهادة',
      certificateText: 'عند إتمام الدورة بنجاح، ستحصل على شهادة احترافية من Continuum X OÜ.',
    },
    forms: {
      enrollment: {
        title: 'التسجيل في دورة',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف أو واتساب',
        country: 'الدولة',
        background: 'الخلفية',
        backgroundOptions: {
          student: 'طالب',
          professional: 'محترف',
          engineer: 'مهندس',
          businessOwner: 'صاحب عمل',
          other: 'آخر',
        },
        course: 'الدورة المطلوبة',
        schedule: 'الوقت المفضل',
        scheduleOptions: {
          weekdays: 'أمسيات أيام الأسبوع',
          weekends: 'عطلات نهاية الأسبوع',
          flexible: 'مرن',
        },
        message: 'رسالة',
        consent: 'أوافق على سياسة الخصوصية وشروط الخدمة',
        submit: 'إرسال التسجيل',
        success: 'شكراً لك! تم إرسال تسجيلك بنجاح.',
      },
      consultation: {
        title: 'طلب استشارة',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        company: 'الشركة',
        serviceType: 'نوع الخدمة',
        serviceOptions: {
          dashboards: 'لوحات المعلومات',
          aiConsulting: 'استشارات الذكاء الاصطناعي',
          training: 'التدريب',
          other: 'آخر',
        },
        budget: 'نطاق الميزانية',
        budgetOptions: {
          under1k: '< 1,000 يورو',
          '1k-5k': '1,000 – 5,000 يورو',
          '5k-15k': '5,000 – 15,000 يورو',
          over15k: '15,000+ يورو',
        },
        message: 'الرسالة',
        submit: 'إرسال الطلب',
        success: 'شكراً لك! تم إرسال طلب الاستشارة بنجاح.',
      },
      required: 'هذا الحقل مطلوب',
      invalidEmail: 'عنوان بريد إلكتروني غير صحيح',
    },
    about: {
      title: 'عن Continuum X',
      content: 'Continuum X OÜ هي شركة مسجلة في الاتحاد الأوروبي ومقرها تالين، إستونيا، متخصصة في الذكاء الاصطناعي وتحليلات البيانات وذكاء الأعمال والتدريب الاحترافي. نساعد المؤسسات على الاستفادة من أحدث التقنيات لاتخاذ قرارات مدعومة بالبيانات وتحقيق أهدافها التجارية.',
    },
    contact: {
      title: 'اتصل بنا',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      addressValue: 'تالين، إستونيا',
    },
    footer: {
      description: 'حلول احترافية للذكاء الاصطناعي وتحليلات البيانات وذكاء الأعمال.',
      links: {
        services: 'الخدمات',
        courses: 'الدورات',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
      },
      company: 'Continuum X OÜ • مسجلة في إستونيا • تالين',
      copyright: '© 2026 Continuum X OÜ. جميع الحقوق محفوظة.',
    },
    legal: {
      privacy: {
        title: 'سياسة الخصوصية',
        lastUpdated: 'آخر تحديث: يناير 2026',
        content: [
          'Continuum X OÜ ("نحن"، "خاصتنا"، "لنا") ملتزمة بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية.',
          'المعلومات التي نجمعها: نجمع المعلومات التي تقدمها من خلال نماذج الاتصال والتسجيل، بما في ذلك الاسم والبريد الإلكتروني ورقم الهاتف وتفاصيل الشركة والرسائل.',
          'كيفية استخدام معلوماتك: نستخدم معلوماتك للرد على استفساراتك ومعالجة التسجيلات وتقديم الخدمات وإرسال الاتصالات ذات الصلة. لا نبيع أو نشارك بياناتك مع أطراف ثالثة.',
          'الاحتفاظ بالبيانات: نحتفظ بمعلوماتك طالما كان ذلك ضرورياً لتحقيق الأغراض الموضحة في هذه السياسة أو حسبما يتطلب القانون.',
          'حقوقك: لديك الحق في الوصول إلى معلوماتك الشخصية أو تحديثها أو حذفها. اتصل بنا على continuumx.contact@gmail.com لممارسة هذه الحقوق.',
          'الاتصال: للأسئلة حول سياسة الخصوصية هذه، اتصل بنا على continuumx.contact@gmail.com.',
        ],
      },
      terms: {
        title: 'شروط الخدمة',
        lastUpdated: 'آخر تحديث: يناير 2026',
        content: [
          'باستخدام خدمات Continuum X OÜ، فإنك توافق على شروط الخدمة هذه.',
          'الدفع: يتم معالجة الدفع عن طريق الفواتير والطرق غير المتصلة بالإنترنت. معالجة الدفع عبر الإنترنت غير متاحة حالياً.',
          'الإلغاء والاسترداد: سيتم إبلاغ سياسات الإلغاء والاسترداد في وقت التسجيل أو اتفاقية الخدمة.',
          'الملكية الفكرية: جميع مواد الدورة والمحتوى والملكية الفكرية تبقى ملكاً لـ Continuum X OÜ.',
          'تحديد المسؤولية: لن تكون Continuum X OÜ مسؤولة عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام خدماتنا.',
          'القانون الحاكم: تحكم هذه الشروط قوانين إستونيا والاتحاد الأوروبي. هذا بيان عام ولا يشكل نصيحة قانونية.',
          'الاتصال: للأسئلة حول هذه الشروط، اتصل بنا على continuumx.contact@gmail.com.',
        ],
      },
    },
    notFound: {
      title: '404 - الصفحة غير موجودة',
      message: 'الصفحة التي تبحث عنها غير موجودة.',
      home: 'العودة للرئيسية',
    },
    thankYou: {
      title: 'شكراً لك!',
      message: 'لقد استلمنا طلبك وسنعود إليك قريباً.',
      home: 'العودة للرئيسية',
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'ar') {
    return `/ar${path === '/' ? '' : path}`
  }
  return path
}
