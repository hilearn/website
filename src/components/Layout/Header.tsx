import Image from 'next/image';
import styled from 'styled-components';
import { startTransition, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import logo from '../../../public/images/optimized/logo.svg';
import NavigationLinks from '../common/NavigationLinks';
import menu from '../../../public/images/optimized/menu.svg';
import menuClose from '../../../public/images/optimized/menuClose.svg';
import { Larger, Smaller } from '../common/Togglers';
import { clearDefaultButtonStyles, homePageResponsivePadding } from '../../sharedStyles';

interface MobileNavigationContainerProps {
  headerIsFixed?: boolean;
  open?: boolean;
}

const Container = styled.nav<MobileNavigationContainerProps>`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  background-color: ${({ theme, headerIsFixed , open}) => headerIsFixed || open? '#fff' : theme.colors.background};
`;

const Content = styled.div`
  ${homePageResponsivePadding};
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
`;

const StyledImage = styled(Image)`
  cursor: pointer;
`;

const Menu = styled.button`
  ${clearDefaultButtonStyles}
`;

const MobileNavigationContainer = styled.div<MobileNavigationContainerProps>`
  position: absolute;
  top: 87px;
  left: 0;
  width: 100%;
  background-color: ${({ open }) => open && '#fff'};
  padding: 24px 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  animation: openNavBar .2s linear;
  animation-fill-mode: forwards;
  transition: all .2s ease-out;

  @keyframes openNavBar {
    from {
      height: 0px;
    }
    to {
      height: 273px;
    }
  }
`;

const Header = () => {

  const [open, setOpen] = useState(false);
  const [headerIsFixed, setHeaderIsFixed] = useState(false);
  const header = useRef(null);  
  
  useEffect(() => {
    const scrollListener = () => {
      setHeaderIsFixed(window && window.scrollY > 10);        
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
    <Container ref={header} open={open} headerIsFixed={headerIsFixed}>
      <Content>
        <Link href="/" passHref>
          <a>
            <StyledImage
              src={logo}
              alt="Logo"
            />
          </a>
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
        <MobileNavigationContainer open={open}>
          <NavigationLinks vertical onClick={handleCloseMenu} />
        </MobileNavigationContainer>
      )}
    </Container>
  );
};

export default Header;
