import React from 'react';
import {connect} from "react-redux";
import {NavBarNews} from "./NavbarNews";
import {AuthUserThunk} from "../../Redux/auth-reducer";


class NavbarNewsContainer extends React.Component {

    componentDidMount() {
        this.props.AuthUserThunk();
    }

    render() {
        return (
            <NavBarNews {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
})

export default connect(mapStateToProps, {AuthUserThunk})(NavbarNewsContainer);