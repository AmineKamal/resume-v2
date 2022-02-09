import { IProjects } from "../translations/types";

type ProjectProps = IProjects["projects"][number] & 
{
    projectLinkButton: string;
    sourceCodeButton: string;
};

function Project({name, sourceCode, projectLink, technologies, image, projectLinkButton, sourceCodeButton}: ProjectProps, index: number) 
{
    return (
        <div key={index} className="column" data-aos="fade-up">
            <div className="folio-item">
                <div className="folio-item__thumb">
                    <a className="folio-item__thumb-link" title={name} data-size="1050x700">
                        <img src={image} />
                    </a>
                </div>
                <div className="folio-item__info">
                    <h4 className="folio-item__title">{name}</h4>
                    <div className="folio-item__cat">
                        <ul className="stats-tabs">
                            {technologies.map((text, i) => <li key={i}><em>{text}</em></li>)}
                        </ul>
                    </div>
                </div>
                {
                    projectLink &&
                    <a href={projectLink} target="_blank" title={projectLinkButton} className="folio-item__project-link">
                        {projectLinkButton}
                    </a>
                }
                {
                    !projectLink &&
                    <a style={{cursor: "pointer"}} onClick={() => alert("Project is still in progress!")} title={projectLinkButton} className="folio-item__project-link">
                        {projectLinkButton}
                    </a>
                }
                <a href={sourceCode} target="_blank" title={sourceCodeButton} className="folio-item__project-link" style= {{ left: "15rem" }}>
                    {sourceCodeButton}
                </a>
            </div>
        </div>
    );
}

export default function Projects({title, intro, projects, projectLinkButton, sourceCodeButton }: IProjects) 
{
    return (
        <section id="portfolio" className="s-portfolio target-section">
            <div className="row s-portfolio__header">
                <div className="column large-6 medium-8 tab-full">
                    <div className="section-intro" data-num={3} data-aos="fade-up">
                    <h3 className="subhead">{title}</h3>
                    <h1 className="display-1">
                        {intro}
                    </h1>
                    </div>
                </div>
            </div>
            <div className="row s-porfolio__list block-large-1-2 block-tab-full collapse">
                {projects.map((project, index) => Project({...project, projectLinkButton, sourceCodeButton}, index))}
            </div>
        </section>
    );
}