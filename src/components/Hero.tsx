import { IHero } from "../data/types";

const ALL_BACKGROUNDS = 
[
    "images/bg-1.jpg",
    "images/bg-2.png",
    "images/bg-3.jpg",
    "images/bg-4.png",
    "images/bg-5.jpg",
] as const;

function SocialLink({title, link}: IHero["socialLinks"][number], index: number) 
{
    return (
        <li key={index}>
            <a href={link} title={title} target="_blank">
                {title}
            </a>
        </li>
    );
}

export default function Hero({intro, socialLinks}: IHero) 
{
    const background = ALL_BACKGROUNDS[Math.floor(Math.random() * ALL_BACKGROUNDS.length)];

    return (
        <section id="hero" className="s-hero target-section" data-parallax="scroll" data-image-src={background} data-natural-width={3000} data-natural-height={2000} data-position-y="center">
            <div className="row hero-content">
                <div className="column large-full">
                    <h1 style={{whiteSpace: "pre-wrap"}}> {intro} </h1>
                    <ul className="hero-social">
                        {socialLinks.map(SocialLink)}
                    </ul>
                </div>
            </div>
            <div className="hero-scroll">
                <a href="#about" className="scroll-link smoothscroll">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path d="M12 24l-8-9h6v-15h4v15h6z" />
                </svg>
                </a>
            </div>
        </section>
    );
}