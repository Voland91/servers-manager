import React, { FC } from 'react';
import StyledIcon from './Icon.styles';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { ReactComponent as XIcon } from '../../../assets/icons/x.svg';
import { ReactComponent as DotsIcon } from '../../../assets/icons/dots.svg';
import { ReactComponent as CircleIcon } from '../../../assets/icons/circle.svg';

type IconIcon = 'search' | 'x' | 'dots' | 'circle';

export interface IconProps {
  children?: string;
  icon?: IconIcon;
}

const Icon: FC<IconProps> = ({ icon }) => (
  <StyledIcon>
    {(() => {
      switch (icon) {
        case 'search':
          return <SearchIcon />;
        case 'x':
          return <XIcon />;
        case 'dots':
          return <DotsIcon />;
        case 'circle':
          return <CircleIcon />;
      }
    })()}
  </StyledIcon>
);

export default Icon;
