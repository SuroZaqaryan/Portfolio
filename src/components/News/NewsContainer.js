import React from "react";
import {News, NewsCountry} from "./News";
import {getNewsThunk, getNewsCountryThunk} from "../Redux/news-reducer";
import {connect} from "react-redux";

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsThunk();
        this.props.getNewsCountryThunk();
    }

    render() {
        return <>
        <News {...this.props} />
        <NewsCountry {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.news.news,
        newsCountry: state.news.newsCountry,
    }
}

export default connect(mapStateToProps, {getNewsThunk, getNewsCountryThunk})(NewsContainer);