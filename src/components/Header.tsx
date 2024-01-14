
export const Header = () => {
  return (
    <div className='header'>
       <div className="header__logo">
        <img src="/src/assets/icons/logo.svg" alt="logo" />Zone.</div> 
       <nav className="header__nav">
        <ul className="header__list">
            <li className="header__li">
                <a href="/" className="header__link">Home</a>
            </li>
            <li className="header__li">
                <a href="/" className="header__link">About Us</a>
            </li>
            <li className="header__li">
                <a href="/" className="header__link">Service</a>
            </li>
            <li className="header__li">
                <a href="/" className="header__link">Pricing</a>
            </li>
            <li className="header__li">
                <a href="/" className="header__link">Blog</a>
            </li>
            <a href='/' className=" btn header__button">Contact Us</a>
        </ul>
       </nav>
    </div>
  )
}
