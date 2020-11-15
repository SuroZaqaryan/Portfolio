import React from "react";
import { Colors } from "./Constants";

export class ColorCard extends React.Component {
    state = {
        bgColor: Colors
    };

    componentDidMount() {
        this._getRandomColor();
    }

    _getRandomColor() {
        const item = this.state.bgColor[
            Math.floor(Math.random() * this.state.bgColor.length)
            ];
        this.setState({
            selectedColor: item
        });
    }

    render() {
        return (
            <div className=".color-card" style={{backgroundColor: this.state.selectedColor, width: "5px", marginRight: "13px"}}> </div>
        );
    }
}
