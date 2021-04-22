import { FC } from 'react';
import StyledText from './Text.styles';

interface TextProps {
  children: string;
  webtitle?: boolean;
}

const Text: FC<TextProps> = ({ children, webtitle }) => <StyledText webtitle={webtitle}>{children}</StyledText>;

export default Text;
