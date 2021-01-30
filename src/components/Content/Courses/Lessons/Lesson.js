import React, {useContext} from "react";
import "./css/Sidebar.css";
import RoutesPage from "./pages/Routes";
import ThemeDoc from "./components/Theme/ThemeDoc";

export default function Test(props) {
    return (
        <div className="page-wrapper chiller-theme toggled">
            <ThemeDoc {...props} />
        </div>
    );
}
