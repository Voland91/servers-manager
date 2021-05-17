import { FC } from 'react';
import { StyledH1, StyledH2, StyledH3 } from './Headers.styles';

type IconIcon = 'h1' | 'h2' | 'h3';

interface HeaderProps {
  children: string;
  type?: IconIcon;
}

const Header: FC<HeaderProps> = ({ children, type }) => (
  <>
    {(() => {
      switch (type) {
        case 'h1':
          return <StyledH1>{children}</StyledH1>;
        case 'h2':
          return <StyledH2>{children}</StyledH2>;
        case 'h3':
          return <StyledH3>{children}</StyledH3>;
      }
    })()}
  </>
);

export default Header;
