import React from 'react';
import userStyle from './users.module.css';
import * as axios from 'axios';
import avatar from '../../backgrounds/tt_avatar_small.jpg'

export class Users extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const list = this.props.users.map((user, index) => {
            return (
                <div>
                    <div style={{display: 'flex'}}>
                        <div>
                            <img className={userStyle.avatar} src={avatar} alt="avatar"/>
                        </div>

                        <div style={{textAlign: 'left'}}>
                            <p className={userStyle.userName}>{user.name}</p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Qui expedita earum nesciunt error eaque, minima ut voluptas quidem hic, amet.
                            </p>
                        </div>
                    </div>
                </div>
            );
        });

        return <div>
            <div className={userStyle.pagination}>
                <div style={{overflowX: 'auto'}}>
                    <table style={{borderCollapse: 'collapse', borderSpacing: '0', width: '100%'}}>
                        <tr>
                            {pages.map(p => {
                                    return (
                                        <th className={this.props.currentPage === p && userStyle.selectedPage}
                                            onClick={(e) => {
                                                this.onPageChanged(p);
                                            }}>{p}</th>
                                    );
                                }
                            )}
                        </tr>
                    </table>
                </div>
            </div>
            {list}

        </div>
    }
}



export default Users;