import FilterByDepartment from "../components/FilterByDepartments";
import JobTable from "../components/JobTable";

export default function HomePage() {
  return (
    <main>
      <div className="all-jobs">
        <div className="job-filters">
          {/* these are placeholders for setting up styling - to be removed and replaced with components: */}
          <div className="search-box">Search</div>
          <FilterByDepartment></FilterByDepartment>
          <div className="location-filter">Location</div>
        </div>
        <JobTable></JobTable>
      </div>
    </main>
  );
}
