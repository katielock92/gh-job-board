import React from 'react';
import {useFetcher} from "../utils/DataFetcher";
import Loading from "../utils/Loading";
import CustomDropdown from './CustomDropdown';
import { useLocation } from '../contexts/LocationContext';
import { MainApiContext } from '../contexts/MainApiContext';
import { useContext } from 'react';

export default function LocationDropList(){
  
    // destructure api from LocationApiContext
    const { api } = useContext(MainApiContext)
    
    
    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher(api);
  
    // Use the custom location context to access selectedLocation state and setter
    const { selectedLocation, setSelectedLocation } = useLocation();


    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.offices && apiData.offices.length > 0) {

        // Prepare location items for the dropdown
        const locationItems = apiData.offices.map((office) => ({
            id: office.id,
            label: office.name,
        }));
        
       // Define the event handler for selecting a location
        const handleSelect = (selectedItem) => {
            // Set the Location of the departments to be displayed
            setSelectedLocation(selectedItem.label);
        };

        // Set the default value for the dropdown
        const initialSelectedItem = { id: 0, label: 'All offices' };

        // Return both the HTML and selectedLocation state
        return (
            <div className="location filter-item">
                <CustomDropdown
                 items={locationItems}
                 onSelect={handleSelect}
                 initialSelectedItem={initialSelectedItem}
                 >
                </CustomDropdown>
                </div>
            );
    } else {
        return <div>No data to display</div>;
    }
}
