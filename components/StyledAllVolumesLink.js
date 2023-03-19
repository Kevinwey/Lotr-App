import styled from "styled-components";
import Link from "next/link";

const StyledAllVolumesLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 32px;
  color: var(--color-earth);
  font-family: var(--font-family);
  text-decoration: none;
  gap: 4px;
`;

export default StyledAllVolumesLink;
