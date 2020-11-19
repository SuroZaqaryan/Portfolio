import React from 'react';
import {MonthBox} from "../../Month/Month";
import "../../css/style.css"

export const TopContent = (props) => {
    return (
        <div className="achivementsTitleContainer">
            <div className="AchivementsTitleDescription">
                <p>Achivements</p>
            </div>

            <div>
                <div className="achivementsTitleProfileContainer">
                    <div className="achivements_Title_Profile">
                        <h3>Keep on completing achievements and become one of the best coders</h3>
                    </div>
                    <div className="achivements_Title_Profile_Description">
                        <p>{props.status ? props.status : "The \"About me\" field is not filled yet, you can write about you, what hobbies you have, what do you do, and so on"}</p>
                    </div>
                </div>

                <div className="achivementsText">
                    <p>{props.user}</p>
                </div>

                <div className="achivementsText">
                    <MonthBox/>
                </div>
            </div>
        </div>
    );
};