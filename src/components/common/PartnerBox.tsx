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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #1C1C1C;
  gap: 14px;
`;

const StyledPartnerDescription = styled.div`
  max-width: 532px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #1C1C1C;
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
          <Typography>{companyName}</Typography>
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
