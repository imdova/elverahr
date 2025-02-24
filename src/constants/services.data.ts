import { ServiceType } from "@/types";
import {
  BarChart,
  Globe,
  LaptopMinimalCheck,
  Router,
  UserRound,
} from "lucide-react";

// export const services = [
//   {
//     id: 1,
//     title: "HR Consultancy",
//     description: "Strategic HR Solutions for Sustainable Growth",
//     icon: LaptopMinimalCheck,
//   },
//   {
//     id: 2,
//     title: "Talent Acquisition",
//     description: "Finding the Right Talent for Your Organization",
//     icon: UserRound,
//   },
//   {
//     id: 3,
//     title: "Employee Engagement",
//     description: "Creating a Workplace Where People Thrive",
//     icon: BarChart,
//   },
//   {
//     id: 4,
//     title: "Training & Development",
//     description: "Empowering Your Team for Future Success.",
//     icon: Globe,
//   },
//   {
//     id: 5,
//     title: "HR Outsourcing",
//     description: "Streamlined HR Solutions for Your Business.",
//     icon: Router,
//   },
// ];

export const services: ServiceType[] = [
  {
    id: "1",
    title: "HR Consultancy",
    description: "Strategic HR Solutions for Sustainable Growth",
    details:
      "At Elvera HR, we understand that every organization is unique. Our HR consultancy services are designed to align your HR practices with your business goals, ensuring long-term success.",
    icon: LaptopMinimalCheck,
    image:
      "https://img.freepik.com/free-photo/satisfied-businessman-company-employer-wearing-suit-handshake-new-employee-get-hired-job-interview-man-hr-manager-employ-successful-candidate-shake-hand-business-meeting-placement-concept_482257-5113.jpg?t=st=1740404268~exp=1740407868~hmac=a376899837b503a8f283d9a772a218bdeada85e6bd6945e78cc55172eed2b847&w=1380",
    offers: [
      "HR strategy development and implementation.",
      "Organizational design and restructuring.",
      "Policy and procedure development.",
      "Compliance and risk management.",
    ],
    records: {
      egypt:
        "Partnered with a leading manufacturing company to redesign their HR structure, resulting in a 20% increase in operational efficiency.",
      saudi:
        "Assisted a retail chain in developing a compliance framework, reducing legal risks by 30%",
    },
    qustionContent: [
      "Tailored solutions that fit your specific needs",
      "Expert guidance from seasoned HR professionals",
      "A focus on driving measurable results",
    ],
  },
  {
    id: "2",
    title: "Talent Acquisition",
    description: "Finding the Right Talent for Your Organization",
    details:
      "Your people are your greatest asset. At Elvera HR, we specialize in finding the right talent to drive your organization forward.",
    icon: UserRound,
    image:
      "https://img.freepik.com/free-photo/entrepreneurs-discussing-work-results-meeting_1163-5277.jpg?t=st=1740404298~exp=1740407898~hmac=545123b691dd88bc3102a46f6de058fb425d27f67885fd656f75137db325e4a8&w=740",
    offers: [
      "End-to-end recruitment services.",
      "Employer branding and candidate experience enhancement.",
      "Executive search and headhunting.",
      "Recruitment process outsourcing (RPO).",
    ],
    records: {
      egypt:
        "Successfully recruited 50+ IT professionals for a tech startup, reducing time-to-hire by 40%",
      saudi:
        "Filled 100+ positions for a healthcare provider within 3 months, achieving a 95% retention rate.",
    },
    qustionContent: [
      "Proven track record of successful placements",
      "Access to a vast network of qualified candidates",
      "Streamlined recruitment processes to save you time and resources",
    ],
  },
  {
    id: "3",
    title: "Employee Engagement",
    description: "Creating a Workplace Where People Thrive",
    details:
      "A motivated and engaged workforce is the key to success. At Elvera HR, we design programs that inspire and empower your employees.",
    icon: BarChart,
    image:
      "https://img.freepik.com/free-photo/dissatisfied-female-executive-blaming-threatening-male-employee-team-meeting_1163-4713.jpg?t=st=1740404327~exp=1740407927~hmac=5babf9219f328c4112a370c6815734051cdeb605ae289fe9e0df17106b917c25&w=1380",
    offers: [
      "Employee engagement surveys and analysis",
      "Recognition and reward programs.",
      "Team-building activities and workshops.",
      "Communication and feedback systems.",
    ],
    records: {
      egypt:
        "mplemented an engagement program for a logistics company, increasing employee satisfaction by 35%.",
      saudi:
        "Designed a recognition program for a financial services firm, reducing turnover by 25%.",
    },
    qustionContent: [
      "Customized solutions to fit your company culture",
      "Proven methods to boost morale and productivity",
      "A focus on creating a positive and inclusive workplace",
    ],
  },
  {
    id: "4",
    title: "Training & Development",
    description: "Empowering Your Team for Future Success",
    details:
      "Investing in your employees growth is investing in your organizations future. At Elvera HR, we provide training and development programs that equip your team with the skills they need to succeed.",
    icon: Globe,
    image:
      "https://img.freepik.com/free-photo/headhunters-interviewing-female-job-candidate_1163-4674.jpg?t=st=1740404354~exp=1740407954~hmac=0ed7b9a741149575b9ac838aadedc912d4e226ef5129fe9eca655a3e35c2a541&w=1380",
    offers: [
      "Leadership and management training.",
      "Technical and soft skills development.",
      "Onboarding and orientation programs.",
      "Customized training solutions",
    ],
    records: {
      egypt:
        "Delivered leadership training for a construction company, resulting in 80% of participants being promoted within a year.",
      saudi:
        "Conducted technical upskilling programs for an oil and gas company, improving operational efficiency by 25% .",
    },
    qustionContent: [
      "Experienced trainers with industry expertise",
      "Interactive and engaging training methods",
      " Programs tailored to your organizations needs",
    ],
  },
  {
    id: "5",
    title: "HR Outsourcing",
    description: "Streamlined HR Solutions for Your Business",
    details:
      "Focus on your core business while we handle your HR operations. At Elvera HR, we provide comprehensive HR outsourcing services to meet your needs.",
    icon: Router,
    image:
      "https://img.freepik.com/free-photo/business-colleagues-working-reports-communicating-while-working-office-focus-is-woman_637285-1061.jpg?t=st=1740404391~exp=1740407991~hmac=9feefe7f4765de94ccac72fa473f69d6a4500cddef3b5e1a7294426fd2f1cb7c&w=1380",
    offers: [
      "Payroll processing and administration.",
      "Benefits administration and employee records management.",
      "Compliance and risk management.",
      "HRIS implementation and support.",
    ],
    records: {
      egypt:
        "Managed payroll for a retail chain with 500+ employees,  reducing errors by 95%.",
      saudi:
        "Provided HR outsourcing for a hospitality group, saving 20% on HR-related costs.",
    },
    qustionContent: [
      "Cost-effective solutions to reduce overhead",
      "Expertise in managing complex HR operations",
      "Scalable services that grow with your business",
    ],
  },
];
