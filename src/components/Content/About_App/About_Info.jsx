import React, { Fragment } from 'react';
import Check from "./Images/checked.png";
import Daco from "./Images/Daco.png";
import aboutStyle from "./About.module.css";

export class AboutInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                "Earn more experience to unlock new achievements",
                "Start easy then gradually develop your skills",
                "Don't give up halfway no one promised easy walks",
                "Learn the theory before starting practice",
            ]
        }
    }
    render() {
        const list = this.state.items.map((item, index) => {
            return (
                <ul className={aboutStyle.ul} key={index}>
                    <li>
                        <div>
                            <img className={aboutStyle.check} src={Check} alt="" />
                        </div>

                        <div className={aboutStyle.moreInfo}>
                            <p>{item}</p>
                        </div>
                    </li>
                </ul>
            );
        })

        return (
            <Fragment>
                <div>
                    <div>
                        <img src={Daco} style={{ width: '530px', maxWidth: '100%' }} alt="" />
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <div className={aboutStyle.aboutTitle}>
                            <h2>Tips for effective learning</h2>
                        </div>

                        <div>
                            {list}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}