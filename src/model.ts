export const model = {
    name: "Andrés Adjimann",
    jobTitle: "Security-focused Software Engineer",
    city: "CABA",
    country: "Argentina",
    email: "aadjiman@gmail.com",
    linkedinProfile: "https://www.linkedin.com/in/andresadjimann/",
    telegram: "https://t.me/a_d_j_i",
    telegramUser: "@adji",
    githubProfiles: [{
        name: "a-d-j-i",
        url: "https://github.com/a-d-j-i"
    },
        {
            name: "adjisb",
            url: "https://github.com/adjisb",
        }],
    education: [
        "Bachelor’s degree in Physics — Facultad de Ciencias Exactas, Universidad de Buenos Aires (UBA)",
        "High School: Electronic Technician — Escuela Técnica O.R.T II"
    ],
    languages: [
        {name: "Spanish", level: "Native"},
        {name: "English", level: "Intermediate"},
        {name: "Hebrew", level: "Intermediate"},
    ],
    skills: [
        {name: "Security", class: "badge-primary"},
        {name: "Smart Contracts", class: "badge-primary"},
        {name: "Windows Drivers"},
        {name: "Infrastructure"},
        {name: "Automation"},
        {name: "Defensive Eng"},

        {name: "Solidity", class: "badge-secondary"},
        {name: "TypeScript/JS", class: "badge-secondary"},
        {name: "Python", class: "badge-secondary"},
        {name: "C/C++", class: "badge-secondary"},
        {name: "ASM", class: "badge-secondary"},
        {name: "Java", class: "badge-secondary"},
        {name: "PHP", class: "badge-secondary"},

        {name: "Node.js"},
        {name: "React"},
        {name: "Play 1.2.7"},
        {name: "Oracle ADF"},
        {name: "Struts"},
        {name: "GWT"},
        {name: "Android"},

        {name: "PostgreSQL"},
        {name: "MySQL"},
        {name: "Oracle DB"},
        {name: "Pentaho"},
        {name: "JMS"},
        {name: "ActiveMQ"},
        {name: "Apache Camel"},
        {name: "JBoss/Tomcat"},

        {name: "Windows kernel/user"},
        {name: "Linux/Windows admin"},
        {name: "PIC microcontrollers"},

        {name: "git"},
        {name: "Shell scripting"},
        {name: "Deployment pipelines"}
    ],
    summary: [
        'Highly skilled security-focused software engineer with extensive hands-on experience in systems architecture and backend development, smart contract development and blockchain systems, infrastructure automation and system administration, and low-level systems programming.',
        'Proven track record of designing and hardening low-level Windows drivers, building secure, production-grade infrastructure, implementing robust blockchain systems with comprehensive testing, and developing automated deployment pipelines.',
        'Technical expertise in multiple languages including: Solidity, TypeScript, Python, Java, PHP, C/C++, and Assembly.'
    ],
    experiences: [
        {
            range_from: "2021-07",
            range_to: "Present",
            company: "The Sandbox",
            position: "Blockchain Developer",
            location: "Remote",
            description: [
                "Design and implement Solidity contracts; build thorough unit/integration tests (Hardhat + Mocha).",
                "Create secure deployment scripts and perform on‑chain integrations with attention to upgrade and access controls.",
                "Tech: Solidity, Node.js, TypeScript, Hardhat, Mocha.",
            ],
            link: {
                name: "sandbox-smart-contracts",
                url: "https://github.com/thesandboxgame/sandbox-smart-contracts"
            }
        },
        {
            range_from: "2018-07",
            range_to: "2021-07",
            company: "Coinfabrik",
            position: "Solution Architect / Blockchain Developer",
            location: "Argentina",
            description: [
                "Blockchain consulting; architecture and development for exchanges and wallets (Android/iOS with React Native).",
                "Emphasis on secure key handling, API integration, and transaction flows.",
                "Tech: TypeScript, Node.js, React Native, Solidity.",
            ],
        },
        {
            range_from: "2016-02",
            range_to: "2018-07",
            company: "Freelance",
            position: "Android Engineer",
            location: "Remote",
            description: [
                "App maintenance and Android internals with focus on stability and correctness.",
                "Tech: Java, Android SDK, C, Android NDK.",
            ],
        },
        {
            range_from: "2015-07",
            range_to: "2016-02",
            company: "Freelance",
            position: "C++ Developer",
            location: "Remote",
            description: [
                "Windows user-mode DLL library development with attention to memory safety and ABI boundaries.",
                "Tech: C++.",
            ],
        },
        {
            range_from: "2012-02",
            range_to: "2017-06",
            company: "La Guardiana / Prosegur",
            position: "Full-Stack/Embedded Developer",
            location: "Argentina",
            description: [
                "Built deposit ATM system: Java web app (Play 1.2.7), embedded PIC (C), Python launcher.",
                "Delivered end-to-end system with reliability, data integrity, and operational safety in scope.",
                "Tech: Java (Play 1.2.7), C (PIC18F4520), Python.",
            ],
        },
        {
            range_from: "2011-09",
            range_to: "2015-08",
            company: "Urbix",
            position: "Backend/BI Developer",
            location: "Remote",
            description: [
                "People counting backend and reporting; secure data handling in Python/PostgreSQL.",
                "Tech: Python, PostgreSQL, Pentaho.",
            ],
        },
        {
            range_from: "2011-03",
            range_to: "2015-07",
            company: "Disarmista",
            position: "Systems/Driver Developer",
            location: "Remote",
            description: [
                "Windows kernel-mode drivers and user-mode code for Cisco FireAMP (security product).",
                "Automation and tooling via Python for repeatable builds and diagnostics.",
                "Tech: C++, Python.",
            ],
        },
        {
            range_from: "2011-11",
            range_to: "2011-11",
            company: "Easytech",
            position: "Consultant",
            location: "Argentina",
            description: [
                "JBPM console customizations (GWT) with attention to permissions and workflow integrity.",
            ],
        },
        {
            range_from: "2010-04",
            range_to: "2010-10",
            company: "Freelance",
            position: "Image Processing Engineer",
            location: "Remote",
            description: [
                "Image segmentation/detection (MATLAB); DB backends; PostgreSQL custom extensions (Java/C).",
                "Tech: MATLAB, MySQL, PostgreSQL, Java, C.",
            ],
        },
        {
            range_from: "2007-10",
            range_to: "2011-05",
            company: "Easytech",
            position: "Project Manager / Developer",
            location: "Argentina",
            description: [
                "Web applications; Oracle ADF/Struts on Tomcat/JBoss; PL/SQL for shopping cart.",
                "Implemented web services; JMS connectors (ActiveMQ, Camel, JBPM) with robust integration patterns.",
                "Tech: PHP, MySQL, PostgreSQL, Oracle DB, Oracle ADF, Struts, Java, ActiveMQ, Camel, JBoss, JBPM.",
            ],
        },
        {
            range_from: "2007-01",
            range_to: "2007-01",
            company: "Freelance",
            position: "GWT Developer",
            location: "Remote",
            description: [
                "Web 2.0 library application.",
                "Tech: GWT.",
            ],
        },
        {
            range_from: "2006-03",
            range_to: "2006-12",
            company: "LEC (UBA)",
            position: "Lab Automation Developer",
            location: "Argentina",
            description: [
                "LabVIEW apps for experiment automation with deterministic behavior and device safety.",
                "Tech: LabVIEW.",
            ],
        },
        {
            range_from: "2002-05",
            range_to: "2007-10",
            company: "Physics Department (UBA)",
            position: "Sysadmin",
            location: "Argentina",
            description: [
                "Server installation/maintenance (LAMP, SMTP, NFS, DNS); shell automation.",
                "Infrastructure planning and configuration: firewalls, routers, network services hardening.",
                "Tech: Linux, Shell, Networking.",
            ],
        },
        {
            range_from: "2000-01",
            range_to: "2002-04",
            company: "Core-SDI",
            position: "Senior Developer",
            location: "Argentina",
            description: [
                "Windows 98/2000 kernel-mode driver development using Visual C/C++ and assembler.",
                "Low-level systems and security-sensitive components, with emphasis on correctness and performance.",
                "Tech: C/C++, Assembler.",
            ],
        },
        {
            range_from: "1996-01",
            range_to: "1998-12",
            company: "DGI, Auditoría de Sistemas",
            position: "Software Developer",
            location: "Argentina",
            description: [
                "Internal systems development in C and Pro*C.",
            ],
        },
        {
            range_from: "1995-07",
            range_to: "1995-12",
            company: "DGI, Grupo de Investigaciones",
            position: "Software Developer",
            location: "Argentina",
            description: [
                "Internal AIX system used across branches, developed in C.",
            ],
        },
        {
            range_from: "1994-01",
            range_to: "1995-06",
            company: "DGI, Grupo de Investigaciones",
            position: "Technology Consultant",
            location: "Argentina",
            description: [
                "Technology consulting.",
            ],
        },
    ]

}