import { FC } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';
import StyledStatusWrapper from './Status.styles';

interface StatusProps {
  status: string;
}

const Status: FC<StatusProps> = ({ status }) => (
  <StyledStatusWrapper>
    {status === 'ONLINE' && (
      <>
        <Icon icon="dot" dot />
        <Text online>online</Text>
      </>
    )}

    {status === 'OFFLINE' && (
      <>
        <Icon icon="cross" cross />
        <Text offline>offline</Text>
      </>
    )}

    {status === 'REBOOTING' && <Text reboot>rebooting...</Text>}
  </StyledStatusWrapper>
);

export default Status;
