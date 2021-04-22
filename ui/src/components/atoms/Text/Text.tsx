import { FC } from 'react';
import StyledText from './Text.styles';

interface TextProps {
  children: string;
  webtitle?: boolean;
  online?: boolean;
}

const Text: FC<TextProps> = ({ children, webtitle, online }) => (
  <StyledText webtitle={webtitle} online={online}>
    {children}
  </StyledText>
);

export default Text;
