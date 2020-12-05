import styled from "styled-components";
import {StyledImg} from "../InfoBox/InfoBox.styled";

export const StyledCloseButton = styled(StyledImg)`
  align-self: flex-end;
  margin: 4px;
  flex-shrink: 0;
  ${(props) => props.cancelButtonStyles};
`;