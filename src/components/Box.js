import styled from 'styled-components';

export const Box = styled.div`
  border: 1px solid ${props => props.theme.gray};
  border-radius: ${props => props.theme.radius};

  @media print {
    border: 1px solid #000000;
    margin-bottom: 1rem;
  }

  &-heading {
    background-color: ${props => props.theme.tfBlue};
    border: 1px solid ${props => props.theme.tfBlue};
    border-radius: 4px 4px 0 0;
    color: #ffffff;
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
    margin: -1px -1px 0 -1px;
    padding: 8px 0;
    text-align: center;

    @media print {
      background-color: #efefef;
      border: 1px solid #000000;
      color: #000000;
      -webkit-print-color-adjust: exact;
    }
  }

  &-text {
    margin: 0;
    padding: 1rem;
  }

  &-list {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;

    &-item {
      padding: 0.5rem 1rem;

      a {
        color: #333333;
        text-decoration: none;
      }

      &--highlighted {
        background-color: #e6e6e6;
      }
    }
  }

  &-footer {
    border-top: 1px solid ${props => props.theme.gray};
    color: ${props => props.theme.tfBlue};
    display: block;
    font-size: 0.8rem;
    margin: 0;
    padding: 6px 0;
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;

    &:active,
    &:hover {
      color: ${props => props.theme.sbtciBlue};
      text-decoration: underline;
    }

    &:visited {
      color: ${props => props.theme.tfBlue};
    }
  }
`;

export const SummaryBox = styled(Box)`
  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    grid-column: 2 / 3;
    grid-row: span 1;
  }

  .text {
    padding: 1rem;
    text-align: center;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    margin: 0 -1px -1px;
  }

  .button {
    color: #ffffff;
    display: block;
    flex: 1 0 auto;
    text-align: center;
    text-decoration: none;

    svg {
      margin: 12px;
      width: 20px;
    }

    &:active,
    &:hover,
    &:visited {
      color: #ffffff;
    }

    &:first-of-type {
      border-radius: 0 0 0 ${props => props.theme.radius};
    }

    &:last-of-type {
      border-radius: 0 0 ${props => props.theme.radius} 0;
    }
  }

  @media print {
    display: none;
  }
`;

export const SocialBox = styled(SummaryBox)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
`;
