import React from 'react';

import avatar from "../../../backgrounds/tt_avatar_small.jpg"
import lessons from './icons/lessons.png'
import megaphone from './icons/megaphone.png'
import profile from './icons/profile.png'
import home from '../icons/home.png'
import {
    MobileContainer, MobileDiv, AvatarBlock,
    HomeBorderIcon, MobileImageBlock, UserName, TitleName,
} from './css/NavbarMobile-Styled-Component'


export class NavbarMobile extends React.Component {

    render() {

        if(!this.props.profile) {
            return "Loading..."
        }

        return (
            <MobileContainer>
                <AvatarBlock>
                    <MobileImageBlock>
                        <img width="40" src={avatar}/>
                    </MobileImageBlock>

                    <div>
                        <UserName>{this.props.profile.fullName}</UserName>
                    </div>
                </AvatarBlock>

                <MobileDiv>
                    <MobileImageBlock>
                        <HomeBorderIcon width="30" src={home}/>
                    </MobileImageBlock>

                    <div>
                        <TitleName>Main Stream</TitleName>
                    </div>
                </MobileDiv>

                <MobileDiv>
                    <MobileImageBlock>
                        <img width="30" src={megaphone}/>
                    </MobileImageBlock>

                    <div>
                        <TitleName>News</TitleName>
                    </div>
                </MobileDiv>

                <MobileDiv>
                    <MobileImageBlock>
                        <img width="30" src={profile}/>
                    </MobileImageBlock>

                    <div>
                        <TitleName>Profile</TitleName>
                    </div>
                </MobileDiv>

                <MobileDiv>
                    <MobileImageBlock>
                        <img width="30" src={lessons}/>
                    </MobileImageBlock>

                    <div>
                        <TitleName>Lessons</TitleName>
                    </div>
                </MobileDiv>
            </MobileContainer>
        );
    }
}