export const companies = [
    "Microsoft",
    "Google",
    "Apple",
    "Amazon",
    "Meta",
    "IBM",
    "Intel",
    "Oracle",
    "Samsung",
    "Sony"
];

export const jobCategory = [
    "Software Development",
    "Data Science",
    "Product Management",
    "Marketing",
    "Sales",
    "Design",
    "Customer Support",
    "Human Resources",
    "Finance",
    "Operations"
];
export const work = [
    {
        name: "Build Your Resume",
        desc: "Create a professional resume that highlights your skills and experience to stand out to employers"
    },
    {
        name: "Apply for Job",
        desc: "Search and apply for positions that match your skills and career goals across multiple industries"
    },
    {
        name: "Get Hired",
        desc: "Connect with employers, ace your interviews, and land your dream job opportunity"
    }
]; 
export const testimonials = [
    {
        name: "John Doe",
        position: "Software Engineer",
        company: "Google",
        testimonial: "This platform helped me find my dream job in just a few weeks. The process was smooth and efficient."
    },
    {
        name: "Jane Smith",
        position: "Data Scientist",
        company: "Microsoft",
        testimonial: "I was able to connect with top companies and land multiple interviews. Highly recommend!"
    },
    {
        name: "Alice Johnson",
        position: "Product Manager",
        company: "Amazon",
        testimonial: "The resources and support provided by this platform were invaluable in my job search."
    },
    {
        name: "Bob Brown",
        position: "UX Designer",
        company: "Apple",
        testimonial: "I found the perfect job that matched my skills and interests. The team was very helpful throughout the process."
    },
]

export const footerLinks = [
    {
        title: "Product",
        links: [
            { title: "Find Jobs", route: "find-jobs" },
            { title: "Create Resume", route: "create-resume" },
            { title: "Job Alerts", route: "job-alerts" },
            { title: "Career Advice", route: "career-advice" },
            { title: "Salary Calculator", route: "salary-calculator" }
        ]
    },
    {
        title: "Company",
        links: [
            { title: "About Us", route: "about" },
            { title: "Contact Us", route: "contact" },
            { title: "Privacy Policy", route: "privacy" },
            { title: "Terms of Service", route: "terms" },
            { title: "Careers", route: "careers" }
        ]
    },
    {
        title: "Support",
        links: [
            { title: "Help Center", route: "help" },
            { title: "FAQs", route: "faqs" },
            { title: "Contact Support", route: "support" },
            { title: "Report Issue", route: "report" },
            { title: "Feedback", route: "feedback" }
        ]
    }
];

export const profile = {
    "name": "Mozammil Alam",
    "profileImg": "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
    "email": "mozammil@example.com",
    "phone": "+91-9876543210",
    "location": {
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India",
      "timezone": "IST"
    },
    "profession": "Software Engineer",
    "bio": "A highly motivated and technically skilled software engineer with a strong foundation in Java, Spring Boot, and modern web development frameworks. Passionate about solving real-world problems through clean code, scalable architecture, and intuitive UI/UX.",
    "experienceYears": 2,
    "employment": [
      {
        "company": "TechNova Solutions",
        "role": "Backend Developer",
        "duration": "Jul 2023 - Present",
        "location": "Remote",
        "responsibilities": [
          "Developed and maintained RESTful APIs using Java Spring Boot.",
          "Integrated PostgreSQL database with Hibernate ORM.",
          "Implemented real-time messaging using WebSocket and STOMP protocol.",
          "Contributed to microservices architecture and Docker-based deployments."
        ],
        "techStack": ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "WebSocket"]
      },
      {
        "company": "Freelance Projects",
        "role": "Full-Stack Developer",
        "duration": "Jan 2022 - Jun 2023",
        "responsibilities": [
          "Built web applications with React frontend and Java backend.",
          "Deployed apps on AWS EC2 and used S3 for asset storage.",
          "Handled database design, JWT-based authentication, and CI/CD pipelines."
        ],
        "techStack": ["Java", "React", "AWS", "JWT", "MongoDB", "GitHub Actions"]
      }
    ],
    "education": [
      {
        "institution": "XYZ University",
        "degree": "Bachelor of Technology in Computer Science",
        "duration": "2019 - 2023",
        "cgpa": "8.7/10",
        "coursework": ["Data Structures", "Operating Systems", "Computer Networks", "Database Systems", "AI & ML"]
      }
    ],
    "skills": {
      "programmingLanguages": ["Java", "Python", "JavaScript"],
      "frameworksAndLibraries": 
        ["Spring Boot", "Hibernate", "Express.js","React", "Tailwind CSS", "Redux"]
      ,
      "databases": ["PostgreSQL", "MongoDB", "MySQL"],
      "tools": ["Git", "Docker", "Postman", "Figma", "VS Code", "IntelliJ IDEA"],
      "cloudAndDevOps": ["AWS EC2", "S3", "GitHub Actions", "CI/CD", "Linux"]
    },
    "certifications": [
      {
        "title": "AWS Cloud Practitioner Essentials",
        "issuer": "AWS Academy",
        "date": "Mar 2025"
      },
      {
        "title": "Java Developer Certificate",
        "issuer": "Coursera",
        "date": "Jan 2024"
      }
    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "Fluent"
      },
      {
        "language": "Hindi",
        "proficiency": "Native"
      }
    ],
    "projects": [
      {
        "name": "PG Management System",
        "description": "A full-stack platform to manage paying guest accommodations, tenants, and real-time chat using keystroke indicators.",
        "technologies": ["Spring Boot", "React", "PostgreSQL", "WebSocket"],
        "features": [
          "User authentication with role-based access control",
          "Live chat with typing indicators",
          "Tenant and rent management dashboard"
        ],
        "githubUrl": "https://github.com/mozammil/pg-management"
      },
      {
        "name": "Parking Space Detection System",
        "description": "Computer vision project using YOLO for real-time detection of vacant parking slots from surveillance footage.",
        "technologies": ["Python", "OpenCV", "YOLOv5", "React"],
        "features": [
          "Custom dataset labeling and training",
          "Realtime detection with bounding boxes",
          "Frontend dashboard for visualization"
        ],
        "githubUrl": "https://github.com/mozammil/parking-detector"
      }
    ],
    "socialLinks": {
      "linkedin": "https://linkedin.com/in/mozammil",
      "github": "https://github.com/mozammil",
      "portfolio": "https://mozammil.dev"
    },
    "availability": {
      "openToWork": true,
      "preferredRoles": ["Backend Developer", "Full Stack Developer"],
      "noticePeriod": "Immediately Available"
    }
  }