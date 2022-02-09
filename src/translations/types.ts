export interface IHeader 
{
    navItems: Array<{ title: string; href: string }>;
    downloadButton: string;
}

export interface IHero 
{
    intro: string;
    socialLinks: Array<{ title: string, link: string }>;
}

export interface IExperience 
{
    company: string;
    position: string;
    timeFrame: string;
    description: string;
    highlights: string[];
    technologies: string[];
}

export interface IEducation 
{
    school: string;
    diploma: string;
    timeFrame: string;
}

export interface IAbout 
{
    subhead: string;
    intro: string;
    profileTitle: string;
    profileText: string;
    experienceTitle: string;
    experiences: IExperience[];
    educationTitle: string;
    education: IEducation[];
}

export type ISkill = string |
{
    name: string;
    percent: number;
    percentText?: string;
}
export interface ISkills
{
    title: string;
    intro: string;
    description: string;
    skills: Array<{ category: string; skills: ISkill[]; }>
}

export interface IProjects 
{
    title: string;
    intro: string;
    projectLinkButton: string;
    sourceCodeButton: string;
    projects: Array<{ name: string; technologies: string[]; sourceCode: string; projectLink: string; image: string  }>;
}

// Not used yet
export interface ITestimonials {}


export interface IFooter 
{
    title: string;
    intro: string;
    email: string;
    rawphone: string;
    formattedPhone: string;
    letsTalk: string;
    socialLinks: IHero["socialLinks"];
}

export interface IData 
{
    header: IHeader;
    hero: IHero;
    about: IAbout;
    skills: ISkills;
    projects: IProjects;
    testimonials?: ITestimonials;
    footer: IFooter;
}