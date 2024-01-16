// BurgerMenu.tsx
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

const BurgerMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isVisible ? (
    <Menu
      width={390}
      right
      isOpen={menuOpen}
      onStateChange={handleMenuStateChange}
      customBurgerIcon={<img src='public/assets/icons/icons8-menu.svg' alt='menu' />}
      customCrossIcon={<img src='public/assets/icons/icons8-close.svg' alt='close' />}
    >
      <a href='/' className='header__link'>
        Home
      </a>
      <a href='#about' className='header__link'>
        About Us
      </a>
      <a href='#service' className='header__link'>
        Service
      </a>
      <a href='/' className='header__link'>
        Pricing
      </a>
      <a href='#blog' className='header__link'>
        Blog
      </a>
      <a href='/' className='btn header__button'>
        Contact Us
      </a>
    </Menu>
  ) : null;
};

export default BurgerMenu;
