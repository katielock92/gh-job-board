import React from 'react';
import { useFetcher } from "../utils/DataFetcher";
import { useLocation } from '../contexts/LocationContext';
import { useDepartment } from '../contexts/DepartmentContext';
import { useContext } from 'react';
import { MainApiContext } from '../contexts/MainApiContext';
import { Link } from 'react-router-dom';


export default function JobList() {

    // destructure api from LocationApiContext
    const { api } = useContext(MainApiContext)

    // Fetch data using custom hook useFetcher
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

    // Return if no API data
    if (!apiData || !apiData.offices || apiData.offices.length === 0) {
        return <div>No API data to display</div>;
    }

    // 
    const filteredOffices = (!selectedLocation || selectedLocation === 'All offices') ? apiData.offices : apiData.offices.filter((office) => {
        return office.name === selectedLocation
    })

    const checkNoJob = () => {
        if (filteredOffices.length === 0) {
            return true
        }

        const filteredDepartments = filteredOffices.flatMap((office) => {
            if (!selectedDepartment || selectedDepartment === 'All departments') {
                return office.departments
            }
            return office.departments.filter(department => department.name === selectedDepartment)
        })

        if (filteredDepartments.length === 0) {
            return true
        }

        const jobResults = filteredDepartments.flatMap(department => department.jobs)

        return jobResults.length === 0
    }

    if (checkNoJob()) {
        return <div>No jobs available</div>
    }

    const showDepartments = (office) => {
        const filteredDepartments = (!selectedDepartment || selectedDepartment === 'All departments') ? office.departments : office.departments.filter(department => department.name === selectedDepartment)

        return filteredDepartments.map(department => (
            <div key={department.name} >
                {showJobs(department, office.name)}
            </div>
        ))

    }

    const showJobs = (department, officeName) => department.jobs.map(job => <div key={job.title}>
        <div className="all-jobs">
            <Link className="job-box " to={`/jobs/${job.id}`}> {/* Links entire tile to job page */}
                <div className="job-box job-item">
                    <div className="job-item-title">{job.title} {/* Display job name */}</div>
                    <div className="job-item-department">{department.name}</div>
                    <div className="job-item-location">{officeName}</div>
                </div>
            </Link>
        </div>
    </div>)

    return (
        <div>
            {filteredOffices.map((office) => {
                return (
                    < div key={office.name} >
                        {showDepartments(office)}
                    </div>
                )
            })}
        </div >
    )
}


// return (
//     <div>

//         {/* Map over the offices and their departments to display the information */}
//         {apiData.offices.map((office) => (

//             // Check if the selectedLocation and selectedDepartment matches the current department and location
//             (!selectedLocation || selectedLocation === 'All offices' || selectedDepartment === 'All departments' || office.name === selectedLocation) && (
//                 <div key={office.name}>
//                     {office.departments.map((department) => (

//                         (!selectedDepartment || selectedDepartment === 'All departments' || department.name === selectedDepartment) && (
//                             <div key={department.name}>
//                                 {department.jobs && department.jobs.length > 0 ? (
//                                     // Map over the jobs in the department and display job information
//                                     department.jobs.map((job) => (
//                                         <div key={job.title}>
//                                             <div className="all-jobs">
//                                                 <Link className="job-box " to={`/jobs/${job.id}`}> {/* Links entire tile to job page */}
//                                                     <div className="job-box job-item">
//                                                         <div className="job-item-title">{job.title} {/* Display job name */}</div>

//                                                         <div className="job-item-department">{department.name}</div> {/* Display department name */}
//                                                         <div className="job-item-location">{office.name}</div>  {/* Display office location */}

//                                                     </div>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     // If no jobs are available, display a message and other information
//                                     <div>No jobs available</div>
//                                 )}
//                             </div>
//                         )))}
//                 </div>
//             )
//         ))}
//     </div>
// );


