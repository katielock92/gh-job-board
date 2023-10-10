import About from "../components/About";
import FilterByDepartment from "../components/FilterByDepartments";
import JobTable from "../components/JobTable";
import LocationDropList from "../components/Location";

export default function HomePage() {
  return (
    <main>
      <About/>
        <div className="all-jobs">
            <div className="jobfilters">
                <div className="search-box filter-item">
                    <input type='text' placeholder='Search...' />
                </div>
                <div className="departments filter-item">
                    <p>Departments</p>
                </div>
                <LocationDropList />
            </div>
        </div>
        <JobTable></JobTable>
        <FilterByDepartment></FilterByDepartment>
      </div>
    </main>
  );
}
