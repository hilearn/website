import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '../../../public/images/logo.svg';

const Container = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Links = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template: 1fr / repeat(5, 1fr);
`;

const Header = () => {
  return (
    <Container>
      <Image
        src={logo}
        alt="Logo"
      />
      <Links>
        <Link href="/w">
          What we do
        </Link>
        <Link href="/w">
          The Team
        </Link>
        <Link href="/w">
          Careers
        </Link>
        <Link href="/w">
          Partners
        </Link>
        <Link href="/w">
          Contacts
        </Link>
      </Links>
    </Container>
  );
};

export default Header;
