export default function HeaderComponent() {
  return (
    <header>
      <div className="header">
      <div className="color-main-box">
          <div className="color-1"></div>
          <div className="color-2"></div>
          <div className="color-3"></div>
         </div>
        <a href="https://mx51.com" target="_blank" rel="noreferrer">
          <img
            className="logo"
            src={require("../assets/images/mx51_logo.png")}
            alt={"mx51 logo"}
          />
        </a>
      </div>
    </header>
  );
}
