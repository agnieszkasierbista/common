import styled from "styled-components";

export const StyledInfoBox = styled.div`
  width: 70%;
  border: 6px double black;
  border-radius: 6px;
  position: fixed;
  top: 11%;
  right: 14%;
  background-color: white;
  display: flex;
  flex-flow: column;
  box-shadow: 6px 6px 10px dimgrey;
  overflow: auto;
  max-height: 85%;
  ${(props) => props.containerStyles};
`;

export const StyledContent = styled.div`
  padding: 10px;
  font-size: 23px;
  text-align: justify;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;  
  background-color: transparent;
`;

export const StyledImg = styled.img`
`;

//TODO: take from client2 project
export const StyledCloseButton = styled(StyledImg)`
  align-self: flex-end;
  margin: 4px;
  flex-shrink: 0;
  ${(props) => props.cancelButtonStyles};
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${(props) => props.width || "60%"};
  padding: 15px;
`;

export const StyledButtonsContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

//TODO: take from client2 project
export const StyledButton = styled.button`
  border: 2px solid black;
  font-size: 23px;
  padding: 4px 10px;
  height: 40px;
  border-radius: 4px;
  background-color: white;
  outline: none;
  ${(props) => props.styles};
`;
