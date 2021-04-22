import styled, { css } from 'styled-components';

interface StyledTextProps {
  webtitle?: boolean;
}

const StyledText = styled.p<StyledTextProps>`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${({ webtitle }) =>
    webtitle &&
    css`
      font-family: ${({ theme }) => theme.fontFamilies.secondary};
      font-size: ${({ theme }) => theme.fontSizes.m};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      color: ${({ theme }) => theme.colors.white};
    `}
`;

export default StyledText;
