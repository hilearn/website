import styled from "styled-components";

interface ComponentProps {
  children: React.ReactNode;
  as?: keyof HTMLElementTagNameMap;
  color?: 'primary' | 'secondary';
  customColor?: string;
  padding?: string;
  margin?: string;
  className?: string;
}

interface StyledTypographyProps {
  $color: 'primary' | 'secondary';
  customColor: string | undefined;
  padding: string | undefined;
  margin: string | undefined;
}

const StyledTypography = styled.p<StyledTypographyProps>`
  font-family: Inter;
  letter-spacing: 0em;
  color: ${({ theme, $color, customColor }) => customColor || theme.colors.text[$color]};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
`;

const Typography = (props: ComponentProps) => {
  const {
    as,
    children,
    color = 'primary',
    customColor,
    padding,
    margin,
    className,
  } = props;

  return (
    <StyledTypography
      as={as}
      $color={color}
      customColor={customColor}
      padding={padding}
      margin={margin}
      className={className}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
