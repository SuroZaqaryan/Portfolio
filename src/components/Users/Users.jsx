import React from 'react';
import Paginator from "../Paginator/Paginator";
import userStyle from "./users.module.css";
import avatar from '../../backgrounds/tt_avatar_small.jpg'

export let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    const list = props.user.map((user, index) => {
        return <div>
            <div style={{ display: 'flex' }}>
                <div>
                    <img className={userStyle.avatar} src={avatar} alt="avatar" />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <p className={userStyle.userName}>{user.name}</p>

                    {
                        user.status ? user.status :
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Blanditiis tempora eum harum maxime laborum nesciunt, mollitia eius eaque illo cupiditate
                                doloribus molestias perspiciatis. Quidem
                        </p>
                    }
                </div>
            </div>
        </div>
    }
    )

    return (
        <>
            <div>
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