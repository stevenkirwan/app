import styled from "styled-components";

export const AppWrapper = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 100%;

  @media ${props => props.theme.grid.extraLarge} {
    width: 120rem;
  }
`;
