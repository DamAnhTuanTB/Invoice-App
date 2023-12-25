import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: var(--background-main);
`;

export const Content = styled.div`
  flex: 1;
  height: 100%;
  color: var(--color-text-main);
  padding: 0px 15px;
  overflow-y: auto;
`;
