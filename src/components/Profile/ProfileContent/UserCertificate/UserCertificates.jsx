import React from 'react';
import "./css/style.css";
import Report from "./Images/certificate.png"

export class UserCertificates extends React.Component {

    constructor() {
        super();
        this.state = {value: true};
    }

    render() {
        return (
            <div className={"UserCertificateContainer"}>
                <div className={"UserCertificateInsideeContainer"}>
                    <div className={"Report"}>
                        <img style={{maxWidth: "100%", width: "55px"}} src={Report} alt=""/>
                    </div>

                    <div style={{lineHeight: "1.4"}}>
                        <div>
                            <p style={{fontWeight: "600"}}>My Certificates</p>
                        </div>

                        {
                            this.state.value ?
                                <div>
                                    <p style={{fontSize: "15px", color: "#4590ff"}}>You don't have a certificate yet</p>
                                </div>
                                :
                                <div>
                                    <p style={{fontSize: "15px", color: "#4590ff"}}>hello</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
