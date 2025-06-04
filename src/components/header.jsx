function Header({ appname, tagline }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <i className="fas fa-brain"></i>
          <h1>{appname}</h1>
        </div>
        <div className="tagline">{tagline}</div>
      </div>
    </header>
  );
}

export default Header;
