import styled, { css } from 'styled-components';

interface MenuWrapperProps {
  open: boolean;
}

const StyledMenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  right: 0;
  top: 0;
  width: 137px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.4);
  display: none;
  z-index: 999;

  ${({ open }) =>
    open &&
    css`
      display: block;
    `}
`;
const StyledUl = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 55px;
  padding-left: 28px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBg};
  }
`;

export { StyledMenuWrapper, StyledUl, StyledLi };
