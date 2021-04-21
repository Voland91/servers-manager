import styled from 'styled-components';

const StyledHeader = styled.h3`
  color: ${({ theme }) => theme.colors.grayBlue};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-transform: uppercase;
`;

export default StyledHeader;
