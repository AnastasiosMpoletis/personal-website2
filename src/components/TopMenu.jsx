export default function TopMenu({ onClick, isPinned }) {
    return (
        <div className="top-menu">
            <button onClick={onClick} disabled={isPinned}>Menu</button>
        </div>
    );
}