import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80px;
  background-color: var(--tertiary-color);
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const Logo = styled.div`
  height: 80px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    z-index: 2;
  }
`;

export const BackgroundInline = styled.div`
  background-color: var(--secondary-color);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  border-top-left-radius: 15px;
  z-index: 0;
`;

export const BottomSection = styled.div``;

export const Theme = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 0px;
  border-bottom: 1px solid var(--secondary-color);
  img {
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
