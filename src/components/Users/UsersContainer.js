import React from 'react';
import { connect } from 'react-redux';
import { Users } from './Users';
import {getUsers, setCurrentPage, setTotalUsersCount, setUsers} from "../Redux/users-reducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return(
            <Users {...this.props} {...this.props.users} />
        )
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
})

export default connect(mapStateToProps, {getUsers, setCurrentPage, setTotalUsersCount, setUsers})(UsersContainer);