import Image from 'next/image';
import styled from 'styled-components';
import { startTransition, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import logo from '../../../public/images/logo.svg';
import NavigationLinks from '../common/NavigationLinks';
import menu from '../../../public/images/menu.svg';
import menuClose from '../../../public/images/menuClose.svg';
import { Larger, Smaller } from '../common/Togglers';
import { clearDefaultButtonStyles, homePageResponsivePadding } from '../../sharedStyles';
import theme from '../../theme';

const Container = styled.nav`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  ${homePageResponsivePadding};
  display: flex;
  width: 1200px;
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
  const header = useRef(null);

  useEffect(() => {
    const scrollListener = () => {
      if (window.pageYOffset >= 10) {
        header.current.style.backgroundColor = "#FFFFFF";
      } else {
        header.current.style.backgroundColor = theme.colors.background;
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleCloseMenu = () => {
    startTransition(() => {
      setOpen(false);
    });
  };

  const icon = open ? menuClose : menu;

  return (
    <Container ref={header} >
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
