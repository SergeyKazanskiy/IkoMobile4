import styled from "styled-components";

interface IButtonView {
  width?: string;
  color?: string;
}

export const ButtonView = styled.button<IButtonView>`
  width: ${(props) => props.width || "74px"};
  color: ${(props) => props.color || "#222"};
  display: inline-block;
  padding: 3px 5px 5px 5px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(0deg, gold 5%, chocolate 40%, gold 80%);
  border: 1px solid #777;
  border-radius: 4px;
  box-shadow: 0 2px #999;
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 0.7px #666;
    color: yellow;
    transform: translateY(1px);
  }
`;
