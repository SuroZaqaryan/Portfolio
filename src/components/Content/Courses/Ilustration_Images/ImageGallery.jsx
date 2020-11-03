import React from "react";
import Mobile from "./gallery/undraw_mobile.png"

export const ImageGallery = () => {
    return (
        <div>
            <div>
                <img style={{maxWidth: "100%"}} src={Mobile} alt=""/>
            </div>
        </div>
    );
}