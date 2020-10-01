import React, { Fragment } from 'react';

export const Profile = (props) => {
    if(!props.profile) {
        return <p>Loading...</p>
    }
    return(
        <Fragment>
            <p>{props.profile.fullName}</p>
        </Fragment>
    );
}