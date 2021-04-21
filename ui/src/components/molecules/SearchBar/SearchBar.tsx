import { FC } from 'react';
import Input from '../../atoms/Input/Input';
import StyledSearchBarWrapper from './SearchBar.styles';
import Icon from '../../atoms/Icon/Icon';

const SearchBar: FC = () => (
  <StyledSearchBarWrapper>
    <Icon icon="search" />
    <Input />
  </StyledSearchBarWrapper>
);

export default SearchBar;
