import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  padding: 0 15px;

  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    ${props => (props.narrow ? `max-width: 600px;` : null)};
  }
`;
