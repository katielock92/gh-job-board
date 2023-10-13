import About from "../components/About";
import DepartmentDropList from "../components/DepartmentDropList";
import JobList from "../components/JobList";
import LocationDropList from "../components/LocationDropList";
import { DepartmentProvider } from "../contexts/DepartmentContext";
import { LocationProvider } from "../contexts/LocationContext";
import { FaSearch } from "react-icons/fa"


export default function HomePage() {

  return (
    <LocationProvider>
      <DepartmentProvider>
      <main>
        <About/>
          <div className="all-jobs">
              <div className="jobfilters">
                  <div className="search-box filter-item">
                      <div className="search-box-content">
                        <FaSearch id="search-icon" />
                        <input type='text' placeholder='SEARCH' />
                      </div>
                  </div>
                  <DepartmentDropList />
                  <LocationDropList/>
              </div>
          </div>
          <JobList />
      </main>
      </DepartmentProvider>
    </LocationProvider>
  );
}