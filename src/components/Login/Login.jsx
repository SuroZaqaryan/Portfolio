import React from 'react';
import {Header} from './Header/Header';
import login from "./login.module.css"
import LoginForm from "./LoginForm/LoginForm";

export const Login = () => {
    return (
        <>
            <section className={login.showcase}>
                <header>
                    <Header />
                </header>
                <div className={login.overlay}></div>

                <div className={login.formAndLogin}>
                    <div>
                        <div className={login.text}>
                            <h2>Never Stop To </h2>
                            <h3>Exploring The World</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.</p>
                            <a href="#">Explore</a>
                        </div>
                    </div>

                    <div>
                        <LoginForm />
                    </div>
                </div>

                <ul className={login.social}>
                    <li><a><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
                    <li><a><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
                    <li><a><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
                </ul>
            </section>

        </>
);
}