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

export interface IAbout 
{
    subhead: string;
    intro: string;
    profileTitle: string;
    profileText: string;
    experienceTitle: string;
    experiences: Array< 
    { 
        company: string;
        position: string;
        timeFrame: string;
        description: string;
        highlights: string[];
        technologies: string[];
    }>;
}

export interface ISkills
{
    title: string;
    intro: string;
    description: string;
    skills: Array<{ category: string; skills: Array<string | { name: string; percent?: number }>}>
}

export interface IProjects 
{
    title: string;
    intro: string;
    projectLinkButton: string;
    sourceCodeButton: string;
    projects: Array<{ name: string; technologies: string[]; sourceCode: string; projectLink: string; image: string  }>;
}

export interface ITestimonials 
{

}


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