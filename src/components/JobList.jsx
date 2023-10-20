import React from "react";
import { useFetcher } from "../utils/DataFetcher";
import { useContext } from "react";
import { MainApiContext } from "../contexts/MainApiContext";
import { Link } from "react-router-dom";

export default function JobList() {
  // destructure api from LocationApiContext
  const { api } = useContext(MainApiContext);

  // Fetch data using custom hook useFetcher
  const { apiData, loading, error } = useFetcher(api);

  // Loading and error handling logic
  if (loading) {
    return (
        <main>
        <div className="loading"></div>
      </main>
    )
  }
  if (error) {
    return <div className="no-jobs">Error: {error.message}</div>;
  }

  // Return if no API data
  if (!apiData || !apiData.departments || apiData.departments.length === 0) {
    return <div className="no-jobs">No API data to display</div>;
  }

  //   create new array of departments that have open roles
  const departmentsWithJobs = apiData.departments.filter(
    (department) => department.jobs.length > 0
  );

  //   return statement if there are no open roles
  if (departmentsWithJobs.length === 0) {
    return <div className="no-jobs">No open roles available</div>;
  }

  return (
    <div className="all-jobs">
      {departmentsWithJobs.map((department) => (
        <div className="department-box" key={department.id}>
          <div className="department-name">{department.name}</div>
          {department.jobs.map((job) => (
            <div className="job-item" key={job.id}>
              <div className="job-item-details">
                <div className="job-item-title">
                  <Link className="job-item-title" to={`/jobs/${job.id}`}>
                    {job.title}
                  </Link>
                </div>
                <div className="job-item-location">{job.location.name}</div>
              </div>
              <div className="job-button-div">
                <Link to={`/jobs/${job.id}`}>
                  <button className="job-button">View position</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
