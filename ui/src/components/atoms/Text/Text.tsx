import { FC } from 'react';
import StyledText from './Text.styles';

interface TextProps {
  children: string;
}

const Text: FC<TextProps> = ({ children }) => <StyledText>{children}</StyledText>;

export default Text;
