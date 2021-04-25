import React, { FC, useState, useRef, useEffect } from 'react';
import Button from '../../atoms/Button/Button';
import SelectMenu from '../../atoms/SelectMenu/SelectMenu';

interface MenuProps {
  status: string;
  id: number;
  refreshServerStatus: (serverData: number) => void;
}

const Menu: FC<MenuProps> = ({ status, id, refreshServerStatus }) => {
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

  // changing status of server + closing menu afeter click
  const handleChooseOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const status = e.currentTarget.title;

    fetch(`http://localhost:4454/servers/${id}/${status}`, { method: 'put' }).then(() => {
      refreshServerStatus(Number(id));
    });

    setOpen(false);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} ref={ref}>
      {status === 'REBOOTING' ? <Button disabled /> : <Button handleOpenMenu={handleOpenMenu} />}
      <SelectMenu status={status} isOpen={open} handleChooseOption={handleChooseOption} id={id} />
    </div>
  );
};

export default Menu;
