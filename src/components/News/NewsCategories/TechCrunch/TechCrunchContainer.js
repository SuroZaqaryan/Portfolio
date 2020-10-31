import React from "react";
import {connect} from "react-redux";
import {getNewsTechCrunch} from "../../../Redux/news-reducer";
import {TechCrunch} from "./TechCrunch";

class TechCrunchContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsTechCrunch();
    }

    render() {
        return <>
            <TechCrunch {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        TechCrunch: state.news.News_TechCrunch,
    }
}

export default connect(mapStateToProps, {getNewsTechCrunch})(TechCrunchContainer);