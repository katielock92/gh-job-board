// Component purpose: defining the header to be displayed on all pages

export default function HeaderComponent() {
  return (
    <header>
      <a href="https://mx51.com" rel="noreferrer">
        <img
          className="logo"
          src={require("../assets/images/mx51-logo.png")}
          alt={"mx51 logo"}
        />
      </a>
    </header>
  );
}