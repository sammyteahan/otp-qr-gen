import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
})`
  padding: 1rem;
  border: 2px solid var(--black);
  border-radius: 0.1875rem;
  width: 100%;
`;

export { Input };
