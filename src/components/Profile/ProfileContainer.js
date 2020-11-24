import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {getProfileThunk, getStatusProfileStatusThunk, updateStatus} from "../Redux/profile-reduer";
import withRouter from "react-router-dom/es/withRouter";
import {followUsersThunk} from "../Redux/users-reducer";

class ProfileReducer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 9344;
        }

        this.props.followUsersThunk();
        this.props.getStatusProfileStatusThunk(userId);
        this.props.getProfileThunk(userId);
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

let urlDataRouter = withRouter(ProfileReducer);
export default connect(mapStateToProps, {getProfileThunk, followUsersThunk, getStatusProfileStatusThunk, updateStatus})(urlDataRouter);