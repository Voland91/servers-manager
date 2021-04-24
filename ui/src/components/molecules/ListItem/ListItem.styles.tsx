import styled from 'styled-components';

const StyledListItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1104px;
  height: 57px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: -2px auto 0 auto;
  border: solid 2px ${({ theme }) => theme.colors.light};
`;

const StyledNameWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  padding-left: 42px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`;

export { StyledListItemWrapper, StyledNameWrapper };
