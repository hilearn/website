import Image from 'next/image';
import styled from 'styled-components';
import logo from '../../../public/images/logo.svg';
import NavigationLinks from '../common/NavigationLinks';
import menu from '../../../public/images/menu.svg';
import menuClose from '../../../public/images/menuClose.svg';
import { useState } from 'react';
import { Larger, Smaller } from '../common/Togglers';

const Container = styled.nav`
  position: relative;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

const Menu = styled.button`
  border: none;
  background: none;
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

  const icon = open ? menuClose : menu;

  return (
    <Container>
      <Content>
        <Image
          src={logo}
          alt="Logo"
        />
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
            <NavigationLinks vertical />
          </MobileNavigationContainer>
        )}
    </Container>
  );
};

export default Header;
