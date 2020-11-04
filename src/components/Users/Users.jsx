import React from 'react';
import Paginator from "../Paginator/Paginator";
import userStyle from "./users.module.css";
import avatar from '../../backgrounds/20980408.png'
import {NavLink} from "react-router-dom";
import {MoreText} from "./ShowMoreText/ShowMoreText";

export let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    const list = props.user.map((user, index) => {
            return <div key={index} className={userStyle.userContainer}>
                <div>
                    <div style={{display: 'flex', alignItems: 'center', padding: '0', cursor: 'pointer'}} key={index}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={userStyle.avatar} src={avatar} alt="avatar"/>
                            </NavLink>
                        </div>

                        <div style={{marginLeft: '13px'}}>
                            <NavLink className={userStyle.userName} to={'/profile/' + user.id}>
                                <p>{user.name}</p>
                            </NavLink>
                        </div>
                    </div>

                    <div style={{textAlign: 'left', paddingTop: '10px', marginRight: '10px'}}>
                        <MoreText {...props} />
                    </div>

                    <div>
                        <div className={userStyle.subscribeContainer}>
                            <div>
                                <button>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    )

    return (
        <>
            <div style={{padding: '15px'}}>
                {list}
            </div>
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            </div>
        </>
    )
}

export default Users;