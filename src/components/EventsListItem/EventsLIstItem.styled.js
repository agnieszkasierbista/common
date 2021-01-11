import styled from "styled-components";

export const StyledEvent = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 4% 84% 10% 2%;
  margin-top: 10px;
  padding-bottom: 10px;
  background: ${(props) => `linear-gradient(${props.theme.colors.c2} 50%, ${props.theme.colors.c1})`};
`;

export const StyledLink = styled.div`
  grid-column-start: 2;
  margin-right: 5px;
  ${(props) => props.linkStyles};
`;

export const StyledDateAndTime = styled.div`
  grid-column-start: 3;
  text-align: right;
  font-size: 16px;
  grid-template-columns: 75% 25%;
  column-gap: 4px;
  display: grid; 
`;

export const StyledListDetails = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 5% 5% calc(90% - 20px);
  grid-column-gap: 10px;
  margin-top: 10px;
`;

export const StyledEventData = styled.div`
  margin-top: 5px;
  font-size: 24px;
`;

export const StyledRemoveContainer = styled.div`
  grid-column-start: 3;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
