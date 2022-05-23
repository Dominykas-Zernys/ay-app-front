import styled from 'styled-components';

export const Form = styled.form`
  display: grid;

  &.register {
    grid-template-columns: 1fr 1fr;

    & button {
      justify-self: center;
      grid-column: 1 / span 2;
    }
  }

  &.login {
    grid-template-columns: 1fr;
    width: 75%;
    margin: auto;

    & button {
      justify-self: center;
    }
  }

  &.advert {
    grid-template-columns: 1fr 1fr;

    & .textarea-wrapper {
      grid-column: 1 / span 2;
    }

    & p {
      grid-column: 1 / span 2;
    }

    & button {
      justify-self: center;
      grid-column: 1 / span 2;
    }
  }
`;
