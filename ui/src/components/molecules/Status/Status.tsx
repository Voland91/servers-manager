import { FC } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';
import StyledStatusWrapper from './Status.styles';

type Status = 'online' | 'offline' | 'reboot';

interface HeaderProps {
  type?: Status;
}

const Status: FC<HeaderProps> = ({ type }) => (
  <>
    {(() => {
      switch (type) {
        case 'online':
          return (
            <StyledStatusWrapper>
              <Icon icon="dot" dot />
              <Text online>online</Text>
            </StyledStatusWrapper>
          );
        case 'offline':
          return (
            <StyledStatusWrapper>
              <Icon icon="dot" dot />
              <Text online>online</Text>
            </StyledStatusWrapper>
          );
        case 'reboot':
          return (
            <StyledStatusWrapper>
              <Icon icon="dot" dot />
              <Text online>online</Text>
            </StyledStatusWrapper>
          );
      }
    })()}
  </>
);

export default Status;
