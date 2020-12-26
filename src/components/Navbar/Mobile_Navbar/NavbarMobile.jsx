import React from 'react';
import avatar from "../../../backgrounds/tt_avatar_small.jpg"
import lessons from './icons/lessons.png'
import megaphone from './icons/megaphone.png'
import profile from './icons/profile.png'
import home from '../icons/home.png'
import {
    MobileContainer, MobileList, AvatarBlock,
    MobileImageBlock, UserName, TitleName, StyledLink
} from './css/NavbarMobile-Styled-Component'
import LoadingMobile from "./Gif_Loading/Loading_Gif";


export class NavbarMobile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listItem: [
                {
                    icon: home,
                    item: <StyledLink to={'./login'}>Main Stream</StyledLink>
                },
                {
                    icon: megaphone,
                    item: <StyledLink to={'./login'}>News</StyledLink>
                },
                {
                    icon: profile,
                    item: <StyledLink to={'./login'}>Profile</StyledLink>
                },
                {
                    icon: lessons,
                    item: <StyledLink to={'./login'}>Lessons</StyledLink>
                },
            ],
        }
    }

    render() {

        if (!this.props.profile) {
            return <LoadingMobile />
        }

        const menuList = this.state.listItem.map((item, index) => {
            return (
                <MobileList key={index}>
                    <div>
                        <img width="30" src={item.icon} />
                    </div>

                    <div>
                        <TitleName>{item.item}</TitleName>
                    </div>
                </MobileList>
            );
        });

        return (
            <MobileContainer>
                <AvatarBlock>
                    <MobileImageBlock>
                        <img width="40" src={avatar} />
                    </MobileImageBlock>

                    <div>
                        <UserName>{this.props.profile.fullName}</UserName>
                    </div>
                </AvatarBlock>

                <div>
                    <ul>
                        {menuList}
                    </ul>
                </div>
            </MobileContainer>
        );
    }
}