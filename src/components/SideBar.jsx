import { useState } from "react";
import { SECTIONS } from "./Sections.jsx";
import logo from '../assets/ab-logo.png';

export default function SideBar({ sectionsRefs }) {
    const [isOpened, setOpened] = useState(false);

    function handleOpened() {
        setOpened(previousState => !previousState);
    }

    function scrollToSection(index) {
        sectionsRefs[index].current?.scrollIntoView({ behaviour: 'smooth' });
    }

    return (
        <aside className="side-bar">
            <button onClick={(handleOpened)}>Menu</button>
            {/* <img src={logo} alt="Side bar logo" onClick={(handleOpened)} /> */}
            {isOpened &&
                <>
                    <img src={logo} alt="Side bar logo" />
                    <div className="side-bar-menu">
                        {SECTIONS.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(index)}
                                >{item}</button>
                            );
                        })}
                    </div>
                </>
            }
        </aside>
    );
}