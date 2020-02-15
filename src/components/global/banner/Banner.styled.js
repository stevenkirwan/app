import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  padding: 4rem;
  border: 2px solid black;
  margin-bottom: 4rem;

  h1{
      font-size:2.8rem;
      margin-bottom:2rem;

      span{
        display:block;
      }
  }

  @media ${props => props.theme.grid.medium} {
    flex-direction:row;
    h1{
        margin-bottom:0;
    }
  }
`;
