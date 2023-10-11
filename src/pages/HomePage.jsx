import About from "../components/About";
import DepartmentDropList from "../components/Departments";
import FilterByDepartment from "../components/FilterByDepartments";
import Location from "../components/Location";
import LocationDropList from "../components/LocationDropList";
import { LocationProvider } from "../contexts/LocationContext";


export default function HomePage() {

  return (
    <LocationProvider>
      <main>
        <About/>
          <div className="all-jobs">
              <div className="jobfilters">
                  <div className="search-box filter-item">
                      <input type='text' placeholder='Search...' />
                  </div>
                  <DepartmentDropList />
                  <LocationDropList/>
              </div>
          </div>
          <Location />
      </main>
    </LocationProvider>
  );
}
