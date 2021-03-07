import Link from 'next/link';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderStyles>
      <Logo>
        <Link href="/">QR GENERATOR</Link>
      </Logo>
      <Link href="/about">About</Link>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  background: var(--yellow);
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  color: var(--black);
`;

const Logo = styled.h1`
  a {
    color: var(--black);
  }
`;

export { Header as default };
