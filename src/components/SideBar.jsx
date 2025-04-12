import { useState } from "react";

export default function SideBar() {
    const [isOpened, setOpened] = useState(false);

    function handleOpened() {
        setOpened(previousState => !previousState);
    }

    // create some dummy items for testing
    const numbr = 50;
    const menuItems = [];
    for (let i = 0; i < numbr; i++) {
        menuItems.push(<h2 key={i}>SideBar</h2>);
    }

    return (
        <aside className="side-bar">
            <button onClick={(handleOpened)}>Menu</button>
            {isOpened &&
                <div className="side-bar-menu">
                    {menuItems}
                </div>
            }
        </aside>
    );
}