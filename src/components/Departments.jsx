import React from 'react';
import {useFetcher} from "../utils/DataFetcher";
import Loading from "../utils/Loading";
import CustomDropdown from './CustomDropdown';


function DepartmentDropList(){

    // temporarily use URL here until manage to integrate with MainApiContext
    const api = "https://boards-api.greenhouse.io/v1/boards/mx51dev/departments"

    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher(api);


    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.departments && apiData.departments.length > 0) {
        
        const departmentItems = apiData.departments.map((department) => ({
            id: department.id,
            label: department.name,
        }));

        // keep the below code to revisit when re-trying to render departments dropdown list from MainApiContext

        // const departmentItems = apiData.offices.map((office) => {
        //     return (
        //         office.departments.map( (dept, index2) => {
        //             return ({
        //                 id: dept.id,
        //                 name: dept.name,
        //             });
        //         })
        //     );
        // })

        // let departmentItems = [];

        // apiData.offices.forEach( (office) => {
        //     office.departments.forEach( (dept, index2) => {
        //         return (
        //             departmentItems.push([{
        //                 id: dept.id,
        //                 name: dept.name,
        //                 }])
        //             )
        //         })
        // })


        // To handle the select the current item 
        const handleSelect = (selectedItem) => {
            // to do something more
        };
        
        const initialSelectedItem = { id: 0, label: 'All departments' };

        return (
            <div className="department filter-item">

                <CustomDropdown  
                 items={departmentItems}
                 onSelect={handleSelect}
                 initialSelectedItem={initialSelectedItem}
                 />
                </div>
            );
    } else {
        return <div>No data to display</div>;
    }
}

export default DepartmentDropList;


