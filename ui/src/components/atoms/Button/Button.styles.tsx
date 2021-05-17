import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 11px 10px;
  margin-right: 36px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBg};
  }
`;

export default StyledButton;
