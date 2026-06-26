export const BRAND = {
  company: "Softchariot Technologies",
  product: "Online Estimation Software",
  tagline: "Professional Software for Civil Structure Projects & Estimates",
  email: "mahesh07.waskar@gmail.com",
  phone: "+919823207993",
  phoneDisplay: "+91 98232 07993",
  location: "India",
  founderPhoto:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&h=480&fit=crop&crop=face",
  downloadUrl: "#",
  loginUrl: "/login",
  version: "1.0.0",
  updated: "June 2026"
};

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#clients", label: "Who It's For" },
  { href: "#contact", label: "Contact" }
];

export const FEATURES = [
  {
    title: "Structure Project Preparation",
    description:
      "Create complete structure project documents with standardized formats used in PWD and CPWD submissions.",
    icon: "FileText"
  },
  {
    title: "Detailed Estimate & BOQ",
    description:
      "Generate item-wise estimates with quantities, rates, and amounts. Export ready-to-submit BOQ and abstract sheets.",
    icon: "Table"
  },
  {
    title: "Schedule of Rates Integration",
    description:
      "Works with DSR and departmental schedule of rates. Update rates easily and maintain consistency across projects.",
    icon: "BarChart3"
  },
  {
    title: "Offline Desktop Application",
    description:
      "No internet required. Your project data stays on your machine — secure and accessible even in remote field offices.",
    icon: "HardDrive"
  },
  {
    title: "Multi-User & Role Support",
    description:
      "Configure access for junior engineers, section officers, and executive engineers with appropriate permissions.",
    icon: "Users"
  },
  {
    title: "Regular Updates & Support",
    description:
      "Stay current with latest rate revisions, format changes, and receive direct support from the developer team.",
    icon: "RefreshCw"
  }
];

export const STEPS = [
  {
    step: "01",
    title: "Create Project",
    description: "Define project details — name, location, department, and work category."
  },
  {
    step: "02",
    title: "Add Structure Items",
    description: "Enter structural elements with dimensions, specifications, and drawing references."
  },
  {
    step: "03",
    title: "Generate Estimate",
    description: "Auto-calculate quantities and apply schedule of rates to produce item-wise estimates."
  },
  {
    step: "04",
    title: "Export & Submit",
    description: "Print or export BOQ, abstract, and project reports in standard submission formats."
  }
];

export const CLIENTS = [
  {
    abbr: "PWD",
    title: "Public Works Department",
    description:
      "State PWD engineers preparing structure projects, bridge estimates, and building works for administrative approval."
  },
  {
    abbr: "CPWD",
    title: "Central Public Works Dept.",
    description:
      "CPWD division offices handling central government building and infrastructure estimate preparation."
  },
  {
    abbr: "MC",
    title: "Municipal Corporations",
    description:
      "City and town municipal engineers managing local infrastructure, roads, drains, and public building projects."
  },
  {
    abbr: "LB",
    title: "Local Bodies & Panchayats",
    description:
      "Block and district level engineers preparing estimates for rural and semi-urban development works."
  }
];

export const ESTIMATE_ROWS = [
  { sr: "1", item: "Excavation in ordinary soil", qty: "120 m³", rate: "₹ 285", amount: "₹ 34,200" },
  { sr: "2", item: "PCC M15 (1:2:4)", qty: "45 m³", rate: "₹ 4,850", amount: "₹ 2,18,250" },
  { sr: "3", item: "RCC M25 in foundation", qty: "32 m³", rate: "₹ 7,200", amount: "₹ 2,30,400" },
  { sr: "4", item: "Steel reinforcement Fe 500D", qty: "2.8 MT", rate: "₹ 62,000", amount: "₹ 1,73,600" }
];
