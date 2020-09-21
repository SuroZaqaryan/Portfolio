import React, {Fragment} from "react";

export const Content = (props) => {
    return(
        <Fragment>
            <div>
                <p>Content</p>
                {props.isAuth ? <p>{props.login}</p> : <p>Your are not autorized</p>}
            </div>
        </Fragment>
    );
}