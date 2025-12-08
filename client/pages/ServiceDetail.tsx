import { useParams } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceData {
  title: string;
  subtitle: string;
  icon: string;
  heroGradient: string;
  aboutTitle: string;
  aboutContent: string;
  featuresTitle: string;
  features: string[];
  pricing: {
    name: string;
    price: string;
    features: string[];
    cta: string;
    highlighted?: boolean;
    isCustom?: boolean;
  }[];
  ctaText: string;
  ctaSubtext: string;
}

const servicesData: Record<string, ServiceData> = {
  // Writing Services
  essay: {
    title: "Essay & Assignment Writing",
    subtitle: "Professional Academic Writing Services",
    icon: "📝",
    heroGradient: "from-blue-50 to-indigo-50",
    aboutTitle: "About Essay & Assignment Writing",
    aboutContent:
      "Our essay writing service provides professionally written essays for all academic levels. Whether you need help with high school essays, college assignments, or university-level papers, our expert writers deliver original, well-researched content that meets your specific requirements.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Original, plagiarism-free content",
      "Expert writers with subject expertise",
      "Proper citation and referencing",
      "Multiple revision rounds",
      "On-time delivery guarantee",
      "Confidential and secure process",
      "24/7 customer support",
      "Quality assurance checks",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$49",
        features: [
          "500-1000 words",
          "Basic research",
          "Standard formatting",
          "1 revision",
          "5-7 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$99",
        features: [
          "Up to 3,000 words",
          "In-depth research",
          "Premium formatting",
          "2 revisions",
          "3-5 days delivery",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$199",
        features: [
          "Up to 5,000 words",
          "Expert research",
          "Complete editing",
          "Unlimited revisions",
          "2-3 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Any word count",
          "Specialized topics",
          "Rush delivery",
          "Priority support",
          "Flexible timeline",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Ready to Order Your Essay?",
    ctaSubtext: "Get started today and receive your professionally written essay",
  },
  research: {
    title: "Research Paper Writing",
    subtitle: "In-Depth Research and Academic Excellence",
    icon: "🔬",
    heroGradient: "from-purple-50 to-pink-50",
    aboutTitle: "About Research Paper Writing",
    aboutContent:
      "Our research paper writing service specializes in comprehensive academic research papers. We conduct thorough literature reviews, original analysis, and provide properly cited sources. Perfect for students who need high-quality research papers for their academic programs.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Comprehensive literature review",
      "Original research and analysis",
      "Proper academic citations (APA, MLA, Chicago)",
      "Peer-reviewed source integration",
      "Detailed outlines and drafts",
      "Multiple revision rounds",
      "Plagiarism scanning",
      "Expert academic writers",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$99",
        features: [
          "Up to 5,000 words",
          "Standard research depth",
          "Basic citations",
          "1 revision",
          "7-10 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$249",
        features: [
          "Up to 10,000 words",
          "In-depth research",
          "Multiple sources",
          "2 revisions",
          "5-7 days delivery",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$499",
        features: [
          "Up to 15,000 words",
          "Expert-level research",
          "20+ peer-reviewed sources",
          "Unlimited revisions",
          "3-5 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Any word count",
          "Custom research scope",
          "Specialized topics",
          "Rush delivery available",
          "Dedicated researcher",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Commission Your Research Paper",
    ctaSubtext: "Get a comprehensive research paper written by academic experts",
  },
  thesis: {
    title: "Thesis & Dissertation Assistance",
    subtitle: "Complete Support for Your Academic Journey",
    icon: "🎓",
    heroGradient: "from-green-50 to-emerald-50",
    aboutTitle: "About Thesis & Dissertation Assistance",
    aboutContent:
      "Our thesis and dissertation assistance service provides comprehensive support for graduate-level research projects. From research design and proposal writing to final editing and formatting, we help ensure your thesis meets the highest academic standards.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Research proposal development",
      "Literature review assistance",
      "Research methodology guidance",
      "Data analysis support",
      "Chapter-by-chapter writing",
      "Comprehensive editing and proofreading",
      "Proper formatting (APA, MLA, Chicago)",
      "Defense preparation materials",
    ],
    pricing: [
      {
        name: "Consulting",
        price: "$299/month",
        features: [
          "Guidance and feedback",
          "Chapter reviews",
          "Weekly consultations",
          "30 days support",
          "Email support",
        ],
        cta: "Start Consulting",
      },
      {
        name: "Complete Package",
        price: "$2,999",
        features: [
          "Full thesis/dissertation writing",
          "Up to 50,000 words",
          "Unlimited revisions",
          "Expert editing",
          "Formatting assistance",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium Package",
        price: "$4,999",
        features: [
          "End-to-end support",
          "Up to 100,000 words",
          "Defense presentation prep",
          "Expert consultation",
          "6 months support",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Tailored solutions",
          "Custom timeline",
          "Specialized expertise",
          "Ongoing support",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Start Your Thesis Journey Today",
    ctaSubtext:
      "Get expert assistance with your thesis or dissertation project from start to finish",
  },
  // Design Services
  logo: {
    title: "Logo Design",
    subtitle: "Professional Brand Identity",
    icon: "🎯",
    heroGradient: "from-purple-50 to-pink-50",
    aboutTitle: "About Logo Design",
    aboutContent:
      "Your logo is the face of your brand. Our expert designers create unique, memorable logos that perfectly represent your business values and appeal to your target audience. We deliver professional designs that stand the test of time.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Multiple design concepts",
      "Original and unique designs",
      "Brand consultation",
      "Unlimited revisions",
      "Vector files (AI, EPS, SVG)",
      "High-resolution formats",
      "Color variations",
      "Brand guidelines documentation",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$299",
        features: [
          "3 logo concepts",
          "2 revisions",
          "Vector files",
          "Basic colors",
          "5-7 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$599",
        features: [
          "5 logo concepts",
          "Unlimited revisions",
          "Complete brand package",
          "Multiple color versions",
          "3-5 days delivery",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$999",
        features: [
          "Unlimited concepts",
          "Full brand identity",
          "Icon set included",
          "Business card design",
          "2-3 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Full branding package",
          "Dedicated designer",
          "Extended support",
          "Rush delivery",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Design Your Perfect Logo",
    ctaSubtext: "Create a unique brand identity that sets you apart",
  },
  poster: {
    title: "Poster & Flyer Design",
    subtitle: "Eye-Catching Promotional Materials",
    icon: "📄",
    heroGradient: "from-pink-50 to-rose-50",
    aboutTitle: "About Poster & Flyer Design",
    aboutContent:
      "Make a lasting impression with professionally designed posters and flyers. Our creative team develops visually stunning marketing materials that grab attention and drive results for your campaigns.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Custom design concepts",
      "Print-ready files",
      "Multiple layout options",
      "Brand consistency",
      "Unlimited revisions",
      "Various sizes and formats",
      "High-quality images",
      "Professional copywriting support",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$199",
        features: [
          "1 design concept",
          "Single size",
          "2 revisions",
          "Print-ready files",
          "5-7 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$399",
        features: [
          "3 design concepts",
          "Multiple sizes",
          "Unlimited revisions",
          "High-resolution files",
          "3-5 days delivery",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$699",
        features: [
          "5+ design concepts",
          "Complete campaign design",
          "Matching materials",
          "Professional copywriting",
          "2-3 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Full campaign creation",
          "Dedicated designer",
          "Multiple revisions",
          "Marketing consultation",
          "Flexible timeline",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Create Your Marketing Materials",
    ctaSubtext: "Design posters and flyers that get results",
  },
  tshirt: {
    title: "T-Shirt Design",
    subtitle: "Custom Apparel Graphics",
    icon: "👕",
    heroGradient: "from-blue-50 to-cyan-50",
    aboutTitle: "About T-Shirt Design",
    aboutContent:
      "Bring your brand to life on custom t-shirts. Whether for merchandise, events, or team uniforms, our designers create eye-catching graphics that look amazing on apparel.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Original design concepts",
      "Multiple design options",
      "Print-ready files",
      "Color variations",
      "Unlimited revisions",
      "Different garment mockups",
      "Technical specifications",
      "Design consultation",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$149",
        features: [
          "1 design concept",
          "2 revisions",
          "Single color option",
          "Print-ready files",
          "5-7 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$299",
        features: [
          "3 design concepts",
          "Unlimited revisions",
          "Multiple colors",
          "Mockups included",
          "3-5 days delivery",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$499",
        features: [
          "5+ design concepts",
          "Full design package",
          "Advanced printing options",
          "Complete mockups",
          "2-3 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Unlimited concepts",
          "Custom graphics",
          "Professional mockups",
          "Design consultation",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Design Custom T-Shirts",
    ctaSubtext: "Create unique apparel graphics for your brand",
  },
  "ui-ux": {
    title: "App & Website UI/UX Design",
    subtitle: "User-Centered Digital Design",
    icon: "🎨",
    heroGradient: "from-indigo-50 to-purple-50",
    aboutTitle: "About App & Website UI/UX Design",
    aboutContent:
      "Create engaging digital experiences with professional UI/UX design. Our designers focus on user experience, functionality, and aesthetics to create interfaces that users love and businesses need.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design system",
      "Interactive prototypes",
      "User testing feedback",
      "Responsive design",
      "Accessibility compliance",
      "Developer handoff documentation",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$999",
        features: [
          "5-10 screens",
          "Basic wireframes",
          "Simple prototypes",
          "Limited revisions",
          "7-10 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Professional",
        price: "$2,499",
        features: [
          "15-20 screens",
          "Complete wireframes",
          "Interactive prototypes",
          "Unlimited revisions",
          "5-7 days delivery",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "$4,999",
        features: [
          "30+ screens",
          "Full design system",
          "Advanced prototypes",
          "User testing included",
          "3-5 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Custom scope",
          "Dedicated team",
          "Extended support",
          "Ongoing iterations",
          "Flexible timeline",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Design Your Digital Product",
    ctaSubtext: "Create beautiful, user-friendly interfaces",
  },
  // Marketing Services
  seo: {
    title: "SEO",
    subtitle: "Search Engine Optimization Services",
    icon: "🔍",
    heroGradient: "from-orange-50 to-red-50",
    aboutTitle: "About SEO Services",
    aboutContent:
      "Improve your online visibility and drive organic traffic with our comprehensive SEO services. We use proven strategies to boost your search engine rankings and help your business reach more customers.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Comprehensive SEO audit",
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO improvements",
      "Content optimization",
      "Backlink analysis and building",
      "Monthly performance reports",
      "Competitive analysis",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$399/month",
        features: [
          "Basic SEO optimization",
          "Keyword research",
          "On-page optimization",
          "Monthly reporting",
          "Email support",
        ],
        cta: "Start Now",
      },
      {
        name: "Professional",
        price: "$899/month",
        features: [
          "Advanced SEO strategy",
          "Content optimization",
          "Backlink building",
          "Technical SEO",
          "Bi-weekly reports",
        ],
        cta: "Start Now",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "$1,699/month",
        features: [
          "Complete SEO management",
          "Full content strategy",
          "Advanced link building",
          "Local SEO optimization",
          "Weekly reports",
        ],
        cta: "Start Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Customized strategy",
          "Dedicated specialist",
          "Flexible commitment",
          "Priority support",
          "Real-time analytics",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Boost Your Search Rankings",
    ctaSubtext: "Get more organic traffic with professional SEO",
  },
  "ecommerce-seo": {
    title: "Ecommerce SEO",
    subtitle: "E-Commerce Search Optimization",
    icon: "🛒",
    heroGradient: "from-green-50 to-lime-50",
    aboutTitle: "About Ecommerce SEO",
    aboutContent:
      "Increase your online store visibility and sales with specialized ecommerce SEO. We optimize your products, categories, and entire site to rank higher and attract more buyers.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Product page optimization",
      "Category page SEO",
      "Schema markup implementation",
      "Technical SEO for ecommerce",
      "Conversion rate optimization",
      "Competitive product analysis",
      "Sales performance tracking",
      "Monthly optimization reports",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$499/month",
        features: [
          "Up to 50 products",
          "Basic optimization",
          "Monthly reporting",
          "Email support",
          "3-month commitment",
        ],
        cta: "Start Now",
      },
      {
        name: "Professional",
        price: "$999/month",
        features: [
          "Up to 200 products",
          "Advanced optimization",
          "Conversion optimization",
          "Bi-weekly reports",
          "3-month commitment",
        ],
        cta: "Start Now",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "$1,999/month",
        features: [
          "Unlimited products",
          "Full store optimization",
          "Advanced analytics",
          "Weekly reports",
          "Flexible commitment",
        ],
        cta: "Start Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Custom strategy",
          "Dedicated team",
          "Full support",
          "Growth strategy",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Increase E-Commerce Sales",
    ctaSubtext: "Get more visibility and sales for your online store",
  },
  email: {
    title: "Email Marketing",
    subtitle: "Targeted Email Campaigns",
    icon: "📧",
    heroGradient: "from-pink-50 to-rose-50",
    aboutTitle: "About Email Marketing Services",
    aboutContent:
      "Build strong customer relationships and drive sales with professional email marketing campaigns. Our team creates engaging, personalized emails that convert.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Email strategy development",
      "Campaign creation and design",
      "Audience segmentation",
      "Personalization and automation",
      "A/B testing optimization",
      "Performance analytics",
      "List building strategies",
      "Compliance and deliverability",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$299/month",
        features: [
          "Up to 5,000 subscribers",
          "2 campaigns per month",
          "Basic templates",
          "Standard analytics",
          "Email support",
        ],
        cta: "Start Now",
      },
      {
        name: "Professional",
        price: "$699/month",
        features: [
          "Up to 25,000 subscribers",
          "Unlimited campaigns",
          "Custom templates",
          "Advanced automation",
          "Bi-weekly reports",
        ],
        cta: "Start Now",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "$1,299/month",
        features: [
          "Unlimited subscribers",
          "Full automation",
          "A/B testing",
          "Advanced segmentation",
          "Weekly strategy calls",
        ],
        cta: "Start Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Custom campaigns",
          "Dedicated marketer",
          "Growth strategy",
          "24/7 support",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Launch Email Campaigns",
    ctaSubtext: "Drive sales and engagement with email marketing",
  },
  // Development Services
  website: {
    title: "Website Development",
    subtitle: "Custom Web Development",
    icon: "🌐",
    heroGradient: "from-blue-50 to-cyan-50",
    aboutTitle: "About Website Development",
    aboutContent:
      "Get a professional, high-performing website built with the latest technologies. Our developers create fast, secure, and scalable websites that help your business grow online.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Responsive design",
      "Fast performance optimization",
      "SEO-friendly structure",
      "Security implementation",
      "Cross-browser compatibility",
      "Content management system",
      "Analytics setup",
      "Ongoing maintenance and support",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$1,499",
        features: [
          "5-10 pages",
          "Responsive design",
          "Basic SEO",
          "Contact form",
          "30 days support",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$3,499",
        features: [
          "15-20 pages",
          "Advanced features",
          "CMS integration",
          "Payment integration",
          "90 days support",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$7,999",
        features: [
          "Unlimited pages",
          "Custom functionality",
          "Advanced analytics",
          "API integrations",
          "6 months support",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Enterprise solutions",
          "Dedicated team",
          "Custom development",
          "24/7 support",
          "Long-term partnership",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Build Your Website",
    ctaSubtext: "Get a professional website that drives results",
  },
  wordpress: {
    title: "WordPress Development",
    subtitle: "Professional WordPress Solutions",
    icon: "📝",
    heroGradient: "from-purple-50 to-pink-50",
    aboutTitle: "About WordPress Development",
    aboutContent:
      "Leverage the power of WordPress with custom-built solutions. Our developers create flexible, easy-to-manage WordPress sites with custom themes and plugins.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Custom theme development",
      "Plugin customization",
      "SEO optimization",
      "Performance tuning",
      "Security hardening",
      "Backup and disaster recovery",
      "Training and documentation",
      "Ongoing support and updates",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$999",
        features: [
          "Theme customization",
          "Basic plugins",
          "SEO setup",
          "Mobile responsive",
          "30 days support",
        ],
        cta: "Order Now",
      },
      {
        name: "Professional",
        price: "$2,499",
        features: [
          "Custom theme",
          "Advanced plugins",
          "E-commerce ready",
          "Performance optimization",
          "90 days support",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "$5,999",
        features: [
          "Full custom development",
          "Complete plugin suite",
          "Advanced integrations",
          "Ongoing optimization",
          "6 months support",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Custom solutions",
          "Dedicated developer",
          "Extended support",
          "Maintenance plans",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Build Your WordPress Site",
    ctaSubtext: "Get a powerful, flexible WordPress website",
  },
  shopify: {
    title: "Shopify Store Development",
    subtitle: "E-Commerce Store Solutions",
    icon: "🛍️",
    heroGradient: "from-orange-50 to-amber-50",
    aboutTitle: "About Shopify Store Development",
    aboutContent:
      "Launch a profitable online store with professional Shopify development. We build fast, secure stores with excellent user experience and conversion optimization.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Theme customization or custom design",
      "Product catalog setup",
      "Payment gateway integration",
      "Shipping configuration",
      "Security and SSL setup",
      "Conversion rate optimization",
      "App integration",
      "Ongoing technical support",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$1,999",
        features: [
          "Theme customization",
          "Up to 50 products",
          "Payment integration",
          "Basic apps",
          "30 days support",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$3,999",
        features: [
          "Custom theme design",
          "Unlimited products",
          "Multiple payment gateways",
          "Advanced apps",
          "90 days support",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$7,999",
        features: [
          "Complete custom design",
          "Custom app development",
          "Advanced integrations",
          "Optimization strategy",
          "6 months support",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Enterprise solutions",
          "Multi-channel selling",
          "Custom functionality",
          "Dedicated support team",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Launch Your Shopify Store",
    ctaSubtext: "Build a high-converting e-commerce store",
  },
  mobile: {
    title: "Mobile Apps Development",
    subtitle: "iOS & Android App Development",
    icon: "📱",
    heroGradient: "from-green-50 to-emerald-50",
    aboutTitle: "About Mobile Apps Development",
    aboutContent:
      "Reach your customers on mobile devices with professional app development. We build native and cross-platform apps for iOS and Android that are fast, secure, and user-friendly.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Cross-platform development",
      "User-friendly interface design",
      "API integration",
      "Database development",
      "Push notifications",
      "Offline functionality",
      "App store submission",
      "Post-launch support",
    ],
    pricing: [
      {
        name: "MVP",
        price: "$9,999",
        features: [
          "Single platform (iOS or Android)",
          "Core features",
          "Basic UI/UX",
          "Simple backend",
          "30 days support",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$19,999",
        features: [
          "Both iOS and Android",
          "Advanced features",
          "Professional design",
          "Robust backend",
          "90 days support",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$39,999",
        features: [
          "Full-featured app",
          "Advanced integrations",
          "Real-time features",
          "Analytics and tracking",
          "6 months support",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Enterprise apps",
          "Complex features",
          "Dedicated team",
          "Long-term support",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Build Your Mobile App",
    ctaSubtext: "Reach customers with a professional mobile application",
  },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <p className="text-foreground/70 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <a
            href="/services/writing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Back to Services
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sidebar-background to-sidebar-background/80 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 flex justify-center text-5xl">{service.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {service.aboutTitle}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {service.aboutContent}
            </p>
          </div>
        </div>
      </section>

      {/* Features/What's Included Section */}
      <section className="py-16 sm:py-24 bg-sidebar-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center">
            {service.featuresTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground/70">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-foreground/70">
              Choose the package that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-sidebar-primary bg-gradient-to-br from-sidebar-primary/5 to-sidebar-accent/5 md:scale-105 shadow-lg"
                    : "border-sidebar-border bg-card hover:border-sidebar-primary hover:shadow-md"
                } ${plan.isCustom ? "border-sidebar-accent bg-gradient-to-br from-sidebar-accent/5 to-sidebar-accent/10" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-sidebar-primary to-sidebar-accent text-sidebar-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-sidebar-primary to-sidebar-accent bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-sidebar-primary flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-foreground/70 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-sidebar-primary to-sidebar-accent text-sidebar-primary-foreground hover:shadow-lg"
                      : plan.isCustom
                        ? "border-2 border-sidebar-accent text-sidebar-accent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        : "border-2 border-sidebar-primary text-sidebar-primary hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-sidebar-primary to-sidebar-accent text-sidebar-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {service.ctaText}
          </h2>
          <p className="text-lg text-white/90 mb-8">{service.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-sidebar-background text-sidebar-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow border border-sidebar-border">
              Order Now <ArrowRight size={20} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 border-2 border-sidebar-primary text-sidebar-primary px-8 py-3 rounded-lg font-semibold hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors">
              Chat with Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
