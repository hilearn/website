import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../../public/images/logo.svg';
import NavigationLinks from '../common/NavigationLinks';
import menu from '../../../public/images/menu.svg';
import menuClose from '../../../public/images/menuClose.svg';
import { startTransition, useState } from 'react';
import { Larger, Smaller } from '../common/Togglers';
import Link from 'next/link';
import { clearDefaultButtonStyles } from '../../sharedStyles';

const Container = styled.nav`
  position: relative;
  margin-bottom: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledImage = styled(Image)`
  cursor: pointer;
`;

const Menu = styled.button`
  ${clearDefaultButtonStyles}
`;

const MobileNavigationContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px 0;
  z-index: 9999;
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleCloseMenu = () => {
    startTransition(() => {
      setOpen(false);
    })
  };

  const icon = open ? menuClose : menu;

  return (
    <Container>
      <Content>
        <Link href="/">
          <StyledImage
            src={logo}
            alt="Logo"
          />
        </Link>
        <Smaller>
          <Menu onClick={handleToggleMenu}>
            <Image src={icon} alt="Menu" />
          </Menu>
        </Smaller>
        <Larger>
          {!open && (
            <NavigationLinks />
          )}
        </Larger>
      </Content>
      {open && (
          <MobileNavigationContainer>
            <NavigationLinks vertical onClick={handleCloseMenu} />
          </MobileNavigationContainer>
        )}
    </Container>
  );
};

export default Header;
