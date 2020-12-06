import styled from "styled-components";

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