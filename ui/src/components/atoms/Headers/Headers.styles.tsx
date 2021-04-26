import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const StyledH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.colors.grayBlue};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-transform: uppercase;
`;

export { StyledH1, StyledH2, StyledH3 };
