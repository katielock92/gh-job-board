// import { DepartmentsApiContext } from "../contexts/DepartmentApiContext";
import Loading from "../utils/Loading";
import { useContext } from "react";
import React from 'react';
import {useFetcher} from "../utils/DataFetcher";


function FilterByDepartment() {

    // destructure api from DepartmentsApiContext
    // const { api } = useContext(DepartmentsApiContext)
    // const { apiData, loading, error } = useFetcher(api);

    // destructure apiData, loading and error from useFetcher custom hooks
    const { apiData, loading, error } = useFetcher("https://boards-api.greenhouse.io/v1/boards/mx51dev/departments");



    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    if (apiData && apiData.departments && apiData.departments.length > 0) {
      return (
          <div >
            <h1>Jobs by Departments</h1>
              {apiData.departments.map((dept, index1) => {
                return (
                  // inline styling for testing - can remove when css is done
                  <div key={dept.id} style={{backgroundColor:"whitesmoke", padding: "5px", margin: "5px"}}>
                    <h3>{dept.name}</h3>
                    <ul>
                      {dept.jobs.map((job, index2) => {
                        return (
                        <li key={dept.id + '-' + index2}>
                          <div>{job.title}</div>
                          <div>{job.absolute_url}</div>
                        </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
          </div>
      );
    } else {
      return <div>No data to display</div>;
    }
}


export default FilterByDepartment;
