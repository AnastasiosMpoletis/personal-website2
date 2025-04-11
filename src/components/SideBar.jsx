export default function SideBar({ onPin, isPinned }) {
    let cssClass = "side-bar";
    const buttonLabel = isPinned ? "Unpin" : "Pin";

    return (
        <aside className={cssClass}>
            <button onClick={onPin}>{buttonLabel}</button>
            <h2>SideBar</h2>
        </aside>
    );
}