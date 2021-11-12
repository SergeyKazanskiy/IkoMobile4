import styled from "styled-components";

interface IFlexView {
  direction?: string;
  align?: string;
  justify?: string;
}

export const FlexView = styled.div<IFlexView>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "center"};
`;
