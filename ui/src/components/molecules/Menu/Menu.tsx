import { Server } from '../../organisms/ServersList/ServersList';
import React, { FC, useState, useRef, useEffect } from 'react';
import Button from '../../atoms/Button/Button';
import SelectMenu from '../../atoms/SelectMenu/SelectMenu';

interface MenuProps {
  status: string;
  id: number;
  rebootingServer: (server: Server) => void;
}

const Menu: FC<MenuProps> = ({ status, id, rebootingServer }) => {
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
  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const status = e.currentTarget.title;

    fetch(`http://localhost:4454/servers/${id}/${status}`, { method: 'put' }).then(() => {
      if (status === 'reboot') {
        rebootRefresher();
      } else {
        statusRefresher();
        console.log('on off');
      }
    });

    setOpen(false);
  };

  const statusRefresher = () => {
    fetch(`http://localhost:4454/servers/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        rebootingServer(data);
      });
  };

  const rebootRefresher = () => {
    const interval = setInterval(() => {
      fetch(`http://localhost:4454/servers/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status === 'ONLINE') {
            rebootingServer(data);
            clearInterval(interval);
          }
        });
    }, 1000);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} ref={ref}>
      <Button handleOpenMenu={handleOpenMenu} />
      <SelectMenu status={status} isOpen={open} handleClickOption={handleClickOption} id={id} />
    </div>
  );
};

export default Menu;
