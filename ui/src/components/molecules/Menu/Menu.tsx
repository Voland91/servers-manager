import React, { FC, useState, useRef, useEffect } from 'react';
import Button from '../../atoms/Button/Button';
import SelectMenu from '../../atoms/SelectMenu/SelectMenu';

interface MenuProps {
  status: string;
}

const Menu: FC<MenuProps> = ({ status }) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  // hiding menu after clicking outside
  const handleCloseMenu = (e: Event) => {
    if (ref.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseMenu);
    return () => {
      document.removeEventListener('mousedown', handleCloseMenu);
    };
  }, []);

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} ref={ref}>
      <Button handleOpenMenu={handleOpenMenu} />
      <SelectMenu status={status} isOpen={open} handleClickOption={handleClickOption} />
    </div>
  );
};

export default Menu;
