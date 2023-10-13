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

    // Check if the selectedLocation matches the current location
    // Filter and store the value of the chosen option of offices in dropdown list, that matches the selectedLocation
    const filteredOffices = (!selectedLocation || selectedLocation === 'All offices') ? apiData.offices : apiData.offices.filter((office) => {
        return office.name === selectedLocation
    })
    //console.log(filteredOffices)

    // Define a function to check if the current office has no jobs available 
    const checkNoJob = () => {

        // Check if filteredOffices is an empty list
        if (filteredOffices.length === 0) {
            return true
        }

        // With the current filteredOffices, filter and store the value of the chosen option of departments in dropdown list, that matches selectedDepartment
        // Using flatMap() to flatten the result by one level
        const filteredDepartments = filteredOffices.flatMap((office) => {
            // Check if the selectedDepartment matches the current department
            if (!selectedDepartment || selectedDepartment === 'All departments') {
                return office.departments
            }
            return office.departments.filter(department => department.name === selectedDepartment)
        })

        // filteredDepartments is an empty list
        if (filteredDepartments.length === 0) {
            return true
        }

        // Store the value of jobs in the filteredDepartments array
        const jobResults = filteredDepartments.flatMap(department => department.jobs)

        // if jobResults array is empty, that means there is no available jobs that match the selectedDepartment and selectedLocation
        return jobResults.length === 0
    }

    // Call the checkNoJob() function
    // Display a message if there is no available jobs
    if (checkNoJob()) {
        return <h3 className='no-jobs'>There is currently no jobs available.</h3>
    }


    // Iterate through list of jobs existing in filteredDepartments array and return the jobs information as jsx
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


    // Check if the selectedDepartment matches the current location
    // Iterate through filteredDepartments array and return a list of its elements as jsx
    const showDepartments = (office) => {
        const filteredDepartments = (!selectedDepartment || selectedDepartment === 'All departments') ? office.departments : office.departments.filter(department => department.name === selectedDepartment)

        return filteredDepartments.map(department => (
            <div key={department.name} >
                {showJobs(department, office.name)}
            </div>
        ))

    }

    // If not checkNoJob()
    // Iterate through filteredOffices array and return a list of its elements as jsx
    return (
        <div>
            {filteredOffices.map((office) => {
                return (
                    <div key={office.name} >
                        {showDepartments(office)}
                    </div>
                )
            })}
        </div >
    )
}


// Old code logic

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
//                                     <div className="all-jobs">
//                                     <div className="job-box job-item" >
//                                          <div className="job-item-title">No jobs available</div>
//                                          <div className="job-item-department">{department.name}</div>
//                                          <div className="job-item-location">{office.name}</div>
//                                     </div>
//                                     </div>
//                                 )}
//                             </div>
//                         )))}
//                 </div>
//             )
//         ))}
//     </div>
// );


