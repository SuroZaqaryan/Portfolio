import React from "react";
import {connect} from "react-redux";
import {Business} from "./Bussines";
import {getNewsCountryThunk} from "../../../Redux/news-reducer";

class BusinesContainer extends React.Component {

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
        newsCountry: state.news.News_Country,
    }
}

export default connect(mapStateToProps, {getNewsCountryThunk})(BusinesContainer);