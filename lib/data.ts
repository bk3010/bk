export const site = {
  name: "Scale X Process & Engineering",
  shortName: "Scale X",
  tagline: "From Idea to Industry.",
  description:
    "Scale X Process & Engineering is a global industrial consultancy providing complete turnkey solutions for manufacturing industries — from concept, feasibility studies, engineering, approvals, construction, commissioning, to commercial production.",
  url: "https://www.scalexengineering.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "hello@scalexengineering.com",
};

export const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "+", label: "Global Clients" },
  { value: 15, suffix: "+", label: "Years of Experience" },
];

export const clients = [
  "NovaFoods Group",
  "Helix Pharma",
  "AquaPure Systems",
  "Vertex Chemicals",
  "SunGrid Renewables",
  "Meridian Dairy",
  "PolyCore Plastics",
  "Ironclad Steelworks",
  "TerraAgro Industries",
  "Crystal Beverages",
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "industrial-consulting",
    title: "Industrial Consulting",
    summary:
      "Strategic clarity before capital is committed — we validate the business case behind every plant.",
    icon: "strategy",
    items: [
      "Business planning",
      "Plant feasibility studies",
      "Market analysis",
      "Risk assessment",
      "Investment planning",
    ],
  },
  {
    slug: "government-approvals",
    title: "Government Approvals",
    summary:
      "End-to-end licensing and statutory clearances, managed by specialists who know the process.",
    icon: "shield",
    items: [
      "Factory License",
      "Pollution Control Consent",
      "Fire NOC",
      "Building Approval",
      "Electrical Approval",
      "Environmental Clearance",
      "FSSAI",
      "Drug License",
      "BIS Certification",
      "GMP",
      "MSME Registration",
      "Startup India",
    ],
  },
  {
    slug: "detailed-project-report",
    title: "Detailed Project Report",
    summary:
      "Bankable DPRs that align machinery, capacity, cost, and returns into one investable document.",
    icon: "report",
    items: [
      "Financial projections",
      "ROI modelling",
      "Machinery planning",
      "Cost estimation",
      "Plant layout",
      "Capacity planning",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    summary:
      "Multi-discipline engineering delivered by process, mechanical, electrical, and civil experts.",
    icon: "gear",
    items: [
      "Process Engineering",
      "Utility Engineering",
      "Mechanical Design",
      "Electrical Design",
      "Civil Design",
      "Structural Design",
      "Piping",
      "HVAC",
      "Automation",
      "Instrumentation",
    ],
  },
  {
    slug: "plant-design",
    title: "Plant Design",
    summary:
      "From 2D layouts to full BIM models — plants designed for flow, safety, and future expansion.",
    icon: "blueprint",
    items: [
      "2D Layout",
      "3D Plant Design",
      "Factory Layout",
      "BIM",
      "Utility Mapping",
      "Process Flow Diagrams",
    ],
  },
  {
    slug: "equipment-selection",
    title: "Equipment Selection",
    summary:
      "Independent technical evaluation that puts the right machine — not the loudest vendor — in your plant.",
    icon: "select",
    items: [
      "Vendor comparison",
      "Technical evaluation",
      "Tendering",
      "Procurement support",
      "Inspection",
    ],
  },
  {
    slug: "machinery-procurement",
    title: "Machinery Procurement",
    summary:
      "Global sourcing with factory inspections, negotiation leverage, and logistics handled for you.",
    icon: "globe",
    items: [
      "Global sourcing",
      "Vendor development",
      "Negotiation",
      "Factory inspection",
      "Logistics management",
    ],
  },
  {
    slug: "installation",
    title: "Installation",
    summary:
      "Disciplined site execution across mechanical, electrical, utility, and automation packages.",
    icon: "wrench",
    items: [
      "Mechanical erection",
      "Electrical installation",
      "Utility installation",
      "Automation & controls",
      "Pipeline works",
    ],
  },
  {
    slug: "commissioning",
    title: "Commissioning",
    summary:
      "From first trial batch to stable commercial production — validated, documented, and handed over.",
    icon: "rocket",
    items: [
      "Trial production",
      "Performance testing",
      "Validation",
      "Operator training",
      "Commercial production support",
    ],
  },
  {
    slug: "quality-systems",
    title: "Quality Systems",
    summary:
      "Certification-ready quality frameworks built into your operations, not bolted on afterwards.",
    icon: "badge",
    items: [
      "ISO 9001",
      "ISO 14001",
      "ISO 22000",
      "FSSC 22000",
      "HACCP",
      "GMP",
      "Documentation",
      "Audit support",
    ],
  },
  {
    slug: "sustainability",
    title: "Sustainability",
    summary:
      "Lower energy, water, and carbon footprints engineered into the plant from day one.",
    icon: "leaf",
    items: [
      "Solar systems",
      "Rainwater harvesting",
      "Wastewater treatment",
      "Energy audit",
      "Carbon reduction",
      "Green manufacturing",
    ],
  },
  {
    slug: "safety",
    title: "Safety",
    summary:
      "Fire, life, and process safety systems designed to protect people, assets, and uptime.",
    icon: "flame",
    items: [
      "Fire fighting systems",
      "Fire alarm systems",
      "Emergency planning",
      "Safety audit",
      "Risk assessment",
      "Compliance",
    ],
  },
  {
    slug: "insurance",
    title: "Insurance",
    summary:
      "The right industrial cover, negotiated well — with expert support when claims arise.",
    icon: "umbrella",
    items: [
      "Industrial insurance",
      "Machinery insurance",
      "Risk assessment",
      "Claim support",
    ],
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    summary:
      "Technical teams recruited, trained, and ready before your plant needs them.",
    icon: "people",
    items: [
      "Technical recruitment",
      "Plant staffing",
      "Training",
      "Contract manpower",
      "Permanent hiring",
    ],
  },
  {
    slug: "marketing-support",
    title: "Marketing Support",
    summary:
      "Go-to-market firepower for industrial products — from launch strategy to export markets.",
    icon: "megaphone",
    items: [
      "Product launch",
      "Industrial branding",
      "Market entry strategy",
      "Distribution strategy",
      "Export support",
      "Digital marketing",
    ],
  },
];

