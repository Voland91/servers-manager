import styled from 'styled-components';

const StyledNavBarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  width: 100vw;
  height: 73px;
`;

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1925px;
  margin: 0 auto;
`;

export { StyledNavBarWrapper, StyledNavBar };
