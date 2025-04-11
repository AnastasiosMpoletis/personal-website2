import { useState } from "react";

import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import TopMenu from "./components/TopMenu.jsx";

function App() {
    const [sideBarPinned, setSideBarPinned] = useState(false);
    const [sideBarVisible, setSideBarVisible] = useState(false);

    function handleSideBarPinned() {
        setSideBarVisible(!sideBarPinned);
        setSideBarPinned(previousState => !previousState);
    }

    function handleSideBarVisible() {
        setSideBarVisible(previousState => !previousState);
    }

    return (
        <>
            <TopMenu
                onClick={handleSideBarVisible}
                isPinned={sideBarPinned}
            />
            <div className="content">
                {sideBarVisible &&
                    <SideBar
                        onPin={handleSideBarPinned}
                        isPinned={sideBarPinned}
                    />}
                <main className="main">
                    <Header isPinned={sideBarPinned} />
                </main>
            </div>
        </>
    );
}

export default App;
