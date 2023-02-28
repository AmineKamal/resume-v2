import { IData } from "./types";

const Skill = {
    Beginner: (name: string) => ({ name, percent: 30 }),
    Intermediate: (name: string) => ({ name, percent: 60 }),
    Advanced: (name: string) => ({ name, percent: 75 }),
    Excellent: (name: string) => ({ name, percent: 90 }),
    Master: (name: string) => ({ name, percent: 100 }),
};

export const EN: IData = {
    header: {
        navItems: [
            { title: "Home", href: "#hero" },
            { title: "About", href: "#about" },
            { title: "Skills", href: "#skills" },
            { title: "Projects", href: "#portfolio" },
            { title: "Contact", href: "#footer" },
        ],
        downloadButton: "Download CV",
    },
    hero: {
        intro: "Amine Kamal,\n a senior software developer\n based in Montreal.",
        socialLinks: [
            { title: "LinkedIn", link: "https://linkedin.com/in/m-amine-kamal" },
            { title: "GitHub", link: "https://github.com/AmineKamal/" },
            { title: "HackerRank", link: "https://www.hackerrank.com/m_amine_kamal" },
        ],
    },
    about: {
        subhead: "About Me",
        intro: "I'm the kind of person who isn't afraid of challenges.",
        profileTitle: "Profile",
        profileText: `
            Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.
            Well-versed in technology and writing code to create systems that are reliable and user-friendly.
            Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company's organizational needs, highlight their core competencies, and further their success.`,
        experienceTitle: "Career",
        experiences: [
            {
                company: "Zendesk",
                position: "Senior Software Developer",
                timeFrame: "March 2023 - Present",
                description: `Promoted to Senior Software Developer in less than 10 months for outstanding performance and contributions to the team.`,
                highlights: [],
                technologies: ["Typescript", "React", "NodeJS"],
            },
            {
                company: "Zendesk",
                position: "Software Developer",
                timeFrame: "April 2022 - March 2023",
                description: `Software Developer in a messaging incubation team: development of innovative solutions and prototypes.`,
                highlights: [
                    "Actively developing messaging projects using nodejs and react (typescript) to enhance user communication and collaboration.",
                    "Created a Chrome extension for interactive presentation of prototypes on any website, eliminating the need for test environments.",
                    "Demonstrated strong teamwork skills, provided mentorship to junior developers, and fostered a collaborative work environment.",
                ],
                technologies: ["Typescript", "React", "NodeJS"],
            },
            {
                company: "SG Digital",
                position: "Software Developer",
                timeFrame: "September 2020 - April 2022",
                description: `
                    As a full stack game developer, my role is to help create and launch games using a Typescript 2D engine for the frontend and a Java powered backend.`,
                highlights: [
                    "Promoted from a frontend only role to a full stack role after only a few months.",
                    "Completed 3 games in one year with my team, which is 1 more than the usual average.",
                    "Created an internal tool that reduced greatly the time required to create components for the game.",
                ],
                technologies: ["Typescript", "Java", "Electron", "React", "NodeJS"],
            },
            {
                company: "Prevu3D",
                position: "Software Developer Intern",
                timeFrame: "May 2019 - September 2019",
                description: `
                    As a software developer intern in a startup my role was to help create the main application interface.
                    RESTful APIs for the backend. Deploy the application on the cloud.
                    Manage the database of the application.`,
                highlights: [
                    "Created a CI/CD pipeline for the app.",
                    "Helped launch the initial version of the application.",
                ],
                technologies: ["Vue.js", "Typescript", "Python", "Chalice", "Docker", "AWS", "MongoDB"],
            },
            {
                company: "Ultra Electronics",
                position: "Software Developer Intern",
                timeFrame: "May 2018 - September 2018",
                description: `
                    As a software developer intern, I was assigned various projects. The first project was to design and implement an infrastructure allowing the automatic testing of computer vision algorithms.
                    The second project was to help build a web application used to communicate with the passport reading device.`,
                highlights: [
                    "Successfully finished the project assigned to me for the whole internship (4 months) in only two months.",
                ],
                technologies: ["C++", "Python", "OpenCV", "Java", "HTML", "Javascript", "CSS"],
            },
            {
                company: "XMedius",
                position: "Software Tester Intern",
                timeFrame: "May 2017 - September 2017",
                description: `
                    As a software tester intern, I was tasked to fix and maintain a test bot for testing the web application end to end.
                    I was also tasked to implement automated integration tests for the web application. 
                    Finally, I also implemented various routine scripts.`,
                highlights: [],
                technologies: ["Python", "Selenium", "Ruby", "Ruby On Rails", "Linux"],
            },
        ],
        educationTitle: "Education",
        education: [
            { school: "Polytechnique Montréal", diploma: "BE, Software Engineering", timeFrame: "2016-2020" },
            { school: "Montmorency College", diploma: "DEC, Natural Sciences", timeFrame: "2011-2013" },
        ],
    },
    skills: {
        title: "Skills",
        intro: "I focus on creating user friendly and efficient softwares.",
        description: `
            A motivated individual with in-depth knowledge of programming languages and development tools,
            seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.`,
        skills: [
            {
                category: "Programming Languages",
                skills: [
                    Skill.Excellent("Typescript"),
                    Skill.Advanced("Javascript"),
                    Skill.Intermediate("Python"),
                    Skill.Intermediate("Java"),
                    Skill.Intermediate("C++"),
                ],
            },
            {
                category: "Frontend",
                skills: [
                    Skill.Intermediate("Ionic"),
                    Skill.Intermediate("Electron"),
                    Skill.Intermediate("Angular"),
                    Skill.Intermediate("React"),
                    Skill.Intermediate("HTML"),
                    Skill.Intermediate("CSS"),
                ],
            },
            {
                category: "Backend",
                skills: [
                    Skill.Advanced("NodeJs"),
                    Skill.Intermediate("Express"),
                    Skill.Intermediate("Flask"),
                    Skill.Beginner("Serverless"),
                    Skill.Beginner("Chalice"),
                ],
            },
            {
                category: "CI/CD",
                skills: [
                    Skill.Beginner("Puppeteer"),
                    Skill.Beginner("Docker"),
                    Skill.Beginner("Github Actions"),
                    Skill.Beginner("AWS"),
                ],
            },
            {
                category: "General Computer Science",
                skills: [
                    Skill.Intermediate("Data Structures"),
                    Skill.Intermediate("Algorithms"),
                    Skill.Intermediate("Git"),
                    Skill.Intermediate("Jira"),
                ],
            },
        ],
    },
    projects: {
        title: "Projects",
        intro: "A selection of recent projects I have worked on.",
        projectLinkButton: "Project link",
        sourceCodeButton: "Source code",
        projects: [
            {
                name: "Workout Timer",
                sourceCode: "https://github.com/AmineKamal/workout-timer",
                projectLink: "https://aminekamal.github.io/workout-timer",
                image: "images/projects/workout.jpg",
                technologies: ["Typescript", "Angular", "Ionic"],
            },
            {
                name: "Simple HTML Scraper",
                sourceCode: "https://github.com/AmineKamal/simple-html-scraper",
                projectLink: "https://www.npmjs.com/package/simple-html-scraper",
                image: "images/projects/scraper.jpg",
                technologies: ["Typescript", "Puppeteer"],
            },
            {
                name: "Resume",
                sourceCode: "https://github.com/AmineKamal/resume-v2",
                projectLink: "https://aminekamal.github.io/resume-v2/",
                image: "images/bg-1.jpg",
                technologies: ["Typescript", "React"],
            },
            {
                name: "Equation Solver",
                sourceCode: "https://github.com/AmineKamal/equation-solver",
                projectLink: "https://aminekamal.github.io/equation-solver/",
                image: "images/projects/equation-solver.jpg",
                technologies: ["Typescript", "React", "Tesseract"],
            },
            {
                name: "Data Structures & Algorithms",
                sourceCode: "https://github.com/AmineKamal/ds-algo",
                projectLink: "https://www.npmjs.com/package/@aminekamal/ds-algo",
                image: "images/projects/ds-algo.jfif",
                technologies: ["Typescript"],
            },
            {
                name: "Macro Tracker",
                sourceCode: "https://github.com/AmineKamal/calories-tracking",
                projectLink: null,
                image: "images/projects/macro.jpg",
                technologies: ["Typescript", "React", "Python", "Flask", "Alexa"],
            },
        ],
    },
    footer: {
        title: "Get In Touch",
        intro: "Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, shoot me a message.",
        email: "m.amine.kamal@outlook.com",
        rawphone: "15146610893",
        formattedPhone: "+1(514)661-0893",
        letsTalk: "Let's Talk",
        socialLinks: [
            { title: "LinkedIn", link: "https://linkedin.com/in/amine-kamal-98b84a226" },
            { title: "GitHub", link: "https://github.com/AmineKamal/" },
            { title: "HackerRank", link: "https://www.hackerrank.com/m_amine_kamal" },
        ],
    },
};
