import React from 'react';
import userStyle from "./ShowMore.module.css";
import ShowMoreText from 'react-show-more-text';
import styled from "styled-components";

const UserStatus = styled.p`
  color: ${props => (props.value ? "#e4e4e4" : "#757575")};
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.4;
`;

export const MoreText = (props) => {

    function firstExecuteOnClick(isExpanded) {
        console.log(isExpanded);
    }

    function secondExecuteOnClick(isExpanded) {
        console.log(isExpanded);
    }

    return (
        <div>
            {
                props.user.status ?
                    <ShowMoreText
                        lines={3}
                        more='READ'
                        less='Show less'
                        anchorClass={props.value ? userStyle.userDarkStatusText : userStyle.userStatusText}
                        onClick={firstExecuteOnClick}
                        className='content-css'
                        expanded={false}
                        width={400}
                    >
                        <p className={props.value ? userStyle.userDarkStatusText : userStyle.userStatusText}>{props.user.status}</p>
                    </ShowMoreText>
                    :
                    <ShowMoreText
                        lines={1}
                        more='READ'
                        less='Show less'
                        anchorClass=''
                        onClick={secondExecuteOnClick}
                        className='content-css'
                        expanded={false}
                        width={500}
                    >
                        <UserStatus value={props.value}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam dolores,
                            illum labore libero veniam voluptatem.
                            Ad dolores doloribus explicabo facere fuga illo laboriosam minus quidem similique. Alias
                            at, sapiente.
                        </UserStatus>
                    </ShowMoreText>
            }
        </div>
    );
}