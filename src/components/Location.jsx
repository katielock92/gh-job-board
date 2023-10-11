import React from 'react';
import { useContext } from 'react';
import {useFetcher} from "../utils/DataFetcher";
import Loading from "../utils/Loading";
import CustomDropdown from './CustomDropdown';
import { MainApiContext } from '../contexts/MainApiContext';


export default function LocationDropList(){

    // destructure api from LocationApiContext
    const { api } = useContext(MainApiContext)

    // Fecth data using custom hook useFetcher
    const { apiData, loading, error } = useFetcher(api);


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
        
        console.log(locationItems)

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

