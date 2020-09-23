import React, {Fragment} from "react";
import ContentStyle from "./Content.module.css";
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";

export const Content = (props) => {
    return (
        <Fragment>
            <NavbarContainer />
            <div className={ContentStyle.container}>
                <div className={ContentStyle.leftColumn}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores dolorem dolores doloribus exercitationem facere illum, impedit porro quae quo,
                        repellendus, rerum sit sunt tempore ullam unde velit voluptatem. Laboriosam, voluptates.
                    </p>
                </div>
                <div className={ContentStyle.centerColumn}>
                    <UsersContainer />
                </div>
                <div className={ContentStyle.rightColumn}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores dolorem dolores doloribus exercitationem facere illum, impedit porro quae quo,
                        repellendus, rerum sit sunt tempore ullam unde velit voluptatem. Laboriosam, voluptates.
                    </p>
                </div>
            </div>
        </Fragment>
    );
}