export const industries = [
  { name: "Food Processing", icon: "food", blurb: "Hygienic process lines from raw material intake to retail-ready packaging." },
  { name: "Dairy", icon: "dairy", blurb: "Milk reception, processing, and cold-chain plants built to global dairy standards." },
  { name: "Beverages", icon: "beverage", blurb: "Juice, carbonated, and bottled-water lines engineered for speed and hygiene." },
  { name: "Pharmaceutical", icon: "pharma", blurb: "GMP-compliant facilities with validated cleanrooms and utilities." },
  { name: "Chemical", icon: "chemical", blurb: "Safe, compliant chemical process plants with robust hazard engineering." },
  { name: "Cosmetics", icon: "cosmetics", blurb: "Precision blending and filling facilities for personal-care brands." },
  { name: "FMCG", icon: "fmcg", blurb: "High-throughput manufacturing built for fast-moving consumer demand." },
  { name: "Packaging", icon: "package", blurb: "Converting and packaging plants optimised for material efficiency." },
  { name: "Textile", icon: "textile", blurb: "Spinning, processing, and garmenting facilities with utility mastery." },
  { name: "Plastic", icon: "plastic", blurb: "Injection, blow, and extrusion plants with energy-efficient design." },
  { name: "Paper", icon: "paper", blurb: "Pulp and paper operations with water recovery at the core." },
  { name: "Steel", icon: "steel", blurb: "Heavy structural and metallurgical facilities engineered for scale." },
  { name: "Automobile", icon: "auto", blurb: "Component and assembly plants with lean flow and automation." },
  { name: "Renewable Energy", icon: "solar", blurb: "Solar and clean-energy manufacturing and captive power plants." },
  { name: "Cold Storage", icon: "snow", blurb: "Temperature-controlled storage designed for energy performance." },
  { name: "Warehouse", icon: "warehouse", blurb: "Modern logistics hubs with racking, docks, and automation planning." },
  { name: "Agro Processing", icon: "agro", blurb: "Post-harvest processing that adds value close to the farm." },
  { name: "Animal Feed", icon: "feed", blurb: "Feed mills with precise batching, milling, and pelleting systems." },
  { name: "Edible Oil", icon: "oil", blurb: "Extraction and refining plants with quality and yield in balance." },
  { name: "Minerals", icon: "mineral", blurb: "Mineral processing and beneficiation with robust materials handling." },
];

