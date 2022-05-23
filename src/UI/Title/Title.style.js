import styled from 'styled-components';

export const H1 = styled.h1`
  width: fit-content;
  font-size: 2.5rem;
  margin: 0 auto ${(props) => ' ' + props.marginBottom};
  letter-spacing: 0.125rem;
`;
