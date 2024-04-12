import React from 'react';
import Sidebar from '../components/sidebar/sidebar'; // Importamos el componente Sidebar

export const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div >
        <Sidebar />
      </div>
      
      {/* Contenido principal */}
      <div >
        {children}
      </div>
    </div>
  );
};