export const processSteps = [
  { title: "Idea", text: "You bring an ambition. We pressure-test it against markets, margins, and reality." },
  { title: "Consultation", text: "Structured discovery with our consultants to frame scope, scale, and strategy." },
  { title: "Feasibility", text: "Techno-economic feasibility studies that tell you whether — and how — to proceed." },
  { title: "Approvals", text: "Every license, NOC, and clearance secured while engineering moves in parallel." },
  { title: "Engineering", text: "Process, mechanical, electrical, civil, and automation design under one roof." },
  { title: "Procurement", text: "Machinery sourced globally, inspected at the factory, negotiated in your favour." },
  { title: "Construction", text: "Civil and structural works executed with tight supervision and safety discipline." },
  { title: "Installation", text: "Equipment erected, piped, wired, and integrated by specialist crews." },
  { title: "Commissioning", text: "Trials, performance tests, and validation until the plant meets its numbers." },
  { title: "Commercial Production", text: "Stable, certified production — with trained teams running the line." },
  { title: "Optimization", text: "Continuous improvement in yield, energy, and cost long after handover." },
];

export type Project = {
  title: string;
  industry: string;
  country: string;
  capacity: string;
  investment: string;
  year: number;
  description: string;
  challenge: string;
  solution: string;
  technology: string;
  roi: string;
  testimonial: string;
  client: string;
};

