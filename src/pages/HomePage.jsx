import About from "../components/About";
import DepartmentDropList from "../components/Departments";
import LocationDropList from "../components/Location";

export default function HomePage() {
  return (
    <main>
      <About/>
        <div className="all-jobs">
            <div className="jobfilters">
                <div className="search-box filter-item">
                  <p>Search</p>
                </div>
                <DepartmentDropList />
                <LocationDropList />
            </div>
        </div>
    </main>
  );
}
