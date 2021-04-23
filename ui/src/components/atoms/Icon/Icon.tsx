import React, { FC } from 'react';
import StyledIcon from './Icon.styles';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { ReactComponent as XIcon } from '../../../assets/icons/x.svg';
import { ReactComponent as CircleIcon } from '../../../assets/icons/circle.svg';
import { ReactComponent as DotIcon } from '../../../assets/icons/dot.svg';

type IconIcon = 'search' | 'cross' | 'circle' | 'dot';

export interface IconProps {
  children?: string;
  icon?: IconIcon;
  circle?: boolean;
  dot?: boolean;
  cross?: boolean;
}

const Icon: FC<IconProps> = ({ icon, circle, dot, cross }) => (
  <StyledIcon circle={circle} cross={cross} dot={dot}>
    {(() => {
      switch (icon) {
        case 'search':
          return <SearchIcon />;
        case 'cross':
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