export const projects: Project[] = [
  {
    title: "Greenfield Dairy Processing Plant",
    industry: "Dairy",
    country: "India",
    capacity: "200,000 L/day",
    investment: "$12M",
    year: 2025,
    description:
      "Complete turnkey delivery of a modern dairy plant — from feasibility to commercial production in 14 months.",
    challenge:
      "A tight monsoon-constrained construction window and a fragmented milk collection network.",
    solution:
      "Parallel-tracked approvals and civil works, pre-fabricated process modules, and a hub-and-spoke chilling network design.",
    technology: "Automated CIP, PLC-SCADA process control, energy-recovery pasteurisation",
    roi: "Payback in 3.2 years against a 5-year projection",
    testimonial:
      "Scale X compressed a two-year project into fourteen months without a single compliance issue.",
    client: "Meridian Dairy",
  },
  {
    title: "Pharmaceutical Formulation Facility",
    industry: "Pharmaceutical",
    country: "UAE",
    capacity: "1.2B tablets/year",
    investment: "$28M",
    year: 2024,
    description:
      "WHO-GMP compliant oral solid dosage facility with validated cleanrooms and full utility qualification.",
    challenge:
      "Simultaneous compliance with UAE MOH, WHO-GMP, and EU-GMP expectations for future export markets.",
    solution:
      "A single harmonised URS and validation master plan covering all three regulatory frameworks from day one.",
    technology: "HVAC zoning to ISO 8/7, purified water generation & loop, BMS-integrated monitoring",
    roi: "Export approvals achieved 9 months ahead of business plan",
    testimonial:
      "The validation documentation was the cleanest our auditors had ever seen from a first submission.",
    client: "Helix Pharma",
  },
  {
    title: "Fruit Juice & Beverage Line",
    industry: "Beverages",
    country: "Kenya",
    capacity: "24,000 bottles/hour",
    investment: "$8M",
    year: 2024,
    description:
      "Aseptic juice processing and PET bottling plant serving East African retail markets.",
    challenge:
      "Unstable grid power and long equipment lead times from European suppliers.",
    solution:
      "Hybrid solar-diesel captive power design and a dual-vendor procurement strategy that cut lead time by 20 weeks.",
    technology: "Aseptic filling, tubular sterilisation, solar-hybrid captive power",
    roi: "18% lower unit energy cost than regional benchmark",
    testimonial:
      "They engineered around every constraint our market threw at them.",
    client: "Crystal Beverages",
  },
  {
    title: "Specialty Chemicals Complex",
    industry: "Chemical",
    country: "India",
    capacity: "45,000 MT/year",
    investment: "$35M",
    year: 2023,
    description:
      "Multi-product specialty chemicals plant with zero-liquid-discharge and full environmental clearance.",
    challenge:
      "Stringent environmental norms in a notified industrial zone with community sensitivity.",
    solution:
      "ZLD-first process design, closed-loop solvent recovery, and proactive stakeholder engagement through the EC process.",
    technology: "Zero liquid discharge, multi-effect evaporation, DCS-based batch control",
    roi: "Environmental clearance secured in a single review cycle",
    testimonial:
      "Scale X treated compliance as a design input, not an afterthought. That changed everything.",
    client: "Vertex Chemicals",
  },
  {
    title: "Solar Module Manufacturing Plant",
    industry: "Renewable Energy",
    country: "Vietnam",
    capacity: "1.5 GW/year",
    investment: "$52M",
    year: 2025,
    description:
      "High-automation photovoltaic module assembly plant with Industry 4.0 traceability.",
    challenge:
      "Aggressive ramp-up targets tied to committed module supply contracts.",
    solution:
      "Phased commissioning by line, with automation FAT completed at vendor works before shipment.",
    technology: "Automated stringing & lamination, MES with unit-level traceability, AI visual inspection",
    roi: "Full nameplate capacity reached 5 months after first module",
    testimonial:
      "Ramp-up was the fastest our investors had seen in the sector.",
    client: "SunGrid Renewables",
  },
  {
    title: "Cold Chain & Distribution Hub",
    industry: "Cold Storage",
    country: "Saudi Arabia",
    capacity: "18,000 pallet positions",
    investment: "$16M",
    year: 2023,
    description:
      "Multi-temperature cold storage and distribution hub serving national food retail networks.",
    challenge:
      "Extreme ambient temperatures driving energy cost risk across the asset's life.",
    solution:
      "High-efficiency ammonia refrigeration, envelope optimisation, and rooftop solar offsetting 30% of load.",
    technology: "NH3/CO2 cascade refrigeration, ASRS-ready racking design, rooftop solar",
    roi: "Energy cost 27% below regional cold-store average",
    testimonial:
      "An asset our operations team is genuinely proud to run.",
    client: "AquaPure Systems",
  },
  {
    title: "Edible Oil Refining Plant",
    industry: "Edible Oil",
    country: "Indonesia",
    capacity: "600 TPD",
    investment: "$22M",
    year: 2022,
    description:
      "Physical refining complex with fractionation and packaging for domestic and export markets.",
    challenge:
      "Yield losses and quality drift in the client's existing refining operations.",
    solution:
      "Modern physical refining with precise degumming and bleaching control, plus operator upskilling programs.",
    technology: "Physical refining, dry fractionation, automated blending & filling",
    roi: "Refining yield improved 1.8 percentage points",
    testimonial:
      "The yield improvement alone paid for the engineering fees many times over.",
    client: "TerraAgro Industries",
  },
  {
    title: "Automotive Components Plant",
    industry: "Automobile",
    country: "Mexico",
    capacity: "4M parts/year",
    investment: "$19M",
    year: 2022,
    description:
      "Precision machining and assembly facility supplying North American OEM programs.",
    challenge:
      "OEM PPAP timelines requiring production-ready quality systems at start-up.",
    solution:
      "IATF-aligned quality architecture built during design, with measurement systems commissioned alongside machines.",
    technology: "CNC machining cells, inline CMM inspection, andon-integrated lean flow",
    roi: "PPAP approval achieved on first submission",
    testimonial:
      "We hit OEM quality gates on day one. That never happens.",
    client: "Ironclad Steelworks",
  },
];

