import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {getStatusProfileStatusThunk, profileAC, updateStatus} from "../Redux/profile-reduer";
import * as axios from "axios";
import withRouter from "react-router-dom/es/withRouter";
import {followUsersThunk} from "../Redux/users-reducer";

class ProfileReducer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 9344;
        }

        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
            this.props.profileAC(response.data);
        });

        this.props.followUsersThunk();
        this.props.getStatusProfileStatusThunk(userId);
    }

    render() {
        return <>
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    followedUsers: state.usersPage.followedUsers,
    status: state.profile.status,
});

let urlDataRouter = withRouter(ProfileReducer)
export default connect(mapStateToProps, {profileAC, followUsersThunk, getStatusProfileStatusThunk, updateStatus})(urlDataRouter);