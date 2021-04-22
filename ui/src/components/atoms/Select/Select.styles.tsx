import styled from 'styled-components';
import dots from '../../../assets/icons/dots.svg';

const StyledSelect = styled.select`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  appearance: none;
  background-image: url(${dots});
  background-repeat: no-repeat;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fontFamilies.primary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border: none;

  svg {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

export default StyledSelect;
