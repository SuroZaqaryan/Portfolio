import React from 'react';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <p>
                So the component returns a React Fragment, which always contains the
                MenuItemRoot and might have MenuItemChildren.
                Also it checks if there is a menu icon and an expand icon.
                MenuItemChildren is wrapped by Collapse MaterialUI component which toggles
                in/out depending on the component open state.
                Also the MenuItemChildren component recursively calls AppMenuItem component itself.
                </p>
            </div>
        );
    }
}