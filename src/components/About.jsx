// Component purpose: for the section about mx51 that is displayed on the homepage below the header, but above the job table

export default function About() {
  return (
    <div className="about-div">
      <div className="power-div">
        <span className="text-purple">Pass on the power</span> of leading
        merchant payments & commerce experiences.
      </div>
      <div className="tshirt-div"><img
          className="tshirt-image"
          src={require("../assets/images/mx-tshirt.png")}
          alt={"mx51 t-shirt"}
        /></div>
      <div className="open-div">
        <h3>Open positions</h3>
        <p>
          Ready to join our exciting journey? See below for our current
          vacancies.
        </p>
      </div>
    </div>
  );
}