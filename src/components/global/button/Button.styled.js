import styled from "styled-components";

export const ButtonWrapper = styled.button`
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  background: ${props => props.theme.color.primary.base};
  border-radius: 0.5rem;
  color: ${props => props.theme.color.primary.white};
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: normal;
  min-height: 3.2rem;
  overflow: visible;
  padding: 1.9rem 1.7rem;
  text-align: inherit;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s;
  width: auto;
  &:hover {
    background: ${props => props.theme.color.primary.dark};
  }
`;
