import React from "react";
import "./TitleStyle.css";

export const NewsTitleCategory = (props) => {

    return (
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
                        <h2>{props.titleName}</h2>
                    </div>
                    <div className={"category_icon"}>
                        <img src={props.icon} alt=""/>
                    </div>
                </div>
            </div>


            <div className={"banner"} style={{backgroundImage: `url(${props.banner})`}}>
                <div style={{width: '100%', textAlign: 'center'}}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '50px',
                        background: "rgb(0 0 0 / 16%)",
                        padding: '13px'
                    }}>{props.bannerTitle}</h1>
                </div>
            </div>
        </div>
    );

}