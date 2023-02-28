import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoSwipe from "./components/PhotoSwipe";
import Projects from "./components/Projects";
import Preloader from "./components/Preloader";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { useTranslation } from "./hooks/useTranslation";
import { useAuth } from "./hooks/useAuth";

function App() {
    const [data, locale, setData] = useTranslation("EN");
    const { isValidPass } = useAuth();

    if (!isValidPass) {
        return (
            <div
                className="section-intro"
                data-num={"01"}
                data-aos="fade-up"
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1 className="display-1" style={{ color: "white" }}>
                    Unauthorized
                </h1>
            </div>
        );
    }

    return (
        <>
            <Preloader />
            <Header {...{ ...data.header, locale, setData }} />
            <Hero {...data.hero} />
            <About {...data.about} />
            <Skills {...data.skills} />
            <Projects {...data.projects} />
            {data.testimonials && <Testimonials />}
            <Footer {...data.footer} />
            <PhotoSwipe />
        </>
    );
}

export default App;
