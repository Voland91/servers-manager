import { FC } from 'react';
import TextInput from '../../atoms/TextInput/TextInput';
import StyledSearchBarWrapper from './SearchBar.styles';
import Icon from '../../atoms/Icon/Icon';

const SearchBar: FC = () => (
  <StyledSearchBarWrapper>
    <Icon icon="search" />
    <TextInput />
  </StyledSearchBarWrapper>
);

export default SearchBar;
