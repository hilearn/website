import Link from "next/link";
import styled from "styled-components";

import LinkedinIcon from "../icons/LinkedinIcon";

interface ComponentProps {
  href: string;
}

const IconContainer = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.socialIcon};
  transition: color 300ms;
  :hover {
    color: ${({ theme }) => theme.colors.hover.onBlack};
  }
`;

const Linkedin = ({ href }: ComponentProps) => {
  return (
    <Link href={href} passHref>
      <IconContainer target="_blank" >
        <LinkedinIcon />
      </IconContainer>
    </Link>
  );
};

export default Linkedin;
