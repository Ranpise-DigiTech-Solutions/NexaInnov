// src/data/courses.ts
export type Course = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  trainer: string;
  duration: string;
  durationInHours: number;
  objectives: string[];
  goals: string[];
  audience: string[];
  lessons: { title: string; time: string; objective: string }[];
};

export const courseList: Course[] = [
  {
    slug: "infor-m3-full",
    title: "Infor M3 Full Training Program",
    subtitle: "Complete 5‑Module Fast‑Track Program",
    description:
      "A 168‑hour immersive workshop including COM, MOM, POM, PDG, and WHM modules. Choose your region to calculate pricing.",
    image: "/images/courses_4.jpg",
    trainer: "Rasika Jayathilake",
    duration: "6 weeks, 6 hrs/day, 5 days/week",
    durationInHours: 168,
    objectives: [
      "Master all core Infor M3 modules in one cohesive track",
      "Hands‑on experience across PDG, COM, WHM, POM & MOM",
      "Small batch Format (4–6 participants)",
      "Support for database setup & post‑course Q&A",
    ],
    goals: [
      "Comprehensive ERP Infor M3 proficiency",
      "Post-training support (up to 4 hours)",
      "Certificate of Completion",
    ],
    audience: ["Consultants", "Enterprises seeking full‑stack M3 skills"],
    lessons: [],
  },
  {
    slug: "infor-m3-pdg",
    title: "Infor M3 Product Data & General Settings (PDG)",
    subtitle: "Configure Products, Customers & Supplier Masters",
    description:
      "Item hierarchy, general settings, UoM, customer and supplier configuration. Compatible with Infor M3 v13.4 and earlier.",
    image: "/images/courses_4.jpg",
    trainer: "Rasika Jayathilake",
    duration: "5 days, 6 hrs/day",
    durationInHours: 30,
    objectives: [
      "Overview of PDG module",
      "Strategies for master data management",
      "Hands‑on item/customer/supplier configurations",
      "Interactive peer environment",
    ],
    goals: [
      "Proficiency in PDG module",
      "4 hours post-training support",
      "Certificate of Attendance",
    ],
    audience: [
      "Master data managers",
      "M3 consultants",
      "Product & supplier data specialists",
    ],
    lessons: [
      { title: "Infor M3 Introduction", time: "2 hrs", objective: "UI & architecture overview" },
      { title: "Create Item Master", time: "4 hrs", objective: "Define item base data" },
      { title: "Warehouse Connection", time: "4 hrs", objective: "Link item to facility" },
      { title: "Modify Facility Links", time: "2 hrs", objective: "Adjust item‑facility mapping" },
      { title: "Item Hierarchy", time: "2 hrs", objective: "Create hierarchy structures" },
      { title: "Alternate UoM", time: "2 hrs", objective: "Configure alternate units" },
      { title: "Customer Master Data", time: "8 hrs", objective: "Populate customer commercial data" },
      { title: "Supplier Setup", time: "6 hrs", objective: "Configure supplier‑item purchase settings" },
    ],
  },
  {
    slug: "infor-m3-com",
    title: "Infor M3 Customer Order Management (COM)",
    subtitle: "Efficient Order Processing & Configuration",
    description:
      "Order-to-cash workflows, pricing, discounts and output forms. Infor M3 v13.4‑compatible.",
    image: "/images/courses_4.jpg",
    trainer: "Rasika Jayathilake",
    duration: "6 days, 6 hrs/day",
    durationInHours: 36,
    objectives: [
      "Overview of the Infor M3 COM module",
      "Best practices in order management",
      "Hands-on order processing & configuration",
      "Networking with industry peers",
    ],
    goals: [
      "Expertise in COM module",
      "4‑hour post‑course support",
      "Certificate of Attendance",
    ],
    audience: [
      "Order management teams",
      "Consultants implementing COM",
      "Professionals bridging modules",
    ],
    lessons: [
      { title: "Overview", time: "4 hrs", objective: "Define the order process" },
      { title: "Processing Orders", time: "8 hrs", objective: "Identify key steps & programs" },
      { title: "Configuring Orders", time: "10 hrs", objective: "Set up order configuration" },
      { title: "Pricing & Discounts", time: "8 hrs", objective: "Define pricing and discount rules" },
      { title: "Panels & Output Forms", time: "6 hrs", objective: "Understand output formats" },
    ],
  },
  {
    slug: "infor-m3-whm",
    title: "Infor M3 Warehouse Management (WHM)",
    subtitle: "Optimize Distribution & Warehouse Processes",
    description:
      "Picking/packing, dispatch, inventory structure, DO & RO flows. Compatible with v13.4 and earlier.",
    image: "/images/courses_4.jpg",
    trainer: "Rasika Jayathilake",
    duration: "5 days, 6 hrs/day",
    durationInHours: 30,
    objectives: [
      "Overview of WHM module",
      "Best practices in warehouse operations",
      "Hands-on outbound/inbound flows",
      "Logistics networking opportunities",
    ],
    goals: [
      "Expertise in WHM workflows",
      "Post‑training support",
      "Certificate of Attendance",
    ],
    audience: ["Warehouse teams", "Supply chain consultants", "Distribution professionals"],
    lessons: [
      { title: "Overview", time: "2 hrs", objective: "Role of WHM in distribution" },
      { title: "DO Processing", time: "4 hrs", objective: "Distribution order workflow" },
      { title: "Inventory Levels", time: "2 hrs", objective: "Inventory structure explanation" },
      { title: "Configuring Items", time: "2 hrs", objective: "Set up warehouse items" },
      { title: "Inventory Controls", time: "4 hrs", objective: "Manage stock flows" },
      { title: "ROs & DOs Config", time: "4 hrs", objective: "Configure requisition/distribution orders" },
      { title: "Dispatch", time: "4 hrs", objective: "Manage dispatch setup" },
      { title: "Picking & Packing", time: "2 hrs", objective: "Set picking/packing rules" },
      { title: "Document Setup", time: "4 hrs", objective: "Configure WHM output docs" },
      { title: "Panels & Forms", time: "2 hrs", objective: "View panel & form overview" },
    ],
  },
  {
    slug: "infor-m3-pom",
    title: "Infor M3 Purchase Order Management (POM)",
    subtitle: "Procurement Configuration & Processing",
    description:
      "PO creation, receiving flows, inspections, procurement statistics and output forms. For M3 v13.4 or earlier.",
    image: "/images/courses_4.jpg",
    trainer: "Rasika Jayathilake",
    duration: "5 days, 6 hrs/day",
    durationInHours: 30,
    objectives: [
      "Complete overview of POM process",
      "Best practices around PO creation & receiving",
      "Hands-on lifecycle simulations",
      "Networking with procurement experts",
    ],
    goals: [
      "POM module mastery",
      "Support after course completion",
      "Certificate of Attendance",
    ],
    audience: ["Procurement teams", "Supply chain consultants", "M3 POM implementers"],
    lessons: [
      { title: "Overview", time: "4 hrs", objective: "Define PO process activities" },
      { title: "Processing PO", time: "4 hrs", objective: "Identify flow steps" },
      { title: "Configuring PO", time: "6 hrs", objective: "Set up PO settings" },
      { title: "Goods Receiving", time: "6 hrs", objective: "Setup receiving & QA flows" },
      { title: "Procurement Stats", time: "4 hrs", objective: "Configure PO statistics" },
      { title: "Panels & Forms", time: "6 hrs", objective: "Explain warehouse output forms" },
    ],
  },
  {
    slug: "infor-m3-mom",
    title: "Infor M3 Manufacturing Order Management (MOM)",
    subtitle: "Manage Production & Manufacturing Workflows",
    description:
      "MOs, production statistics configuration, variant handling, and output formats in M3 v13.4.",
    image: "/images/courses_4.jpg",
    trainer: "Rasika Jayathilake",
    duration: "7 days, 6 hrs/day",
    durationInHours: 42,
    objectives: [
      "Comprehensive MOM overview",
      "Production order best practices",
      "Hands-on MO workflows and settings",
      "Networking with manufacturing pros",
    ],
    goals: [
      "Expert-level MOM proficiency",
      "Support up to 4 hours post-training",
      "Certificate of Attendance",
    ],
    audience: [
      "Manufacturing teams",
      "ERP Implementation consultants",
      "Professionals bridging modules",
    ],
    lessons: [
      { title: "Manufacturing Overview", time: "4 hrs", objective: "Describe M3 manufacturing workflows" },
      { title: "Processing MOs", time: "8 hrs", objective: "Execute MOs end-to-end" },
      { title: "Manufacturing Settings", time: "8 hrs", objective: "Configure MO workflows" },
      { title: "Product Structures", time: "8 hrs", objective: "Build structures properly" },
      { title: "Variants Management", time: "4 hrs", objective: "Handle MO variants" },
      { title: "Production Statistics", time: "4 hrs", objective: "Generate production reports" },
      { title: "Panels & Output Forms", time: "6 hrs", objective: "Configure forms" },
    ],
  },
];
