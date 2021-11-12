import styled from "styled-components";
import img from "../images/Panel.png";

interface IPanelView {
  width: string;
  height: string;
}

export const PanelView = styled.div<IPanelView>`
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "40px"};
  background-image: url(${img});
`;
