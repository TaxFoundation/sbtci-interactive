import styled, { css } from 'styled-components';

export const ButtonStyles = css`
  background-color: #00aa22;
  border: none;
  border-radius: ${props => props.theme.radius};
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  text-align: center;
  text-decoration: none;

  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    margin-bottom: 0;
  }
`;

export const CenteredButtonStyles = css`
  display: block;
  margin: 1rem auto;
  max-width: 80%;

  @include tablet-up {
    max-width: 9rem;
  }
`;

export const Button = styled.button`
  ${ButtonStyles};
`;

export const CenteredButton = styled.button`
  ${CenteredButtonStyles};
`;