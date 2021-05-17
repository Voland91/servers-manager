import { FC } from 'react';
import StyledTextInputWrapper from './TextInput.styles';

interface TextInputProps {
  value?: string | number;
  handleSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: FC<TextInputProps> = ({ value, handleSearch }) => (
  <StyledTextInputWrapper placeholder="Search" type="text" onChange={handleSearch} value={value} />
);

export default TextInput;
