
import BurgerMenu from "./BurgerMenu";


const Header: React.FC = () => {
  return (
    <header className='header'>
      <a href='/' className="header__logo">
        <img src="public/assets/icons/logo.svg" alt="logo" />Zone.</a>
      <div className="header__nav">
        <ul className="header__list">
          <li className="header__li">
            <a href="/" className="header__link">Home</a>
          </li>
          <li className="header__li">
            <a href="#about" className="header__link">About Us</a>
          </li>
          <li className="header__li">
            <a  href="#service" className="header__link">Service</a>
          </li>
          <li className="header__li">
            <a href="/" className="header__link">Pricing</a>
          </li>
          <li className="header__li">
            <a href="#blog" className="header__link">Blog</a>
          </li>
          <a href='/' className=" btn header__button">Contact Us</a>
        </ul>
      </div>
      <BurgerMenu   /> 
    </header>
  );
};

export default Header;