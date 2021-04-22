import React, { FC } from 'react';
import StyledIcon from './Icon.styles';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { ReactComponent as XIcon } from '../../../assets/icons/x.svg';
import { ReactComponent as CircleIcon } from '../../../assets/icons/circle.svg';
import { ReactComponent as DotIcon } from '../../../assets/icons/dot.svg';

type IconIcon = 'search' | 'x' | 'circle' | 'dot';

export interface IconProps {
  children?: string;
  icon?: IconIcon;
  circle?: boolean;
  dot?: boolean;
}

const Icon: FC<IconProps> = ({ icon, circle, dot }) => (
  <StyledIcon circle={circle} dot={dot}>
    {(() => {
      switch (icon) {
        case 'search':
          return <SearchIcon />;
        case 'x':
          return <XIcon />;
        case 'circle':
          return <CircleIcon />;
        case 'dot':
          return <DotIcon />;
      }
    })()}
  </StyledIcon>
);

export default Icon;
