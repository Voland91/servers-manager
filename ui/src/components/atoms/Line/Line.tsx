import { FC } from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  background-color: ${({ theme }) => theme.colors.grayDark};
  height: 35px;
  width: 2px;
  margin: 0 31px;
`;

const Line: FC = () => <StyledLine />;

export default Line;
