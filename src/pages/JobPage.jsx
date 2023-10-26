// Imports:
import JobPost from "../components/JobPost";
import ScrollToTop from "../utils/ScrollToTop";

// Rendering what components will display on homepage:
export default function JobPage() {
  ScrollToTop();
  return (
    <main>
      <div className="top-photo-div">
        <img
          className="smiling-lady-img"
          src={require("../assets/images/smiling-lady.jpeg")}
          alt={"A woman is smiling while looking down at a male colleague's computer"}
        />
      </div>
      <JobPost />
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
