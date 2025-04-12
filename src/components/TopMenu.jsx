import { createPortal } from "react-dom";

/**
 * @deprecated
 * 
 * @param {*} param0 
 * @returns 
 */

export default function TopMenu({ onClick, isPinned }) {
    return createPortal(
        <div className="top-menu">
            <button onClick={onClick} disabled={isPinned}>Menu</button>
        </div>, document.getElementById("modal-menu")
    );
}