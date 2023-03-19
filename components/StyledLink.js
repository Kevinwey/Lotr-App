import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  color: var(--color-earth);
  font-family: var(--font-family);
  text-decoration: none;
  gap: 0.5rem;
  align-self: ${(props) =>
    props.direction === "right" ? "flex-end" : "flex-start"};
  text-align: ${(props) => props.direction};
`;

export default StyledLink;
