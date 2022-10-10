import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import Typography from "./Typography";

interface ComponentProps {
  logo: StaticImageData;
  title: string;
}

const Banner = styled.div`
  display: grid;
  grid-template: 1fr / 1fr;
`;

const PartnersBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #FFFFFF;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  gap: 32px;
`;

const PartnerLogoNameBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const StyledPartnerDescription = styled(Typography)`
  max-width: 532px;
  font-weight: 400;
  line-height: 130%;
`;

const PartnersBox = ({
  logo,
  title,
}: ComponentProps) => {
  return (
    <Banner>
      <PartnersBlock>
        <PartnerLogoNameBlock>
          {logo && (
            <Image src={logo} height={37} alt="Logo" />
          )}
        </PartnerLogoNameBlock>
        <StyledPartnerDescription>{title}</StyledPartnerDescription>
      </PartnersBlock>
    </Banner>
  );
};

export default PartnersBox;
