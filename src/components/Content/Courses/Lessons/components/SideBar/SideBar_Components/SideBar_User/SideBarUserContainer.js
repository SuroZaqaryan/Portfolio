import React, {useEffect} from 'react';
import {SideBarUser} from "./SideBarUser";
import {connect} from "react-redux";
import {getProfileThunk} from "../../../../../../../Redux/profile-reduer";

class SideBarUserContainer extends React.Component  {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 9344;
        }

        this.props.getProfileThunk(userId);
    }
    render() {
        return <>
            <SideBarUser {...this.props} />
        </>
    }
}

let mapStateTopProps = (state) => ({
    profile: state.profile.profile,
})

export default connect(mapStateTopProps, {getProfileThunk})(SideBarUserContainer);