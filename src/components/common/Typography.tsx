import styled from "styled-components";

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface ComponentProps {
  children: React.ReactNode;
  size?: Size;
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
  size: Size;
}

const StyledTypography = styled.p<StyledTypographyProps>`
  font-family: Inter;
  letter-spacing: 0em;
  color: ${({ theme, $color, customColor }) => customColor || theme.colors.text[$color]};
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || 0};
  ${({ size }) => {
    if (size === 'xs') {
      return `
        font-size: 13px;
      `;
    } else if (size === 'sm') {
      return `
        font-size: 14px;
      `;
    } else if (size === 'lg') {
      return `
        font-size: 24px;
      `;
    } else if (size === 'xl') {
      return `
        font-size: 32px;
      `;
    } else if (size === 'xxl') {
      return `
        font-size: 48px;
      `;
    } else if (size === 'xxxl') {
      return `
        font-size: 64px;
      `;
    } else {
      return `
        font-size: 16px;
      `;
    }
  }}
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
    size = 'md',
  } = props;

  return (
    <StyledTypography
      as={as}
      $color={color}
      customColor={customColor}
      padding={padding}
      margin={margin}
      className={className}
      size={size}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
