import Typography from "./Typography";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface ComponentProps {
  logo?: StaticImageData;
  companyName: string;
  title: string;
  image: StaticImageData;
}

interface BgColorProps {
  bgColor?: boolean;
};

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

const StyledCompanyName = styled(Typography)`
  font-weight: 600;
  line-height: 30px;
`;

const StyledPartnerDescription = styled(Typography)`
  max-width: 532px;
  font-weight: 400;
  line-height: 130%;
`;

const PartnerLogo = styled.div<BgColorProps>`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const StyledImage = styled(Image)`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const PartnersBox = ({
  logo,
  image,
  companyName,
  title,
}: ComponentProps) => {
  return (
    <Banner>
      <PartnersBlock>
        <PartnerLogoNameBlock>
          {logo && (
            <Image src={logo} height={37} width={37} alt="Logo" />
          )}
          <StyledCompanyName size="lg">{companyName}</StyledCompanyName>
        </PartnerLogoNameBlock>
        <StyledPartnerDescription>{title}</StyledPartnerDescription>
      </PartnersBlock>
      <PartnerLogo>
        <StyledImage src={image} alt="Partner logo" />
      </PartnerLogo>
    </Banner>
  )
};

export default PartnersBox;
