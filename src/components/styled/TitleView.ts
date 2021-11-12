import styled from "styled-components";

interface ITitleView {
  width: string;
  color: string;
}

export const TitleView = styled.div<ITitleView>`
  width: ${(props) => props.width || "74px"};
  color: "#222";
  display: inline-block;
  padding: 3px 5px 5px 5px;
  font-size: 12px;
  background-color: "gold";
  border: 1px solid #777;
  border-radius: 4px;
`;
