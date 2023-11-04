// Component purpose: defining the footer to be displayed on all pages

export default function FooterComponent() {
  return (
    <footer>
      <div className="footer-div">
        <div className="logo-div">
          <a href="https://mx51.com" rel="noreferrer">
            <img
              className="mx-icon"
              src={require("../assets/images/mx51-icon.png")}
              alt={"mx51 logo"}
            />
          </a>
        </div>
        <div className="footer-greenhouse">
          <p className="greenhouse">
            Powered by
            <a
              href="https://www.greenhouse.com/"
              rel="noreferrer"
            >
              <img
                className="greenhouse-logo"
                src={require("../assets/images/greenhouse-logo.png")}
                alt={"Greenhouse logo"}
              />
            </a>
          </p>
          <p className="gh-privacy">
            <a
              className="policy-link"
              href="https://www.greenhouse.com/privacy-policy"
              rel="noreferrer"
            >
              Greenhouse Privacy Policy
            </a>
          </p>
        </div>
        <div className="footer-mx">
          <a
            className="policy-link"
            href="https://mx51.com/privacy-policy-cookies"
            rel="noreferrer"
          >
            mx51 Privacy Policy
          </a>
          <p className="copyright-mx">© mx51 Pty Ltd</p>
        </div>
      </div>
    </footer>
  );
}