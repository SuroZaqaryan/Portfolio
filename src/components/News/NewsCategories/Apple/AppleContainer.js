import React from "react";
import {connect} from "react-redux";
import {getNewsAppleThunk} from "../../../Redux/news-reducer";
import {Apple} from "./Apple";

class AppleContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsAppleThunk();
    }

    render() {
        return <>
            <Apple {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        apple: state.news.News_Apple,
    }
}

export default connect(mapStateToProps, {getNewsAppleThunk})(AppleContainer);