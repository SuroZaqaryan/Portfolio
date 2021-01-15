import React from 'react';
import {connect} from "react-redux";
import {Lessons} from "./Lessons";
import {AuthUserThunk} from "../../../Redux/auth-reducer";
import {getLessons} from "../../../Redux/lesson-reducer";

class LessonsContainer extends React.Component {

    componentDidMount() {
        this.props.AuthUserThunk();
    }

    render() {
        return (
            <Lessons {...this.props} value={this.props.value}/>
        );
    }
}

let mapStateToProps = (state) => ({
    lesson: state.lessonReducer.lessonsTitle,
});

export default connect(mapStateToProps, {AuthUserThunk, getLessons})(LessonsContainer);