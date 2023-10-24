// Imports:
import About from "../components/About";
import JobList from "../components/JobList";
import "../styles/home.css";

// Rendering what components will display on homepage:
export default function HomePage() {
  return (
    <main>
      <About />
      <JobList />
    </main>
  );
}
