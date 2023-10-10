import JobTable from "../components/JobTable";

export default function HomePage() {
  return (
    <main>
      <div className="all-jobs">
        <div className="job-filters">
          {/* these are placeholders for setting up styling - to be removed and replaced with components: */}
          <div className="search-box">Search</div>
          <div className="department-filter">Department</div>
          <div className="location-filter">Location</div>
          {/* Search box component */}
          {/* Search All Departments Drop List */}
          {/* Search all location Drop List */}
        </div>
        <JobTable></JobTable>
      </div>
    </main>
  );
}
