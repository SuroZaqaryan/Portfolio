import React from 'react'
import Time from 'react-time'
import GirlProfile from '../Images/Boxing Day-pana.png'

export class DateTimeProfile extends React.Component {

    render() {

        const fontStyle = {
            fontWeight: "600"
        };

        let now = new Date();
        return (
            <div>
                <div style={{textAlign: "center", marginBottom: "35px"}}>
                    <img style={{maxWidth: "100%", width: "220px"}} src={GirlProfile} alt=""/>
                </div>
                <div>
                    <p style={fontStyle}>Today is <Time style={fontStyle} value={now} format="YYYY/MM/DD" /></p>
                </div>
            </div>
        )
    }
}