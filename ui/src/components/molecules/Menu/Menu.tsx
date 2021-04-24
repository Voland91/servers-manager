import React, { FC, useState } from 'react';
import Button from '../../atoms/Button/Button';
import SelectMenu from '../../atoms/SelectMenu/SelectMenu';

interface MenuProps {
  status: string;
}

const Menu: FC<MenuProps> = ({ status }) => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <Button handleOpenMenu={handleOpenMenu} />
      <SelectMenu status={status} isOpen={open} />
    </>
  );
};

export default Menu;
