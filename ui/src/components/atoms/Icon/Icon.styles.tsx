import styled, { css } from 'styled-components';

interface StyledIconProps {
  circle?: boolean;
  dot?: boolean;
  cross?: boolean;
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

  ${({ dot }) =>
    dot &&
    css`
      height: 7px;
      width: 7px;
      fill: ${({ theme }) => theme.colors.greenLight};
      margin-left: 0;
      margin-right: 7px;
    `}

  ${({ cross }) =>
    cross &&
    css`
      height: 10px;
      width: 11px;
      fill: ${({ theme }) => theme.colors.red};
      margin-left: 0;
      margin-right: 4px;
    `}
`;

export default StyledIcon;
