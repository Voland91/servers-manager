import styled from 'styled-components';

const StyledSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 263px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.lightBg};
  border: solid 2px ${({ theme }) => theme.colors.grayLight};
  border-radius: 50px;
`;

export default StyledSearchBarWrapper;
