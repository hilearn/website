import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface ComponentProps {
  src: StaticImageData;
}

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const RoundedImage = ({ src }: ComponentProps) => {
  return (
    <StyledImage
      src={src}
      height={96}
      width={96}
    />
  );
};

export default RoundedImage;
