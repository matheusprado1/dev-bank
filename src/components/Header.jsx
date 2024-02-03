const Header = ({ children1, children2 }) => {
  return (
    <header>
      <div className="header__content">
        <h1>{children1}<span>{children2}</span></h1>
      </div>
    </header>
  );
}


export default Header;