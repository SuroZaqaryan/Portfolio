import React from 'react';
import {connect} from "react-redux";
import {ContentCourses} from "./ContentCourses";
import {contentCourse} from "../../../Redux/courses-reducer";


class ContentCourses_Container extends React.Component {
    render() {
        return (
            <ContentCourses {...this.props} value={this.props.value} />
        );
    }
}

let mapStateToProps = (state) => ({
    course: state.contentCourse.languageInfo,
})

export default connect(mapStateToProps, {contentCourse})(ContentCourses_Container);