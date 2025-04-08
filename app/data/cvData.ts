export const cvData = {
  name: "NGUYEN DUY (DANNY)",
  contact: {
    address: "Burwood VIC 3151",
    phone: "(+61) 405392719",
    email: "duyaus205@gmail.com",
    linkedin: "duynguyen205",
  },
  careerProfile: [
    "Data Analyst with four years of experience, specializing in data analysis, visualization, and reporting using SQL, Python, and R to extract insights and support business decisions.",
    "Proficient in Power BI, Tableau, and Looker Studio, with expertise in automating workflows and enhancing reporting efficiency.",
    "Skilled in machine learning and deep learning, leveraging TensorFlow and PyTorch to develop predictive models and optimize business processes.",
    "Detail-oriented and analytical, ensuring data accuracy while identifying trends to drive innovation and continuous improvement.",
  ],
  experience: [
    {
      company: "DATABYTES - Deakin University",
      location: "Melbourne, VIC, Australia",
      title: "DATA SCIENTIST INTERN",
      period: "Jan 2024 - Oct 2024",
      responsibilities: [
        "Conducted market research and data analysis using SQL and PostgreSQL to support strategic decision-making.",
        "Developed and optimized web scraping pipelines and ETL workflows for automated data collection and processing.",
        "Managed and structured databases in MongoDB Atlas and PostgreSQL, improving data accessibility and query performance.",
        "Created synthetic datasets and trained machine learning models using scikit-learn and TensorFlow.",
        "Collaborated on backend tasks including data pipeline design, model integration, and data validation for deployment.",
      ],
    },
    {
      company: "AVERY DENNISON",
      location: "", // Add location if available
      title: "DATA TEAM LEADER",
      period: "March 2022 - February 2023",
      responsibilities: [
        "Work directly with managers and the director to monitor daily performance metrics, providing insights and detecting issues.",
        "Manage and conduct training to a team of 5 analysts to develop and deliver weekly and monthly performance reports.",
        "Take an active role in suggesting data-driven solutions to operational problems, optimizing processes, and improving overall efficiency.",
        "Conduct annual data audits and manage data for Compliance and Quality Audits.",
        "Calculate monthly OIP (Operation Incentive Plan) – a performance-based monthly bonus.",
        "Lead the design, development, and implementation of enhanced analytical, forecasting, and reporting methods, improving accuracy by 20%.",
      ],
    },
    {
      company: "AVERY DENNISON",
      location: "", // Add location if available
      title: "DATA ENGINEER ANALYST",
      period: "March 2020 - March 2022",
      responsibilities: [
        "Analyzed operational and sales data using statistical techniques to produce daily performance reports.",
        "Designed and implemented automated data collection systems using Excel, VBA, and SQL, improving efficiency and data quality by 20%.",
        "Extracted, cleaned, and managed data from both primary and secondary sources; built data pipelines and maintained systems using Oracle, SQL, and SAP.",
        "Conducted daily analysis of sales performance, order trends, and customer demand to support planning and forecasting.",
        "Streamlined repetitive workflows through VBA automation, reducing manual workload and lead time by 25%.",
        "Created over 15 data visualizations and dashboards in Power BI to present actionable insights to cross-functional teams.",
      ],
    },
    {
      company: "AVERY DENNISON",
      location: "", // Add location if available
      title: "BUSINESS ANALYST INTERN",
      period: "March 2019 - March 2020",
      responsibilities: [
        "Supported Sales and Customer Service teams in checking data integrity across internal systems.",
        "Assisted with Excel tasks such as data entry, cleaning, formatting, and report generation.",
        "Maintained and updated databases to ensure accuracy of product, order, and customer information.",
        "Performed data-related tasks and collaborated with teams to resolve discrepancies and support decision-making.",
      ],
    },
  ],
  education: [
    {
      degree: "Master Degree: Data Science",
      institution: "Deakin University, Burwood, Melbourne",
      period: "March 2023 - Feb 2025",
      details: ["Data Science"],
    },
    {
      degree: "Bachelor: Mathematics and Computing",
      institution: "University of Science - Vietnam National University, Ho Chi Minh City",
      period: "October 2016 - May 2021",
      details: ["Applied Mathematics"],
    },
  ],
  supplementaryWork: [
     {
      company: "Soulful Home Café",
      location: "Melbourne, VIC",
      period: "Aug 2024 – March 2025", // Note: End date is in the future
      title: "Team Member",
      responsibilities: [
         "Collected raw sales data from the Point-of-Sale (POS) system to monitor daily revenue and item performance.",
         "Conducted weekly sales analysis reports to identify best-selling items, low-performing products, and peak hours.",
         "Provided insights to management to support inventory planning and promotional strategies.",
      ],
    },
  ],
  technicalSkills: {
    "Data Analytics and Visualization": ["Looker Studio", "Power BI", "Tableau", "Excel VBA", "Google Script"],
    "Machine Learning and Programming": ["Python (including Machine Learning applications)", "R"],
    "Database Management": ["SQL", "MongoDB", "Oracle System"],
    "Office Productivity": ["Microsoft Office Suite (Word, Excel, PowerPoint)"],
  },
  activities: [
    {
      title: "YSS-ASEAN STUDENTS VOLUNTEER MISSION TO SARAWAK, MALAYSIA 2018",
      period: "July 2018 - July 2018",
      role: "Member - Group Leader",
      responsibilities: [
        "Taking a leadership role to guide and collaborate with teammates to provide support to Malaysian rural locals",
        "Planning and budgeting for the campaign",
        "Partaking in voluntary work: teaching primary students, building facilities and infrastructures, organizing extracurricular activities for local children, and supporting elders",
      ],
    },
    {
      title: "HCMUS, STUDENT UNION HO CHI MINH CITY",
      period: "October 2017 - October 2017",
      role: "President of Mathematics Faculty",
      responsibilities: [
         "Organized and led volunteer campaigns to engage students in community service and outreach programs.",
         "Coordinated faculty-wide events including sports tournaments, health workshops, and social activities.",
         "Developed and managed a peer mentoring program to support academic and personal growth among students.",
         "Fostered student engagement by collaborating with university departments to plan inclusive and impactful initiatives",
      ],
    },
  ],
};

export type CvData = typeof cvData; 