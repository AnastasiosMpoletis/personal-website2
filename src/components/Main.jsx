import Header from "./sections/Header.jsx";
import Experience from "./sections/Experience.jsx";

export default function Main({ sectionsRefs }) {
    return (
        <main ref={sectionsRefs[0]}>
            <Header />
            <Experience experienceRef={sectionsRefs[2]} />
        </main>
    );
}