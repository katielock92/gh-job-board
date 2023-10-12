// import { DepartmentsApiContext } from "../contexts/DepartmentApiContext";
import Loading from "../utils/Loading";
import { useContext } from "react";
import React from 'react';
import {useFetcher} from "../utils/DataFetcher";
import {MainApiContext} from "../contexts/MainApiContext";
import { Link } from "react-router-dom";


function DefaultJobTable() {


    // destructure api from LocationApiContext
    const { api } = useContext(MainApiContext)
    
    // Fetch data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher(api);

    if (loading) {
        return <div><Loading /></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    if (apiData && apiData.offices && apiData.offices.length > 0) {
    
      return (
        <div>

            {/* Map over the offices and their departments to display the information */}
            {apiData.offices.map((office) => {
                return (
                  <div key={office.name}>
                  {office.departments.map((department) => {
                    return (
                    <div key={department.name}>
                    {department.jobs && department.jobs.length > 0 ? (
                        // Map over the jobs in the department and display job information
                        department.jobs.map((job) => {
                          return (
                            <div key={job.title}>
                                <div className="all-jobs">
                                <Link className="job-box "to={`/jobs/${job.id}`}> {/* Links entire tile to job page */}
                                <div className="job-box job-item">
                                
                                    <div className="job-item-title">{job.title} {/* Display job name */}</div>
                                    <div className="job-item-department">{department.name}</div> {/* Display department name */}
                                    <div className="job-item-location">{office.name}</div>  {/* Display office location */}
                                    
                                </div>
                                </Link>
                                </div>
                            </div>
                            )
                        })
                    ) : (
                        // If no jobs are available, display a message and other information
                        <div className="all-jobs">
                        <div className="job-box job-item" >
                            <div className="job-item-title">No jobs available</div>
                            <div className="job-item-department">{department.name}</div>
                            <div className="job-item-location">{office.name}</div>
                        </div>
                        </div>
                    )}
                    </div>
                    )
                })}
                </div>
                )
            })}
        </div>
        );

    } else {
        return <div>No data to display</div>;
    }
}

export default DefaultJobTable;
