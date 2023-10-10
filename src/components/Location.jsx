import React from 'react';
import { useContext, useState } from 'react';
import {useFetcher} from "../utils/DataFetcher";
import { LocationApiContext } from "../contexts/LocationApiContext";
import Loading from "../utils/Loading";
import CustomDropdown from './CustomDropdown';




export default function LocationDropList(){

    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher("https://boards-api.greenhouse.io/v1/boards/mx51dev/offices");


    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.offices && apiData.offices.length > 0) {
        
        // Elements for the drop list get from apiData
        const locationItems = apiData.offices.map((office) => ({
            id: office.id,
            label: office.name,
          }));

        // To handle the select the current item 
        const handleSelect = (selectedItem) => {
            // to do something more
        };
        
        const initialSelectedItem = { id: 0, label: 'All locations' };

        return (
            <div className="location filter-item">

                <CustomDropdown  
                 items={locationItems}
                 onSelect={handleSelect}
                 initialSelectedItem={initialSelectedItem}
                 />
                </div>
            );
    } else {
        return <div>No data to display</div>;
    }
}

