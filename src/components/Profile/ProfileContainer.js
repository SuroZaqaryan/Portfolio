import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {profileAC} from "../Redux/profile-reduer";
import * as axios from "axios";
import withRouter from "react-router-dom/es/withRouter";

class ProfileReducer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
            this.props.profileAC(response.data);
        })
    }

    render() {
        return <>
            <Profile {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
})

let urlDataRouter = withRouter(ProfileReducer)
export default connect(mapStateToProps, {profileAC})(urlDataRouter);