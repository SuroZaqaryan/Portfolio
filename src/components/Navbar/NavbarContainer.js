import React from 'react';
import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {AuthUserThunk} from "../Redux/auth-reducer";


class NavbarContainer extends React.Component {

    componentDidMount() {
        this.props.AuthUserThunk();
    }

    render() {
        return (
            <Navbar {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {AuthUserThunk})(NavbarContainer);