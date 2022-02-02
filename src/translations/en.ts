import { IData } from "./types";

export const EN: IData = 
{
    header: 
    {
        navItems: 
        [
            { title: "Home", href: "#hero" },
            { title: "About", href: "#about" },
            { title: "Skills", href: "#skills" },
            { title: "Projects", href: "#portfolio" },
            { title: "Contact", href: "#footer" },
        ],
        downloadButton: "Download CV"
    },
    hero: 
    {
        intro: "Amine Kamal,\n a Software Engineer\n based in Montreal.",
        socialLinks: 
        [
            { title: "LinkedIn", link: "https://linkedin.com/in/amine-kamal-98b84a226" },
            { title: "GitHub", link: "https://github.com/AmineKamal/" },
            { title: "HackerRank", link: "https://www.hackerrank.com/m_amine_kamal" }
        ]
    },
    about: 
    {
        subhead: "About Me",
        intro: "I'm the kind of person who isn't afraid of challenges.",
        profileTitle: "Profile",
        profileText: `
            Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.
            Well-versed in technology and writing code to create systems that are reliable and user-friendly.
            Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company's organizational needs, highlight their core competencies, and further their success.`,
        experienceTitle: "Career",
        experiences: 
        [
            {
                company: "SG Digital",
                position: "Software Developer",
                timeFrame: "September 2020 - Present",
                description: `
                    As a full stack game developer, my role is to help create and launch games using a Typescript 2D engine for the frontend and a Java powered backend.`,
                highlights: 
                [
                    "Promoted from a frontend only role to a full stack role after only a few months.",
                    "Completed 3 games in one year with my team, which is 1 more than the usual average.",
                    "Created an internal tool that reduced greatly the time required to create components for the game."
                ],
                technologies: 
                [
                    "Typescript", "Java", "Electron", "React", "NodeJS"
                ]
            },
            {
                company: "Prevu3D",
                position: "Software Developer Intern",
                timeFrame: "May 2019 - September 2019",
                description: `
                    As a software developer intern in a startup my role was to help create the main application interface.
                    RESTful APIs for the backend. Deploy the application on the cloud.
                    Manage the database of the application.`,
                highlights: 
                [
                    "Created a CI/CD pipeline for the app.",
                    "Helped launch the initial version of the application."
                ],
                technologies: ["Vue.js", "Typescript", "Python", "Chalice", "Docker", "AWS", "MongoDB"]
            },
            {
                company: "Ultra Electronics",
                position: "Software Developer Intern",
                timeFrame: "May 2018 - September 2018",
                description: `
                    As a software developer intern, I was assigned various projects. The first project was to design and implement an infrastructure allowing the automatic testing of computer vision algorithms.
                    The second project was to help build a web application used to communicate with the passport reading device.`,
                highlights: 
                [
                    "Successfully finished the project assigned to me for the whole internship (4 months) in only two months."
                ],
                technologies: ["C++", "Python", "OpenCV", "Java", "HTML", "Javascript", "CSS"]
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
                technologies: ["Python", "Selenium", "Ruby", "Ruby On Rails", "Linux"]
            },
        ]
    },
    skills: 
    {
        title: "Skills",
        intro: "I focus on creating user friendly and efficient softwares.",
        description: `
            A motivated individual with in-depth knowledge of programming languages and development tools,
            seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.`,
        skills: 
        [
            {
                category: "Programming Languages",
                skills: 
                [
                    "Typescript",
                    "Javascript",
                    "Python",
                    "Java",
                    "C++"
                ]
            },
            {
                category: "Frontend",
                skills: 
                [
                    "Angular",
                    "React",
                    "HTML",
                    "CSS"
                ]
            },
            {
                category: "Backend",
                skills: 
                [
                    "Node JS",
                    "Express",
                    "Flask",
                    "Serverless",
                    "Chalice"
                ]
            },
            {
                category: "CI/CD",
                skills: 
                [
                    "Selenium",
                    "Docker",
                    "Github Actions",
                    "AWS"
                ]
            },
            {
                category: "General Computer Science",
                skills: 
                [
                    "Data Structures",
                    "Algorithms",
                    "Git",
                    "Jira"
                ]
            },
        ]
    },
    projects: 
    {
        title: "Projects",
        intro: "A selection of recent projects I have worked on.",
        projectLinkButton: "Project Link",
        sourceCodeButton: "Source Code",
        projects: 
        [
            {
                name: "Workout Timer",
                sourceCode: "https://github.com/AmineKamal/workout-timer",
                projectLink: "https://aminekamal.github.io/workout-timer",
                image: "images/projects/workout.jpg",
                technologies: ["Typescript", "Angular"]
            },
            {
                name: "Simple HTML Scraper",
                sourceCode: "https://github.com/AmineKamal/simple-html-scraper",
                projectLink: "https://www.npmjs.com/package/simple-html-scraper",
                image: "images/projects/scraper.jpg",
                technologies: ["Typescript", "Puppeteer"]
            },
            {
                name: "Resume",
                sourceCode: "https://github.com/AmineKamal/resume",
                projectLink: "https://aminekamal.github.io/resume/",
                image: "images/bg-1.jpg",
                technologies: ["Typescript", "React"]
            },
        ]
    },
    footer: 
    {
        title: "Get In Touch",
        intro: "Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, shoot me a message.",
        email: "m.amine.kamal@outlook.com",
        rawphone: "15146610893",
        formattedPhone: "+1(514)661-0893",
        letsTalk: "Let's Talk",
        socialLinks: 
        [
            { title: "LinkedIn", link: "https://linkedin.com/in/amine-kamal-98b84a226" },
            { title: "GitHub", link: "https://github.com/AmineKamal/" },
            { title: "HackerRank", link: "https://www.hackerrank.com/m_amine_kamal" }
        ]
    }
};