import styled, { css } from 'styled-components';

interface StyledIconProps {
  circle?: boolean;
}

const StyledIcon = styled.svg<StyledIconProps>`
  height: 20px;
  width: 20px;
  fill: ${({ theme }) => theme.colors.gray};
  margin-left: 14px;
  margin-right: 21px;

  ${({ circle }) =>
    circle &&
    css`
      height: 17px;
      width: 17px;
      fill: ${({ theme }) => theme.colors.purple};
      margin-left: 27px;
      margin-right: 14px;
    `}
`;

export default StyledIcon;
