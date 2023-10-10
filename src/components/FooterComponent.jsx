

export default function FooterComponent() {
     return (
          <footer>
               <div className="footer-greenhouse">
                    <p className="greenhouse">Powered by
                         <a href="https://www.greenhouse.com/" target="_blank" rel="noreferrer">
                              <img 
                                   className="greenhouse-logo" 
                                   src={require("./greenhouse-logo.png")} 
                                   alt={"Greenhouse logo"}
                              />               
                         </a>
                    </p>
               </div>

               <div className="footer-privacy">
                    <p className="privacy-policy">Read our
                         <a className="privacy-policy-link" 
                         href="https://www.greenhouse.com/privacy-policy">Privacy Policy
                         </a>
                    </p>
               </div>
          </footer>
     );
}