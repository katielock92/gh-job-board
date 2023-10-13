import { useState } from "react";
import About from "../components/About";
import DepartmentDropList from "../components/DepartmentDropList";
import JobList from "../components/JobList";
import LocationDropList from "../components/LocationDropList";
import { SearchBar } from "../components/Search";
import { DepartmentProvider } from "../contexts/DepartmentContext";
import { LocationProvider } from "../contexts/LocationContext";


export default function HomePage() {

  const [results, setResults] = useState([])

  return (
    <LocationProvider>
      <DepartmentProvider>
      <main>
        <About/>
          <div className="all-jobs">
              <div className="jobfilters">
                  <SearchBar setResults={setResults} />
      
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