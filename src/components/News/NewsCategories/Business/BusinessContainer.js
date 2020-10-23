import React from "react";
import {connect} from "react-redux";
import {Business} from "./Bussines";
import {getNewsCountryThunk} from "../../../Redux/news-reducer";

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsCountryThunk();
    }

    render() {
        return <>
            <Business {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        newsCountry: state.news.newsCountry,
    }
}

export default connect(mapStateToProps, {getNewsCountryThunk})(NewsContainer);