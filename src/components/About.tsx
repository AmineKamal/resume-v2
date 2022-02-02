import { IAbout } from "../data/types";

function Experience({company, position, timeFrame, description, highlights, technologies}: IAbout["experiences"][number], index: number) 
{
    return (
        <div key={index} className="column" data-aos="fade-up">
            <div className="position">
                <div className="position__header">
                    <h6>
                        <span className="position__co">{company}</span>
                        <span className="position__pos">{position}</span>
                    </h6>
                    <div className="position__timeframe">{timeFrame}</div>
                </div>
                <p style={{textAlign: "justify"}}> {description }</p>
                <ul>
                    {highlights.map((text, i) => <li key={i}>{text}</li>)}
                </ul>
                <ul className="stats-tabs">
                    {technologies.map((text, i) => <li key={i}><em>{text}</em></li>)}
                </ul>
            </div>
        </div>
    );
}

export default function About({subhead, intro, profileTitle, profileText, experienceTitle, experiences}: IAbout) 
{
    return (
        <section id="about" className="s-about target-section">
            <div className="s-about__section s-about__section--profile">
                <div className="right-vert-line" />
                    <div className="row">
                        <div className="column large-6 medium-8 tab-full">
                            <div className="section-intro" data-num={"01"} data-aos="fade-up">
                                <h3 className="subhead">{subhead}</h3>
                                <h1 className="display-1">
                                    {intro}
                                </h1>
                            </div>
                            <div className="profile-pic" data-aos="fade-up">
                                <img src="images/profile-pic.jpg" alt="" />
                            </div>
                            <h3 data-aos="fade-up">{profileTitle}</h3>
                            <p data-aos="fade-up">
                                {profileText}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="s-about__section">
                    <div className="row">
                        <div className="column">
                            <h3 data-aos="fade-up">{experienceTitle}</h3>
                        </div>
                    </div>
                    <div className="row block-large-1-2 block-900-full work-positions">
                        {experiences.map(Experience)}
                    </div>
            </div>
        </section>
    );
}