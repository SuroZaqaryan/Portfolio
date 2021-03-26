import React from 'react';
import log from './LoginForm.module.css'
import Rocket from './bg/rocket.png'

export default function LoginForm() {
    return (
        <>
            <div className={log.wrapper}>
                <div className={log.container}>
                    <img src={Rocket} alt="rocket" className={log.rocket}/>
                    <div className={log.text}>
                        <h1>LOGIN</h1>
                        <p>LANDING PAGE</p>
                    </div>
                    <form className={log.form}>
                        <div className={log.animated_input}>
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className="check">
                            <div>
                                <input type="checkbox" id="check"/>
                                <label htmlFor="check" className={log.disc}></label>
                                <label htmlFor="check" className={log.remember}>Remember</label>
                            </div>
                            <p className={log.forget}><a href="#">Forget Password ?</a></p>
                        </div>
                    </form>
                    <button className={log.btn} type="submit">LOGIN</button>
                    <p className={log.account}><a href="#">Create Account ?</a></p>
                </div>
            </div>
        </>
    );
}