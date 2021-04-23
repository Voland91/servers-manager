import styled from 'styled-components';

const StyledListHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1104px;
  height: 74px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  border: solid 2px ${({ theme }) => theme.colors.light};
  padding-right: 70px;
`;

const StyledHeader = styled.div`
  width: 100%;
  max-width: 400px;
  padding-left: 42px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`;

export { StyledListHeaderWrapper, StyledHeader };
