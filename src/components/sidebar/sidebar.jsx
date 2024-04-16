import React, { useState } from "react";
import { List, ListItem, Card, Chip, IconButton,  Collapse, Button
} from "@material-tailwind/react";
import { NavLink, useLocation } from "react-router-dom";
import { AvatarDefault } from "../avatar/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CrearCategorias } from "../form/formulario";
import categorias from "../../pages/categorias/categorias";

const Sidebar = () => {
  const [showDevOps, setShowDevOps] = useState(false);
  const location = useLocation();

  const toggleDevOps = () => {
    setShowDevOps(!showDevOps);
  };

  const [dialogOpen, setDialogOpen] = useState(false); 
  const [open, setOpen] = React.useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);

  const renderRoutes = categorias.map(
    ({name, key, route})=>{
      let returnValue;

      returnValue=(
       
        <NavLink key={key}       exact="true"
        to={route} className={location.pathname === route ? "text-white" : "text-gray-400"}>
          <ListItem color="transparent" ripple={true}>
              {name}
          </ListItem>
        </NavLink>
      

      )
      return returnValue;
  
    }
  );


  return (
    <div className="flex">
      <div className="w-full h-screen max-w-[20rem] p-4 shadow-xl bg-gray-900">
        <AvatarDefault />

        <div className="p-4">
          <List className="mb-4">
            <ListItem color="transparent">
              <Card>
                <List>
                  <ListItem ripple={true} onClick={toggleDevOps}>
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
            <div>

            <ListItem color="transparent" onClick={toggleOpen} ripple={true }>
              Categorias
              <IconButton 
                style={{backgroundColor:'gray'}}
                className="rounded-full ml-auto "
                onClick={() => setDialogOpen(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </IconButton>
            </ListItem>
           
            <Collapse open={open}>
             <List>
             {renderRoutes}
             </List>
              </Collapse>

            </div>
            
            <NavLink
              to="/"
              className={
                location.pathname === "/" ? "text-white" : "text-gray-400"
              }
              exact="true"
              >
              <ListItem color="transparent" ripple={true}>
                Home
              </ListItem>
            </NavLink>
            <NavLink
              to="/login"
              className={
                location.pathname === "/login" ? "text-white" : "text-gray-400"
              }
              exact="true"
              >
              <ListItem color="transparent" ripple={true}>
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
       <CrearCategorias open={dialogOpen} setOpen={setDialogOpen} />
    </div>
  );
};

export default Sidebar;
