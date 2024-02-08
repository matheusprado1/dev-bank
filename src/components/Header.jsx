const Header = ({ title, subtitle }) => {
  return (
    <div className="header-background">
      <header className="header-container">
        <div className="content">
          <h1>{title}<span>{subtitle}</span></h1>
        </div>
      </header>
    </div>
  );
}


export default Header;