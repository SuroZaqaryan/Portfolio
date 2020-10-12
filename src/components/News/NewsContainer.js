import React from "react";
import {News} from "./News";
import {getNewsThunk} from "../Redux/news-reducer";
import {connect} from "react-redux";

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsThunk();
    }

    render() {
        return <News {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.news.news,
    }
}

export default connect(mapStateToProps, {getNewsThunk})(NewsContainer);