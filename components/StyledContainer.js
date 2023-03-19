import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  gap: 24px;
  width: 100%;
  background: linear-gradient(
      110.24deg,
      rgba(255, 255, 255, 0) 49.9%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    ${(props) => props.color};
`;

export default StyledContainer;
