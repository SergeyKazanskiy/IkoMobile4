import styled from "styled-components";

interface IButtonsView {
  width?: string;
}

export const ButtonsView = styled.div<IButtonsView>`
  width: ${(props) => props.width || "74px"};
  height: 30px;
  border: 1px solid gold;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
