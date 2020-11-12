import React from 'react';
import Paginator from "../Paginator/Paginator";
import userStyle from "./users.module.css";
import avatar from '../../backgrounds/20980408.png'
import { NavLink } from "react-router-dom";
import { MoreText } from "./ShowMoreText/ShowMoreText";

export let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    const list = props.user.map((user, index) => {
        return <div key={index}>
            {
                user.followed ?
                    <p> {user.name} </p>
                    :
                    null
            }
        </div>
    }
    )

    return (
        <>
            <div style={{ padding: '15px' }}>
                <div>
                    <p style={{ textAlign: 'left', fontWeight: '600' }}>Popular users</p>
                </div>
                {list}
            </div>
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                    totalItemsCount={totalUsersCount} pageSize={pageSize} />
            </div>
        </>
    )
}

export default Users;