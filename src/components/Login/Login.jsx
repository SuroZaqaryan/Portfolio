import React, { Fragment } from 'react';
import LoginStyle from "./Login.module.css";
import ipad from "../../backgrounds/FAVPNG_graphic-design.png"
import { NavLink } from "react-router-dom";
import { Header } from '../Header/Header';


export const Login = (props) => {
    return (
        <div className={LoginStyle.main}>
            <Header />
            <div>
                <div className={LoginStyle.presentation}>
                    <div className={LoginStyle.introduction}>
                        <div className={LoginStyle.intro_text}>
                            <div style={{ marginBottom: '15px' }}>
                                <h1>
                                    Register now and discover a new store of knowledge
                            </h1>
                            </div>
                            <div>
                                <input placeholder="E-mail" type="text" />
                                <input placeholder="Password" type="text" />
                            </div>
                            <div className={LoginStyle.checkbox}>
                                <input type="checkbox" className={LoginStyle.checkboxInput} />

                                <label style={{ fontSize: '16px' }} htmlFor="vehicle1"> Remember me</label><br />
                            </div>
                            <div>
                                <button className={LoginStyle.btn}>Get Started</button>
                            </div>
                            <div className={LoginStyle.registerNow}>
                                <div>
                                    <p>Not registered yet? <span className={LoginStyle.register}><a href="/#">register</a></span></p>
                                </div>
                                <div>
                                    {/* <NavLink to="/content" className={LoginStyle.withoutRegistration} href={"/#"}>Continue without registration</NavLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={LoginStyle.cover}>
                        <img src={ipad} alt="ipad" />
                    </div>
                </div>
            </div>
        </div>
    );
}