import React, { useState } from "react";
import { MainLayout } from "../../Layouts/layouts";
import { Typography, Input, List, ListItem } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const data = [
  {
    key: 1,
    date: new Date(),
    title: "¿Qué es DevOps?",
    definition:
      "DevOps es una cultura y conjunto de prácticas que enfatiza la colaboración y comunicación entre desarrolladores de software y profesionales de operaciones (Ops). Su objetivo es automatizar el proceso de entrega de software, desde el desarrollo hasta la implementación y el monitoreo, con el fin de ofrecer un valor continuo a los clientes de manera rápida y confiable.",
    content:
      "El enfoque de DevOps busca superar las barreras tradicionales entre los equipos de desarrollo y operaciones, promoviendo la integración continua, la entrega continua y la automatización de la infraestructura. Al adoptar prácticas de DevOps, las organizaciones pueden acelerar el tiempo de comercialización, mejorar la calidad del software, aumentar la eficiencia operativa y fomentar una cultura de colaboración y aprendizaje continuo.",
  },
  {
    date: new Date(),
    title: "Importancia de DevOps",
    definition:
      "DevOps es importante porque permite a las organizaciones desarrollar, entregar y mantener software de manera más eficiente y confiable. Al adoptar prácticas de DevOps, las empresas pueden responder más rápidamente a las demandas del mercado, reducir los costos operativos, mejorar la calidad del software y aumentar la satisfacción del cliente.",
    content:
      "Además, DevOps fomenta una cultura de colaboración y responsabilidad compartida entre los equipos de desarrollo y operaciones, lo que puede mejorar la moral y la productividad de los empleados. Al automatizar los procesos y utilizar herramientas modernas de desarrollo y operaciones, las organizaciones pueden optimizar sus operaciones y mantenerse competitivas en un mercado en constante evolución.",
  },
  {
    date: new Date(),
    title: "Métodos de DevOps",
    definition:
      "Los métodos de DevOps incluyen prácticas y herramientas diseñadas para facilitar la colaboración, la automatización y la entrega continua de software. Algunos de los métodos más comunes de DevOps incluyen integración continua (CI), entrega continua (CD), infraestructura como código (IaC), monitoreo y análisis continuo, y cultura de colaboración y aprendizaje continuo.",
    content:
      "Estos métodos permiten a los equipos de desarrollo y operaciones trabajar de manera más eficiente y coordinada, reduciendo los tiempos de entrega y los errores humanos. Al adoptar estos métodos, las organizaciones pueden mejorar la velocidad, calidad y confiabilidad de su proceso de desarrollo de software, lo que les permite innovar más rápidamente y mantenerse competitivas en un entorno empresarial dinámico.",
  },
  {
    date: new Date(),
    title: "Ventajas de DevOps",
    definition:
      "DevOps ofrece numerosas ventajas para las organizaciones, incluyendo una entrega más rápida y confiable de software, mayor calidad y estabilidad del producto, menores costos operativos, y una mayor capacidad para adaptarse a los cambios del mercado. Al adoptar prácticas de DevOps, las empresas pueden acelerar la innovación, mejorar la satisfacción del cliente y mantenerse competitivas en un mercado en constante evolución.",
    content:
      "Además, DevOps fomenta una cultura de colaboración y responsabilidad compartida entre los equipos de desarrollo y operaciones, lo que puede mejorar la moral y la productividad de los empleados. Al automatizar los procesos y utilizar herramientas modernas de desarrollo y operaciones, las organizaciones pueden optimizar sus operaciones y mantenerse competitivas en un mercado en constante evolución.",
  },
];

function DevOps() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <MainLayout>
      <div className="flex h-screen bg-gray-100">
        {/* Lista de tarjetas */}
        <div className="p-6 w-1/2 overflow-y-auto">
          <Typography variant="h2">DevOps</Typography>
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
            <List>
              {data.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  ripple="light"
                >
                  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
                    <p className="text-gray-400 relative left-4 right-0">
                      {item.date.toLocaleDateString()}
                    </p>
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                      {item.definition}
                    </p>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        {/* Información de la tarjeta seleccionada */}
        {selectedItem && (
          <div className="p-6 w-1/2 overflow-y-auto">
            <Typography variant="h2">{selectedItem.title}</Typography>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p>{selectedItem.date.toLocaleDateString()}</p>
              <p>{selectedItem.definition}</p>
              <p>{selectedItem.content}</p>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default DevOps;
