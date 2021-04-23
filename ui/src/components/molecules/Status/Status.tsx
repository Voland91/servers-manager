import { FC } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';
import StyledStatusWrapper from './Status.styles';

interface StatusProps {
  online?: boolean;
  offline?: boolean;
  reboot?: boolean;
}

const Status: FC<StatusProps> = ({ online, offline, reboot }) => (
  <StyledStatusWrapper>
    {online && (
      <>
        <Icon icon="dot" dot />
        <Text online>online</Text>
      </>
    )}

    {offline && (
      <>
        <Icon icon="cross" cross />
        <Text offline>offline</Text>
      </>
    )}

    {reboot && <Text reboot>rebooting...</Text>}
  </StyledStatusWrapper>
);

export default Status;
