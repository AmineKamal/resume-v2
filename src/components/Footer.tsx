import { IFooter } from "../data/types";

export default function Footer({title, intro, email, rawphone, formattedPhone, socialLinks, letsTalk}: IFooter) 
{
    return (
        <footer id="footer" className="s-footer h-dark-bg">
            <div className="right-vert-line" />
                <div className="row s-footer__main">
                    <div className="column large-6">
                        <div className="section-intro" data-aos="fade-up">
                            <h3 className="subhead">{title}</h3>
                            <h1 className="display-1">
                                {intro}
                            </h1>
                        </div>
                        <div className="footer-email-us">
                            <a href={`mailto:${email}`} className="btn btn--primary h-full-width">
                                {letsTalk}
                            </a>
                        </div>
                    </div>
                    <div className="column large-5">
                        <div className="footer-contacts">
                            <div className="footer-contact-block" data-aos="fade-up">
                                <h5 className="footer-contact-block__header">Email</h5>
                                <p className="footer-contact-block__content">
                                    <a href={`mailto:${email}`}>{email}</a>
                                </p>
                            </div>
                            <div className="footer-contact-block" data-aos="fade-up">
                                <h5 className="footer-contact-block__header">Phone</h5>
                                <p className="footer-contact-block__content">
                                    <a href={`tel:+${rawphone}`}>{formattedPhone}</a>
                                </p>
                            </div>
                            <br />
                            <div className="footer-contact-block" data-aos="fade-up">
                                <h5 className="footer-contact-block__header">Social</h5>
                                <ul className="footer-contact-block__list">
                                    {socialLinks.map(({title, link}, i) => <li key={i}><a target="_blank" href={link}>{title}</a></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row s-footer__bottom">
                    <div className="column large-full ss-copyright">
                        <span>© Copyright Amine Kamal 2022</span>
                        <span>
                        Design by <a href="https://www.styleshout.com/">StyleShout</a>
                        </span>
                    </div>
                    <div className="ss-go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
                        </svg>
                        </a>
                    </div>
                </div>
        </footer>
    );
}