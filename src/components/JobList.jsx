import React from 'react';
import {useFetcher} from "../utils/DataFetcher";
import { useLocation } from '../contexts/LocationContext';
import { useContext } from 'react';
import { MainApiContext } from '../contexts/MainApiContext';
import { Link } from 'react-router-dom';
import { useDepartment } from '../contexts/DepartmentContext';


export default function JobList(){
  
    // destructure api from LocationApiContext
    const { api } = useContext(MainApiContext)
    
    
    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher(api);
  
  
    // Use the useLocation hook to access the selectedLocation from the context
    const { selectedLocation } = useLocation();

    // Use the useDepartment hook to access the selectedDepartment from the context
    const { selectedDepartment } = useDepartment(); 

    // Loading and error handling logic
    if (loading) {
        return 
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }


    if (apiData && apiData.offices && apiData.offices.length > 0) {
    
    console.log(selectedDepartment)

    return (
        <div>

            {/* Map over the offices and their departments to display the information */}
            {apiData.offices.map((office) => (
            
            // Check if the selectedLocation and selectedDepartment matches the current department and location
            (!selectedLocation || selectedLocation === 'All offices' || selectedDepartment === 'All departments' || office.name === selectedLocation) && (
                <div key={office.name}>
                {office.departments.map((department) => (

                    (!selectedDepartment || selectedDepartment === 'All departments' || department.name === selectedDepartment) && (
                    <div key={department.name}>
                    {department.jobs && department.jobs.length > 0 ? (
                        // Map over the jobs in the department and display job information
                        department.jobs.map((job) => (
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
                        ))
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
                )))}
                </div>
            )
            ))}
        </div>
        );

    } else {
        return <div>No data to display</div>;
    }
}

