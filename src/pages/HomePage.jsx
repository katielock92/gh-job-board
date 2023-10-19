import About from "../components/About";
import JobList from "../components/JobList";
import "../styles/home.css";

export default function HomePage() {
  return (
    <main>
      <About />
      <JobList />
    </main>
  );
}
