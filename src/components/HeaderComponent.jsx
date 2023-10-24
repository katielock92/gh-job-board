// Component purpose: defining the header to be displayed on all pages

export default function HeaderComponent() {
  return (
    <header>
      <a href="https://mx51.com" target="_blank" rel="noreferrer">
        <img
          className="logo"
          src={require("../assets/images/mx51_logo.png")}
          alt={"mx51 logo"}
        />
      </a>
    </header>
  );
}
