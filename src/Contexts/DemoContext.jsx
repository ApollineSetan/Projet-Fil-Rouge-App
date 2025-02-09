import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';  // Import de la fonction uuidv4

// Création du contexte
const DemoContext = createContext();

export const useDemoContext = () => {
  return useContext(DemoContext);
};

export const DemoProvider = ({ children }) => {
  const [demos, setDemos] = useState([]);

  // Fonction pour ajouter une démo avec un id unique
  const addDemo = (demo) => {
    const newDemo = { ...demo, id: uuidv4() };  // Ajouter un id unique à la démo
    console.log('Démo ajoutée avec id: ', newDemo);
    setDemos([...demos, newDemo]);
  };

  // Fonction pour supprimer une démo par son id
  const deleteDemo = (demoId) => {
    console.log('Démo supprimée avec id: ', demoId);
    setDemos(demos.filter((demo) => demo.id !== demoId));
  };

  return (
    <DemoContext.Provider value={{ demos, addDemo, deleteDemo }}>
      {children}
    </DemoContext.Provider>
  );
};
