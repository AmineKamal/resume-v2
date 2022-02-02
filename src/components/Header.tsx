import { SupportedLocale } from "../data/data";
import { IHeader } from "../data/types";

type NavItemProps = IHeader["navItems"][number];
function NavItem({title, href}: NavItemProps, index?: number) 
{
    return (
        <li key={index}>
            <a className="smoothscroll" href={href} title={title}>
                {title}
            </a>
        </li>
    );
}

type NavLocaleItemProps = { locale: SupportedLocale; setData: (locale: SupportedLocale) => void }
function NavLocaleItem({setData, locale}: NavLocaleItemProps) 
{
    const targetLocal = locale === "EN" ? "FR" : "EN";
    const toLocalAction = () => setData(targetLocal);

    return (
        <li>
            <a title={targetLocal} onClick={toLocalAction} style={{cursor: "pointer"}} >
                {targetLocal}
            </a>
        </li>
    );
}

type HeaderProps = IHeader & NavLocaleItemProps;
export default function Header({navItems, downloadButton, setData, locale}: HeaderProps) 
{
    return (
        <header className="s-header">
            <div className="header-logo">
                <a href="index.html">
                    <img src="images/logo.svg" alt="Homepage" />
                </a>
            </div>
            <div className="header-content">
                <nav className="row header-nav-wrap">
                    <ul className="header-nav">
                        {navItems.map(NavItem)}
                        <NavLocaleItem {...{setData, locale}} />
                    </ul>
                </nav>
                <a href={`resumes/cv_${locale}.pdf`} target="_blank" download className="btn btn--stroke btn--small">
                    {downloadButton}
                </a>
            </div>
            <a className="header-menu-toggle" href="#0">
                <span>Menu</span>
            </a>
        </header>
  );
}