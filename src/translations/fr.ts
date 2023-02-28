import { IData } from "./types";

const Skill = {
    Beginner: (name: string) => ({ name, percent: 30 }),
    Intermediate: (name: string) => ({ name, percent: 60 }),
    Advanced: (name: string) => ({ name, percent: 75 }),
    Excellent: (name: string) => ({ name, percent: 90 }),
    Master: (name: string) => ({ name, percent: 100 }),
};

export const FR: IData = {
    warnings: {
        unauthorized: "Non autorisé",
    },
    header: {
        navItems: [
            { title: "Accueil", href: "#hero" },
            { title: "À Propos", href: "#about" },
            { title: "Compétences", href: "#skills" },
            { title: "Projets", href: "#portfolio" },
            { title: "Contact", href: "#footer" },
        ],
        downloadButton: "Télécharger CV",
    },
    hero: {
        intro: "Amine Kamal,\n un ingénieur logiciel sénior\n basé à Montréal.",
        socialLinks: [
            { title: "LinkedIn", link: "https://linkedin.com/in/amine-kamal-98b84a226" },
            { title: "GitHub", link: "https://github.com/AmineKamal/" },
            { title: "HackerRank", link: "https://www.hackerrank.com/m_amine_kamal" },
        ],
    },
    about: {
        subhead: "À propos de moi",
        intro: "Je suis le genre de personne qui n'a pas peur des défis.",
        profileTitle: "Profil",
        profileText: `
            Ingénieur logiciel expérimenté passionné par le développement de programmes innovants qui accélèrent l'efficience et l'efficacité du succès organisationnel.
            Bonne connaissance de la technologie et de l'écriture de code pour créer des systèmes fiables et conviviaux.
            Communicateur confiant, penseur stratégique et créateur innovant pour développer un logiciel personnalisé pour répondre aux besoins organisationnels d'une entreprise, mettre en valeur ses compétences de base et favoriser son succès.`,
        experienceTitle: "Carrière",
        experiences: [
            {
                company: "Zendesk",
                position: "Développeur logiciel sénior",
                timeFrame: "Mars 2023 - Présent",
                description: `Promu développeur de logiciels senior en moins de 10 mois pour performances exceptionnelles et contributions à l'équipe.`,
                highlights: [],
                technologies: ["Typescript", "React", "NodeJS"],
            },
            {
                company: "Zendesk",
                position: "Développeur logiciel",
                timeFrame: "Avril 2022 - Mars 2023",
                description: `Développeur de logiciels dans une équipe d'incubation en messagerie : développement de solutions innovantes et de prototypes.`,
                highlights: [
                    "Développement actif de projets de messagerie en utilisant nodejs et react (typescript) pour améliorer la communication et la collaboration entre les utilisateurs.",
                    "Création d'une extension Chrome pour présenter les prototypes de manière interactive sur n'importe quel site web, éliminant ainsi la nécessité de créer des environnements de test.",
                    "Solides compétences en travail d'équipe, mentorat des développeurs juniors, et favorisation d'un environnement de travail collaboratif.",
                ],
                technologies: ["Typescript", "React", "NodeJS"],
            },
            {
                company: "SG Digital",
                position: "Développeur de logiciels",
                timeFrame: "Septembre 2020 - Avril 2022",
                description: `
                    En tant que développeur de jeux full stack, mon rôle est d'aider à créer et à lancer des jeux en utilisant un moteur de jeu 2D en Typescript pour le frontend et un backend alimenté par Java.`,
                highlights: [
                    "Promu d'un rôle frontend uniquement à un rôle full stack après seulement quelques mois.",
                    "A terminé 3 jeux en un an avec mon équipe, soit 1 de plus que la moyenne habituelle.",
                    "Création d'un outil interne permettant de réduire considérablement le temps nécessaire à la création de composants pour le jeu.",
                ],
                technologies: ["Typescript", "Java", "Electron", "React", "NodeJS"],
            },
            {
                company: "Prevu3D",
                position: "Développeur de logiciels stagiaire",
                timeFrame: "Mai 2019 - Septembre 2019",
                description: `
                    En tant que développeur logiciel stagiaire dans une startup, mon rôle était d'aider à créer l'interface principale de l'application.
                    API RESTful pour le backend. Déployez l'application sur le cloud.
                    Gérer la base de données de l'application.`,
                highlights: [
                    "Création d'un pipeline CI/CD pour l'application.",
                    "A aidé à lancer la version initiale de l'application.",
                ],
                technologies: ["Vue.js", "Typescript", "Python", "Chalice", "Docker", "AWS", "MongoDB"],
            },
            {
                company: "Ultra Electronics",
                position: "Développeur de logiciels stagiaire",
                timeFrame: "Mai 2018 - Septembre 2018",
                description: `
                    En tant que développeur logiciel stagiaire, j'ai été affecté à divers projets. Le premier projet consistait à concevoir et mettre en place une infrastructure permettant le test automatique d'algorithmes de vision par ordinateur.
                    Le deuxième projet consistait à aider à créer une application Web utilisée pour communiquer avec le lecteur de passeport.`,
                highlights: [
                    "A terminé avec succès le projet qui m'a été confié pour l'ensemble du stage (4 mois) en seulement deux mois.",
                ],
                technologies: ["C++", "Python", "OpenCV", "Java", "HTML", "Javascript", "CSS"],
            },
            {
                company: "XMedius",
                position: "Testeur de logiciels stagiaire",
                timeFrame: "Mai 2017 - Septembre 2017",
                description: `
                    En tant que stagiaire testeur de logiciels, j'ai été chargé de réparer et de maintenir un bot de test pour tester l'application Web de bout en bout.
                    J'ai également été chargé d'implémenter des tests d'intégration automatisés pour l'application web.
                    Enfin, j'ai également implémenté divers scripts de routine.`,
                highlights: [],
                technologies: ["Python", "Selenium", "Ruby", "Ruby On Rails", "Linux"],
            },
        ],
        educationTitle: "Éducation",
        education: [
            { school: "Polytechnique Montréal", diploma: "B. Génie Logiciel", timeFrame: "2016-2020" },
            { school: "Collège Montmorency", diploma: "DEC Sciences Naturelles", timeFrame: "2011-2013" },
        ],
    },
    skills: {
        title: "Compétences",
        intro: "Je me concentre sur la création de logiciels conviviaux et efficaces.",
        description: `
        Une personne motivée avec une connaissance approfondie des langages de programmation et des outils de développement,
        à la recherche d'un poste dans une entreprise en croissance où je peux utiliser mes compétences au profit de l'entreprise tout en ayant la possibilité de développer mes propres compétences.`,
        skills: [
            {
                category: "Langages de programmation",
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
                    Skill.Intermediate("NodeJs"),
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
                category: "Informatique Générale",
                skills: [
                    Skill.Intermediate("Structures de données"),
                    Skill.Intermediate("Algorithmes"),
                    Skill.Intermediate("Git"),
                    Skill.Intermediate("Jira"),
                ],
            },
        ],
    },
    projects: {
        title: "Projets",
        intro: "Une sélection de projets récents sur lesquels j'ai travaillé.",
        projectLinkButton: "Lien du projet",
        sourceCodeButton: "Code source",
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
        title: "Entrer en contact",
        intro: "Un projet pour moi? Vous pensez que je serais un bon candidat pour votre équipe? J'aimerais avoir de vos nouvelles, envoyez-moi un message.",
        email: "m.amine.kamal@outlook.com",
        rawphone: "15146610893",
        formattedPhone: "+1(514)661-0893",
        letsTalk: "Écrivez-moi",
        socialLinks: [
            { title: "LinkedIn", link: "https://linkedin.com/in/amine-kamal-98b84a226" },
            { title: "GitHub", link: "https://github.com/AmineKamal/" },
            { title: "HackerRank", link: "https://www.hackerrank.com/m_amine_kamal" },
        ],
    },
};
