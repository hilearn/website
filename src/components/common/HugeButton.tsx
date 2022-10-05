import Image from "next/image";
import styled from "styled-components";

import arrow from '../../../public/images/long_right.svg'
import Typography from "./Typography";

interface ComponentProps {
  iconSrc: string;
  title: string;
  caption: string;
  additional?: string;
  withBottomGutter?: boolean;
}

interface StyledButtonProps {
  withBottomGutter: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  border: none;
  background-color: #fff;
  width: 100%;
  ${({ withBottomGutter }) => withBottomGutter && `
    margin-bottom: 16px;
  `}
`;

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
`;

const StyledCaption = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

const AdditionalInfo = styled.div`
  display: flex;
`;

const HugeButton = (props: ComponentProps) => {
  const {
    iconSrc,
    title,
    caption,
    additional,
    withBottomGutter,
  } = props;
  return (
    <StyledButton withBottomGutter={withBottomGutter}>
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
        {additional && (
          <AdditionalInfo>
            {additional}
          </AdditionalInfo>
        )}
      </Info>
      <Image src={arrow} alt="" />
    </StyledButton>
  );
};

export default HugeButton;
