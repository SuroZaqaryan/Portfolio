import React from "react";
import "../../../../css/Sidebar.css"
import DraggableDialog from "../SideBar_Modal/SideBarModal";

export function SideBarThemes(props) {
    return (
        <div className="sidebar-themes-container">
            <div>
                <DraggableDialog {...props} />
            </div>
        </div>
    );
}