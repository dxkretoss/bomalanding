import React, { createContext, useContext, useState } from 'react';

const VillageTestContext = createContext({
  isOpen: false,
  openVillageTest: () => {},
  closeVillageTest: () => {}
});

export const VillageTestProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openVillageTest = () => setIsOpen(true);
  const closeVillageTest = () => setIsOpen(false);

  return (
    <VillageTestContext.Provider value={{ isOpen, openVillageTest, closeVillageTest }}>
      {children}
    </VillageTestContext.Provider>
  );
};

export const useVillageTest = () => useContext(VillageTestContext);
