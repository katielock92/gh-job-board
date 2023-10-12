import About from "../components/About";
import Department from "../components/Department";
import DepartmentDropList from "../components/DepartmentDropList";
import Location from "../components/Location";
import LocationDropList from "../components/LocationDropList";
import { DepartmentProvider } from "../contexts/DepartmentContext";
import { LocationProvider } from "../contexts/LocationContext";


export default function HomePage() {

  return (
    <LocationProvider>
      <DepartmentProvider>
      <main>
        <About/>
          <div className="all-jobs">
              <div className="jobfilters">
                  <div className="search-box filter-item">
                      <input type='text' placeholder='SEARCH' />
                  </div>
                  <DepartmentDropList />
                  <LocationDropList/>
              </div>
          </div>
          <Department />
          <Location />
      </main>
      </DepartmentProvider>
    </LocationProvider>
  );
}
