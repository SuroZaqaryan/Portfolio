import styled from "styled-components";

export const MobileContainer = styled.div`
  position: absolute;
  z-index: 1200;
  padding: 20px;
  padding-bottom: 15px;
  width: 100%;
  background: white;
  border-bottom: 1px solid #0000002e;
`;

export const MobileDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const AvatarBlock = styled(MobileDiv)`
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
    padding-bottom: 4px;
`;