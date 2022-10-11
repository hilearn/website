import Image from "next/image";
import styled from "styled-components";

import arrow from '../../../public/images/long_right.svg';
import close from '../../../public/images/close.svg';

import Typography from "./Typography";

interface ComponentProps {
  iconSrc: string;
  title: string;
  caption: string;
  additional?: string;
  open?: boolean;
}

const Info = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px;
  margin-right: 24px;
  width: 40px;
  height: 40px;
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
  }
  @media (max-width: 395px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`;

const StyledCaption = styled(Typography)`
  font-weight: 400;
  line-height: 19px;
`;

const AdditionalInfo = styled.div`
  display: flex;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  margin-right: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
`;

const AdditionalAndIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HugeButtonContent = (props: ComponentProps) => {
  const {
    iconSrc,
    title,
    caption,
    additional,
    open,
  } = props;

  const icon = open ? close : arrow;
  return (
    <>
      <Info>
        <MainInfo>
          <IconContainer>
            <Image src={iconSrc} alt="" />
          </IconContainer>
          <Texts>
            <StyledTitle margin="0 0 4px 0">
              {title}
            </StyledTitle>
            <StyledCaption>
              {caption}
            </StyledCaption>
          </Texts>
        </MainInfo>
      </Info>
      <AdditionalAndIconContainer>
        {additional && (
          <AdditionalInfo>
            {additional}
          </AdditionalInfo>
        )}
        <Image src={icon} alt="" />
      </AdditionalAndIconContainer>
    </>
  );
};

export default HugeButtonContent;