export const testimonials = [
  {
    quote:
      "Scale X took us from a business plan on paper to a running plant in under 18 months. Their single-team model removed every handover gap that usually kills timelines.",
    name: "Rajiv Menon",
    role: "Managing Director, Meridian Dairy",
  },
  {
    quote:
      "What sets them apart is commercial judgement. Every engineering decision was framed in terms of ROI, payback, and operating cost — the language a board understands.",
    name: "Sara Al-Farsi",
    role: "CEO, Helix Pharma",
  },
  {
    quote:
      "We had three consultants fail before Scale X. They secured our environmental clearance in one cycle and never missed a statutory deadline.",
    name: "Anil Deshpande",
    role: "Director, Vertex Chemicals",
  },
  {
    quote:
      "From machinery negotiation in Europe to commissioning in Nairobi, one team owned everything. That accountability is priceless.",
    name: "Grace Wanjiru",
    role: "Founder, Crystal Beverages",
  },
];

export const articles = [
  {
    title: "Feasibility First: Why 40% of Greenfield Plants Miss Their Business Case",
    category: "Whitepaper",
    date: "June 2026",
    excerpt:
      "The most expensive engineering mistakes are made before engineering begins. A disciplined feasibility stage protects capital better than any contract clause.",
    read: "12 min read",
  },
  {
    title: "The New Rules of Environmental Clearance for Process Industries",
    category: "Regulatory Update",
    date: "May 2026",
    excerpt:
      "Recent amendments have changed documentation, public hearing, and monitoring requirements. Here's what project owners need to know before filing.",
    read: "8 min read",
  },
  {
    title: "Designing Dairy Plants for a 2-Degree World",
    category: "Technical Article",
    date: "May 2026",
    excerpt:
      "Energy-recovery pasteurisation, heat-pump CIP, and solar-thermal integration can cut dairy plant energy intensity by a third.",
    read: "10 min read",
  },
  {
    title: "Case Study: 14-Month Turnkey Delivery of a 200 KLPD Dairy Plant",
    category: "Case Study",
    date: "April 2026",
    excerpt:
      "How parallel-tracked approvals, modular process skids, and disciplined procurement compressed a two-year schedule.",
    read: "15 min read",
  },
  {
    title: "Machinery Procurement: The Hidden 15% Most Buyers Leave on the Table",
    category: "Industry Blog",
    date: "March 2026",
    excerpt:
      "Structured tendering, factory inspections, and Incoterm strategy routinely recover double-digit savings on capital equipment.",
    read: "7 min read",
  },
  {
    title: "From HACCP to FSSC 22000: A Practical Certification Roadmap",
    category: "Technical Article",
    date: "February 2026",
    excerpt:
      "A stage-by-stage route to food safety certification that operations teams can actually sustain after the auditors leave.",
    read: "9 min read",
  },
];

export const faqs = [
  {
    q: "What does 'turnkey' actually include?",
    a: "Everything from feasibility studies, DPR, and statutory approvals through engineering, procurement, construction management, installation, commissioning, and stabilised commercial production. You receive a running plant — not a stack of drawings.",
  },
  {
    q: "Do you work outside India?",
    a: "Yes. We have delivered projects across the Middle East, Africa, and Southeast Asia, with procurement networks in Europe and China. Our engineering standards adapt to local codes in every geography.",
  },
  {
    q: "Can you help with only one stage, like approvals or a DPR?",
    a: "Absolutely. Many clients engage us for a single service — a feasibility study, government approvals, or equipment selection — and expand the scope later. Every service stands on its own.",
  },
  {
    q: "How do you charge for projects?",
    a: "Depending on scope: fixed-fee for studies and DPRs, milestone-based fees for turnkey delivery, and retainers for long-term advisory. Every proposal includes a transparent fee breakdown.",
  },
  {
    q: "What size of projects do you take on?",
    a: "From compact $1M processing units to $50M+ greenfield complexes. Our process scales in both directions — smaller projects get the same engineering rigour.",
  },
  {
    q: "How long does a typical greenfield project take?",
    a: "A mid-size food processing plant typically runs 12–18 months from feasibility sign-off to commercial production. Complex regulated facilities (pharma, chemicals) run 18–30 months.",
  },
];

