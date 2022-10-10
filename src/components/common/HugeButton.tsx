import styled from "styled-components";
import { hugeButtonContainer } from "../../sharedStyles";

import HugeButtonContent from "./HugeButtonContent";

interface ComponentProps {
  iconSrc: string;
  title: string;
  caption: string;
  additional?: string;
  withBottomGutter?: boolean;
  onClick?: VoidFunction;
}

interface StyledButtonProps {
  withBottomGutter: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  ${hugeButtonContainer}
  ${({ withBottomGutter }) => withBottomGutter && `
    margin-bottom: 16px;
  `}
  transition: background-color 300ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover.onWhite};
  }
`;

const HugeButton = (props: ComponentProps) => {
  const {
    iconSrc,
    title,
    caption,
    onClick,
    additional,
    withBottomGutter,
  } = props;
  return (
    <StyledButton withBottomGutter={withBottomGutter} onClick={onClick}>
      <HugeButtonContent
        iconSrc={iconSrc}
        title={title}
        caption={caption}
        additional={additional}
      />
    </StyledButton>
  );
};

export default HugeButton;
