import styled from 'styled-components';

const StyledInputWrapper = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.gray};
  border: none;
  background-color: transparent;
  outline: none;
`;

export default StyledInputWrapper;