export const offices = [
  { city: "Mumbai", country: "India", role: "Global Headquarters", address: "Level 21, One Horizon Centre, Bandra Kurla Complex", phone: "+91 98765 43210" },
  { city: "Dubai", country: "UAE", role: "Middle East & Africa", address: "Office 1804, Jumeirah Lake Towers", phone: "+971 4 555 0123" },
  { city: "Singapore", country: "Singapore", role: "Asia-Pacific", address: "#12-01, Marina Bay Financial Centre", phone: "+65 6555 0188" },
  { city: "Nairobi", country: "Kenya", role: "East Africa", address: "Westlands Business Park, Waiyaki Way", phone: "+254 700 555 012" },
];

export const jobs = [
  { title: "Senior Process Engineer", dept: "Engineering", location: "Mumbai", type: "Full-time" },
  { title: "Project Manager — Turnkey Delivery", dept: "Projects", location: "Dubai", type: "Full-time" },
  { title: "Regulatory & Approvals Specialist", dept: "Compliance", location: "Mumbai", type: "Full-time" },
  { title: "Electrical Design Engineer", dept: "Engineering", location: "Mumbai", type: "Full-time" },
  { title: "Procurement Lead — Capital Equipment", dept: "Procurement", location: "Singapore", type: "Full-time" },
  { title: "Business Analyst — Feasibility Studies", dept: "Consulting", location: "Mumbai", type: "Full-time" },
  { title: "Commissioning Engineer", dept: "Site Operations", location: "Field / Rotational", type: "Full-time" },
  { title: "Graduate Engineer Trainee", dept: "Engineering", location: "Mumbai", type: "Internship" },
];

export const values = [
  { title: "Integrity of Numbers", text: "Every projection we publish is one we would invest against ourselves." },
  { title: "Single-Team Accountability", text: "One team owns your project from idea to industry. No handover gaps, no finger-pointing." },
  { title: "Engineering Rigour", text: "Codes, standards, and calculations first. Opinions second." },
  { title: "Client's Capital, Guarded", text: "We negotiate, evaluate, and design as if the money were our own." },
  { title: "Safety Without Compromise", text: "No schedule, budget, or client pressure outranks the safety of people." },
  { title: "Built to Improve", text: "Handover is the beginning. We design plants that keep getting better." },
];

export const leadership = [
  { name: "Bhavin Chaudhary", role: "Founder & Chief Executive", bio: "Two decades leading turnkey industrial projects across food, pharma, and chemicals in 12 countries." },
  { name: "Dr. Priya Raghavan", role: "Chief Engineering Officer", bio: "PhD in Process Engineering; formerly led process design for global dairy and beverage majors." },
  { name: "Omar El-Sayed", role: "Director — Middle East & Africa", bio: "Specialist in regulated-market facility delivery and cross-border procurement." },
  { name: "Kenji Nakamura", role: "Head of Automation", bio: "Industry 4.0 architect with 60+ PLC/SCADA and MES deployments across Asia." },
  { name: "Anita Fernandes", role: "Director — Approvals & Compliance", bio: "Has secured 300+ statutory clearances with a first-cycle success rate above 90%." },
  { name: "Marcus Weber", role: "Head of Procurement", bio: "Built vendor networks across Europe and China covering 400+ equipment categories." },
];

export const milestones = [
  { year: "2011", event: "Founded in Mumbai as a process consulting practice for food industries." },
  { year: "2014", event: "First full turnkey delivery — a 50 TPD fruit processing plant in Gujarat." },
  { year: "2016", event: "Approvals & Compliance division launched; 100th statutory clearance secured." },
  { year: "2018", event: "International expansion — Dubai office opens; first project in East Africa." },
  { year: "2020", event: "Automation practice established; ISO 9001 & ISO 14001 certified." },
  { year: "2022", event: "250th project delivered; Singapore office opens for Asia-Pacific." },
  { year: "2024", event: "Sustainability engineering division launched; first 1.5 GW solar manufacturing plant." },
  { year: "2026", event: "500+ projects, 30+ industries, 100+ clients across four continents." },
];
