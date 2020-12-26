import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const MobileContainer = styled.div`
  z-index: 1200;
  padding: 20px;
  padding-bottom: 10px;
  width: 100%;
  background: white;
  border-bottom: 1px solid #0000002e;
  -moz-box-shadow: 0 5px 10px -2px #80808033;
  -webkit-box-shadow: 0 5px 10px -2px #80808033;
  box-shadow: 0 5px 10px -2px #80808033;
`;

export const MobileList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const AvatarBlock = styled(MobileList)`
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
`;

export const HomeBorderIcon = styled.img`
    border-bottom: 2px solid #ff7b77;
    padding-bottom: 5px;
`;

export const MobileImageBlock = styled.div`
    margin-right: 15px;
`;

export const UserName = styled.p`
    font-weight: 500;
`;

export const TitleName = styled.p`
    font-size: 14px;
    padding: 0px 15px 5px 15px;
`;


export const StyledLink = styled(NavLink)`
    color: black;
`;