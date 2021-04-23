import { FC } from 'react';
import Select from '../../atoms/Select/Select';
import Text from '../../atoms/Text/Text';
import Status from '../Status/Status';
import { StyledListItemWrapper, StyledNameWrapper } from './ListItem.styles';

interface StatusProps {
  online?: boolean;
  offline?: boolean;
  reboot?: boolean;
}

const ListItem: FC<StatusProps> = ({ online, offline, reboot }) => (
  <StyledListItemWrapper>
    <StyledNameWrapper>
      <Text>US East (Virginia)</Text>
      <Status online={online} offline={offline} reboot={reboot} />
    </StyledNameWrapper>
    <Select />
  </StyledListItemWrapper>
);

export default ListItem;
