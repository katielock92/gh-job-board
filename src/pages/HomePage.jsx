// Imports:
import About from "../components/About";
import JobList from "../components/JobList";
import ScrollToTop from "../utils/ScrollToTop";
import "../styles/home.css";

// Rendering what components will display on homepage:
export default function HomePage() {
  ScrollToTop();
  return (
    <main>
      <About />
      <JobList />
      <div className="bottom-photo-div">
        <img
          className="mountain-img"
          src={require("../assets/images/mountain.jpg")}
          alt={"An outline of hikers climbing a mountain at sunset"}
        />
      </div>
    </main>
  );
}