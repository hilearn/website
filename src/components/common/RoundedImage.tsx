import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface ComponentProps {
  src: StaticImageData;
  style?: React.CSSProperties;
}

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const RoundedImage = ({ src, style }: ComponentProps) => {
  return (
    <StyledImage
      src={src}
      height={96}
      width={96}
      style={style}
    />
  );
};

export default RoundedImage;
