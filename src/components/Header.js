const Logo = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="Foodtopia"
        title="Foodtopia"
        src={require("/src/assets/images/applogo.png")}
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
