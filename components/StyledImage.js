import styled from "styled-components";
import Image from "next/image";

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

export default StyledImage;
