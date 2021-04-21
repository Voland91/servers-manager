import styled from 'styled-components';

interface StyledTitleProps {
  hero?: boolean;
}

const StyledTitle = styled.p<StyledTitleProps>`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export default StyledTitle;
