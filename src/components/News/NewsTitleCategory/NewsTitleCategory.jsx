import React from "react";
import "./TitleStyle.css";
import Bitcoin from "../Icons_And_Backgrounds/Icons/bitcoin2.png";

export const NewsTitleCategory = (props) => {
    return (
        <>
            <div className={"newsTitleContent"}>
                <div>
                    <div className={"newsTitleDesign"}>
                        <div className={"title_banner"}>
                            <h1>Daily News</h1>
                            <p>
                                Read about the news of the day choose a news category for you
                            </p>
                        </div>
                    </div>

                    <div className={"news_title_category"}>
                        <div className={"category_name"}>
                            <h2>Bitcoin</h2>
                        </div>
                        <div className={"category_icon"}>
                            <img src={Bitcoin} alt=""/>
                        </div>
                    </div>
                </div>


                <div className={"banner"} style={{}}>
                    {/* <div>
                                    <h1 style={{
                                        color: 'black',
                                        fontSize: '35px',
                                        background: '#00000030',
                                        padding: '10px'
                                    }}>Bitcoin</h1>
                                </div> */}
                </div>
            </div>
        </>
    );
}