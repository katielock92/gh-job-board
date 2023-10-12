import React from 'react';
import { useFetcher} from "../utils/DataFetcher";
import CustomDropdown from './CustomDropdown';
import { useDepartment } from '../contexts/DepartmentContext';


function DepartmentDropList(){

    // temporarily use URL here until manage to integrate with MainApiContext
    const api = "https://boards-api.greenhouse.io/v1/boards/mx51dev/departments"

    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher(api);

    const { selectedDepartment, setSelectedDepartment } = useDepartment();

    
    
    if (loading) {
        return 
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.departments && apiData.departments.length > 0) {
        
        const departmentItems = apiData.departments.map((department) => ({
            id: department.id,
            label: department.name,
        }));

        // To handle the select the current item 
        const handleSelect = (selectedItem) => {
            setSelectedDepartment(selectedItem.label)
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


