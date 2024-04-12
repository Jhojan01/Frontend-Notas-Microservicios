import React, { useState } from 'react';
import { List, ListItem, Card, Chip } from '@material-tailwind/react';
import { NavLink, useLocation } from 'react-router-dom';
import { AvatarDefault } from '../avatar/avatar';

const Sidebar = () => {
  const [showDevOps, setShowDevOps] = useState(false);
  const location = useLocation();

  const toggleDevOps = () => {
    setShowDevOps(!showDevOps);
  };

  return (
    <div className="flex">
    <div className="w-full h-screen max-w-[20rem] p-4 shadow-xl bg-black">
    <AvatarDefault/>

        <div className="p-4">
          <List className="mb-4">
            <ListItem color="transparent">
              <Card>
                <List>
                  <ListItem ripple="dark" onClick={toggleDevOps}>
                    PERFIL
                  </ListItem>
                  {showDevOps && (
                    <ListItem>
                      <Chip color="teal" size="lg">
                        Git
                      </Chip>
                      <Chip color="blue" size="lg">
                        Docker
                      </Chip>
                      <Chip color="indigo" size="lg">
                        Kubernetes
                      </Chip>
                    </ListItem>
                  )}
                </List>
              </Card>
            </ListItem>
          </List>
          <List>
            <ListItem color="transparent" ripple="dark">
              <NavLink to='/Dashboard' exact className={location.pathname === '/Dashboard' ? 'text-white' : 'text-gray-400'}>
                Categorias
              </NavLink>
            </ListItem>
            <ListItem color="transparent" ripple="dark">
              <NavLink to='/analytics' exact className={location.pathname === '/analytics' ? 'text-white' : 'text-gray-400'}>
                Analytics
              </NavLink>
            </ListItem>
            <ListItem color="transparent" ripple="dark">
              <NavLink to='/profile' exact className={location.pathname === '/profile' ? 'text-white' : 'text-gray-400'}>
                Profile
              </NavLink>
            </ListItem>
            <NavLink to='/devops' exact className={location.pathname === '/devops' ? 'text-white' : 'text-gray-400'}>
              <ListItem color="transparent" ripple="dark">
                  DevOps
              </ListItem>
            </NavLink>
            <NavLink to='/' className={location.pathname === '/' ? 'text-white' : 'text-gray-400'} exact>
              <ListItem color="transparent" ripple="dark">
                  Home
              </ListItem>
            </NavLink>
            <NavLink to='/login' className={location.pathname === '/' ? 'text-white' : 'text-gray-400'} exact>
              <ListItem color="transparent" ripple="dark">
                  Salir
              </ListItem>
            </NavLink>
          </List>
        </div>
      </div>
      {showDevOps && (
        <div className="bg-black h-screen w-64 fixed top-0 right-0">
          {/* Contenido de la columna DevOps */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
