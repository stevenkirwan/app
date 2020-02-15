import styled from "styled-components";

export const BeerDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:column-reverse;
  > div {
    flex: 1;
  }
  img {
    padding-right: 4rem;
    margin-top:2rem;
  }

  a {
    display: inline-block;
    margin-top: 2rem;
  }

  @media ${props => props.theme.grid.medium} {
    flex-direction:row;
    img{
        margin-top:0;
    }
  }
`;
