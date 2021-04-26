import { FC } from 'react';
import TextInput from '../../atoms/TextInput/TextInput';
import StyledSearchBarWrapper from './SearchBar.styles';
import Icon from '../../atoms/Icon/Icon';

interface SearchBarProps {
  value?: string | number;
  handleSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: FC<SearchBarProps> = ({ handleSearch, value }) => (
  <StyledSearchBarWrapper>
    <Icon icon="search" />
    <TextInput handleSearch={handleSearch} value={value} />
  </StyledSearchBarWrapper>
);

export default SearchBar;
