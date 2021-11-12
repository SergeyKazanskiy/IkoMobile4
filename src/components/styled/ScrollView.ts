import styled from "styled-components";

interface IScrollView {
  width: string;
  height: string;
}

export const ScrollView = styled.div<IScrollView>`
  height: ${(props) => props.height || "400px"};
  width: ${(props) => props.width || "70px"};
  overflow: scroll;
`;
