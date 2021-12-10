import { createContext, useState } from 'react';

const IndiceContext = createContext();

const IndiceProvider = ({ children }) => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);
  const [displayAuthModal, setDisplayAuthModal] = useState(false);

  const toggleSideMenu = () => {
    setDisplaySideMenu(!displaySideMenu);
  };

  const toggleAuthModal = () => {
    setDisplayAuthModal(!displayAuthModal);
  };


  return (
    <IndiceContext.Provider
      value={{
        displaySideMenu,
        toggleSideMenu,
        displayAuthModal,
        toggleAuthModal
      }}
    >
      {children}
    </IndiceContext.Provider>
  );
};

export { IndiceProvider, IndiceContext };
