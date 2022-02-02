import { ISkills } from "../data/types";

function IndividualSkill(skill: ISkills["skills"][number]["skills"][number], index: number) 
{
    return (typeof skill === "string" ?
        <li key={index}>
            <div className="progress" style={{background: "#FFFFFF"}}></div>
            <strong style={{color: "#FFFFFF"}}>{skill}</strong>
        </li> :
        <li key={index}>
            <div className={`progress percent${skill.percent}`} style={{background: "#FFFFFF"}}><span>{skill.percent}%</span></div>
            <strong style={{color: "#FFFFFF"}}>{skill.name}</strong>
        </li>
    );
}

function SkillCategory({category, skills}: ISkills["skills"][number], index: number) 
{
    return (
        <li key={index} className={`services-list__item${index === 0 ? " is-active" : ""}`}>
            <div className="services-list__item-header">
                <h5>{category}</h5>
            </div>
            <div className="services-list__item-body">
                <ul className="skill-bars">
                    {skills.map(IndividualSkill)}
                </ul>
            </div>
        </li>
    );
}

export default function Skills({title, intro, description, skills}: ISkills) 
{
    return (
        <section id="skills" className="s-services target-section h-dark-bg">
            <div className="row s-services__content">
                <div className="vert-line" />
                <div className="column large-6 s-services__leftcol">
                    <div className="section-intro" data-num={"02"} data-aos="fade-up">
                    <h3 className="subhead">{title}</h3>
                    <h1 className="display-1">
                        {intro}
                    </h1>
                    </div>
                    <p className="lead" data-aos="fade-up">
                        {description}
                    </p>
                </div>
                <div className="column large-6">
                    <ul className="services-list" data-aos="fade-up">
                        {skills.map(SkillCategory)}
                    </ul>
                </div>
            </div>
        </section>
    );
}