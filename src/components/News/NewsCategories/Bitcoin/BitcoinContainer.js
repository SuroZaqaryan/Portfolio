import React from "react";
import {Bitcoin} from "./Bitcoin";
import {getNewsThunk} from "../../../Redux/news-reducer";
import {connect} from "react-redux";

class BitcoinContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsThunk();
    }

    render() {
        return <>
            <Bitcoin {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.news.News_Bitcoin,
    }
}

export default connect(mapStateToProps, {getNewsThunk})(BitcoinContainer);