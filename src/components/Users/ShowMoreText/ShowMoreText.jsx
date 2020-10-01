import React from 'react';
import userStyle from "../users.module.css";
import ShowMoreText from 'react-show-more-text';
import moreStyle from "./ShowMore.module.css";

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
                        anchorClass=''
                        onClick={firstExecuteOnClick}
                        expanded={false}
                        width={400}
                    >
                        <p className={userStyle.userStatus}>{props.user.status}</p>
                    </ShowMoreText>
                    :
                    <ShowMoreText
                        lines={1}
                        more='READ'
                        less='Show less'
                        anchorClass=''
                        onClick={secondExecuteOnClick}
                        expanded={false}
                        width={500}
                    >
                        <p className={userStyle.userStatus}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam dolores,
                            illum labore libero veniam voluptatem.
                            Ad dolores doloribus explicabo facere fuga illo laboriosam minus quidem similique. Alias
                            at, sapiente.
                        </p>
                    </ShowMoreText>
            }
        </div>
    );
}