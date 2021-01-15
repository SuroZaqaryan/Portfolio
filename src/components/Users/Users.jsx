import React from 'react';
import Paginator from "../Paginator/Paginator";
import userStyle from "./users.module.css";
import avatar from '../../backgrounds/20980408.png'
import {NavLink} from "react-router-dom";
import {MoreText} from "./ShowMoreText/ShowMoreText";
import styled from "styled-components";

const PopularUsers = styled.p`
  color: ${props => (props.value ? "#ffffff" : "#343434")};
  text-align: left;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  font-family: system-ui;
  letter-spacing: 0.5px;
`;

const UserContainer = styled.div`
  box-shadow: ${props => (props.value ? "-4px 7px 10px rgb(24 24 24 / 19%)" : "0px 15px 19px 0px rgb(255 154 154 / 37%);")};
  border: ${props => (props.value ? null : null)};
  background: ${props => (props.value ? "#262b36" : "#ffffff")};
  margin-bottom: 20px;
  border-radius: 30px;
  padding: 20px;
`;

export let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    const list = props.user.map((user, index) => {
            return <UserContainer value={props.value} key={index} className={props.value ? userStyle.userDarkContainer : userStyle.userContainer}>
                <div>
                    {
                        user.followed ?
                            <p> {user.name} </p>
                            :
                            null
                    }
                </div>
                 <div>
                    <div style={{display: 'flex', alignItems: 'center', padding: '0', cursor: 'pointer'}} key={index}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={userStyle.avatar} src={avatar} alt="avatar"/>
                            </NavLink>
                        </div>

                        <div style={{marginLeft: '13px'}}>
                            <NavLink className={userStyle.userName} to={'/profile/' + user.id}>
                                <p className={props.value ? userStyle.user_dark_name : null}>{user.name}</p>
                            </NavLink>
                        </div>
                    </div>

                    <div style={{textAlign: 'left', paddingTop: '10px', marginRight: '10px'}}>
                        <MoreText {...props} />
                    </div>

                    <div>
                        <div className={userStyle.subscribeContainer}>
                            <div>
                                {
                                    user.followed ?
                                        <button className={userStyle.follow}
                                                onClick={() => {
                                                    props.unfollow(user.id);
                                                    alert(user.name)
                                                }}>Unfollow</button>
                                        :
                                        <button className={userStyle.unfollow} onClick={() => {
                                            props.follow(user.id)
                                        }}>Follow</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </UserContainer>
        }
    )

    return (
        <>
            <div style={{padding: '15px'}}>
                <div style={{paddingLeft: '20px'}}>
                    <PopularUsers value={props.value}>Popular users</PopularUsers>
                </div>
                <div style={{marginTop: '25px'}}>
                    {list}
                </div>
            </div>
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            </div>
        </>
    )
}
export default Users;