import React from 'react';
import "./css/HomeStyle.css";
import backgroundImage from "../../Icons_And_Backgrounds/Vector_Backgrounds/Bitcoin.png";

export class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="wrapper_home">
                    <div className={"content_home"}>
                        <div className={"firstColumn"}>
                            <div>
                                <h1>
                                    Simple And Powerful Social Media Analystic
                                </h1>
                            </div>
                        </div>

                        <div className={"secondColumn"}>
                            <div>
                                <img className={"bg"} src={backgroundImage} alt=""/>
                            </div>

                            <div>
                                <img className={"bg"} src={backgroundImage} alt=""/>
                            </div>
                        </div>

                        <div className={"thirdColumn"}>
                            <div>

                            </div>

                            <div>

                            </div>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}