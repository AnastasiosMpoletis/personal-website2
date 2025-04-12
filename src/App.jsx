import { useRef } from "react";
import { SECTIONS } from "./components/Sections.jsx";

import SideBar from "./components/SideBar.jsx";
import Main from "./components/Main.jsx";

function App() {
    const sectionsRefs = [];
    for (let i = 0; i < SECTIONS.length; i++) {
        sectionsRefs.push(useRef());
    }

    return (
        <>
            <SideBar sectionsRefs={sectionsRefs} />
            <Main sectionsRefs={sectionsRefs} />
        </>
    );
}

export default App;
