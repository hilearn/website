import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface ComponentProps {
  src: StaticImageData;
  alt: string;
}

const Container = styled.div`
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const RoundedImage = ({ src, alt }: ComponentProps) => {
  return (
    <Container>
      <StyledImage
        src={src}
        height={96}
        width={96}
        alt={alt}
        placeholder="blur"
      />
    </Container>
  );
};

export default RoundedImage;
