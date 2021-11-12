import styled from "styled-components";
import img from "../images/BookShelf.png";

interface IShalfView {
  width: string;
  height: string;
}

export const ShalfView = styled.div<IShalfView>`
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "40px"};
  background-image: url(${img});
`;
