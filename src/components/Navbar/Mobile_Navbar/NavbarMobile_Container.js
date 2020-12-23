import React from 'react';
import {connect} from "react-redux";
import {getProfileThunk} from '../../Redux/profile-reduer'
import {NavbarMobile} from './NavbarMobile'
import { withRouter } from "react-router";

class NavbarMobileContainer extends React.Component {

    componentDidMount() {
        console.log('123')
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9344;
        }
        this.props.getProfileThunk(userId);
    }


    render() {

        return (
            <NavbarMobile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
});

let WithUrlDataContainerComponent = withRouter(NavbarMobileContainer);

export default connect(mapStateToProps, {getProfileThunk})(WithUrlDataContainerComponent);