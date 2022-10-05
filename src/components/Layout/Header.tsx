import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../../public/images/logo.svg';
import NavigationLinks from '../common/NavigationLinks';

const Container = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

const Header = () => {
  return (
    <Container>
      <Image
        src={logo}
        alt="Logo"
      />
      <NavigationLinks />
    </Container>
  );
};

export default Header;
