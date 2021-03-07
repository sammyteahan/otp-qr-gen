import styled from 'styled-components';

const BaseButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
`;

const PrimaryButton = styled(BaseButton)`
  background: var(--yellow);
  border: 2px solid var(--yellow);
`;

const SecondaryButton = styled(BaseButton)`
  background: var(--steel);
  border: 2px solid var(--steel);
  color: var(--white);
`;

export { PrimaryButton, SecondaryButton };
