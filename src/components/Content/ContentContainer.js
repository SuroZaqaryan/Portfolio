import React from 'react';
import {Content} from "./Content";
import {AuthUserThunk} from "../Redux/auth-reducer";
import {connect} from "react-redux";


class ContentContainer extends React.Component {

    componentDidMount() {
        this.props.AuthUserThunk();
    }

    render() {
        return (
            <Content {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {AuthUserThunk})(ContentContainer);