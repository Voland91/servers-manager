import { FC } from 'react';
import StyledText from './Text.styles';

interface TextProps {
  children: string;
  webtitle?: boolean;
  online?: boolean;
  offline?: boolean;
  reboot?: boolean;
}

const Text: FC<TextProps> = ({ children, webtitle, online, offline, reboot }) => (
  <StyledText webtitle={webtitle} online={online} offline={offline} reboot={reboot}>
    {children}
  </StyledText>
);

export default Text;
