import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled, { css } from "styled-components";
import PagePaths from "../../utils/constants/pagePaths";
import Typography from "./Typography";

type ComponentProps = ContainerProps & {
  onClick?: VoidFunction;
};

interface ContainerProps {
  vertical?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  grid-gap: 32px;
  ${({ vertical }) => vertical ? (`
    flex-direction: column;
  `) : (`
    flex-direction: row;
  `)};
`;

const StyledTypography = styled(Typography)`
  font-weight: 500;
  line-height: 19px;
`;

const activeStyle = css`
  position: relative;
  ::before {
    content: " ";
    height: 4px;
    width: 18px;
    position: absolute;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledAnchor = styled.a`
  display: flex;
  & p {
    position: relative;
    ::before {
      transition: all 300ms;
      content: " ";
      height: 4px;
      width: 18px;
      position: absolute;
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.primary};
      opacity: 0;
    }
  }
  :hover, &.active {
    & p {
      ::before {
        opacity: 1;
      }
    }
  }
`;

type CustomLinkProps = LinkProps & {
  children: ReactNode;
  onClick: VoidFunction;
  className?: string;
}

const CustomLink = (props: CustomLinkProps) => (
  <Link {...props} passHref>
    <StyledAnchor onClick={props.onClick} className={props.className}>
      <StyledTypography>
        {props.children}
      </StyledTypography>
    </StyledAnchor>
  </Link>
)

const NavigationLinks = ({ vertical, onClick }: ComponentProps) => {
  const router = useRouter();

  return (
    <Container vertical={vertical}>
      <CustomLink href="/w" onClick={onClick}>
        What we do
      </CustomLink>
      <CustomLink href={PagePaths.team} onClick={onClick} className={`${router.pathname === PagePaths.team ? 'active' : ''}`}>
        The Team
      </CustomLink>
      <CustomLink href={PagePaths.careers} onClick={onClick} className={`${router.pathname === PagePaths.careers ? 'active' : ''}`}>
        Careers
      </CustomLink>
      <CustomLink href="/w" onClick={onClick}>
        Partners
      </CustomLink>
      <CustomLink href="#contacts" onClick={onClick}>
        Contacts
      </CustomLink>
    </Container>
  );
};

export default NavigationLinks;
