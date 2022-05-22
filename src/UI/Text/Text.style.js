import styled from 'styled-components';
import { pageColors } from '../../helpers/pageColors';

export const P = styled.p`
  font-size: 1.15rem;
  text-align: justify;
  text-indent: 2rem;
  margin: 2rem 1rem;

  & a {
    border-bottom: 1px solid ${pageColors.primary};

    &:hover {
      border-bottom: 2px solid ${pageColors.primary};
      color: ${pageColors.primary};
      font-weight: 900;
    }
  }
`;
