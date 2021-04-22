import styled, { css } from 'styled-components';

interface StyledTextProps {
  webtitle?: boolean;
  online?: boolean;
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

  ${({ online }) =>
    online &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.green};
      text-transform: uppercase;
    `}
`;

export default StyledText;
