import React from 'react';
import { NavbarProfile } from "./ProfileNavbar/ProfileNavbar";
import avatarDefault from "../../backgrounds/20980408.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Achievements } from '../Content/Achievements/Achievements';
import { NavLink } from 'react-router-dom';
import { leftArrow } from "../Profile/ProfileNavbar/icon/left-arrow.png"
import {faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons";

export const Profile = (props) => {
    if (!props.profile) {
        return <p>Loading...</p>
    }

    return (
        <div className={"profileContainer"}>
            <div className={"firstProfileColumn"}>
                <div className={"insideProfileColumn"}>
                    <div>
                        <NavbarProfile />
                    </div>

                    <div className={"profileAccountInfo"}>
                        <div>
                            {props.profile.photos.large ? <img src={props.profile.photos.large} alt="" /> :
                                <img className={"avatarDefault"} src={avatarDefault} alt="" />}
                        </div>

                        <div className={"fullName"}>
                            <div>
                                <h3>{props.profile.fullName}</h3>
                            </div>

                            <div className={"iconContainer"}>
                                <FontAwesomeIcon className={"socialIcon"} icon={faTwitter} />
                                <FontAwesomeIcon className={"socialIcon"} icon={faInstagram} />
                                <FontAwesomeIcon className={"socialIcon"} icon={faFacebook} />
                            </div>

                            <div className={"userInfoText"}>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur
                                        cupiditate debitis deleniti,
                                        dicta error eum fuga illum inventore maxime mollitia nesciunt
                                        officiis pariatur perspiciatis quidem quo, quod sequi, tempore.
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur
                                        cupiditate debitis deleniti,
                                        dicta error eum fuga illum inventore maxime mollitia nesciunt
                                        officiis pariatur perspiciatis quidem quo, quod sequi, tempore. officiis
                                        pariatur perspiciatis quidem quo, quod sequi, tempore.
                                        officiis pariatur perspiciatis quidem quo, quod sequi, tempore.
                                        officiis pariatur perspiciatis quidem quo, quod sequi, tempore.

                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Beatae consequatur cupiditate debitis deleniti,
                                        dicta error eum fuga illum inventore maxime mollitia nesciunt
                                        officiis pariatur perspiciatis quidem quo, quod sequi, tempore.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid
                                        amet
                                        delectus dicta distinctio dolorem doloribus ea illo, molestiae necessitatibus,
                                        nihil
                                        nostrum odio officia officiis omnis placeat recusandae vel, voluptatem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

            <div className="secondAchivementColumn">
                <div style={{ margin: "30px 25px 0px 25px" }}>
                    <div className="achievementsTitle">
                        <div className={"backArrow"}>
                            <div>
                                <FontAwesomeIcon className={"socialIcon"} icon={faLongArrowAltLeft} />
                            </div>
                            <div>
                                <NavLink to={"/content"}>Go Back</NavLink>
                            </div>
                        </div>
                        <div>
                            <h1>Achievements</h1>
                        </div>
                    </div>
                    <div>
                        <Achievements />
                    </div>
                </div>
            </div>

            <div style={{ background: "orange", height: "100%", flex: "1" }}>
                <div>
                    <h2>123</h2>
                </div>
            </div>
        </div>
    );
}
