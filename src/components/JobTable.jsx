import React from 'react';

import {useFetcher} from "../utils/DataFetcher";
import { AllJobsApiContext } from "../contexts/AllJobsApiContext";
import Loading from "../utils/Loading";

export default function JobTable(){

    // destructure api from AllJobsApiContext
    const { api } = useContext(AllJobsApiContext)

    const { apiData, loading, error } = useFetcher(api);


    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (apiData && apiData.jobs && apiData.jobs.length > 0) {
        console.log(apiData.jobs)
        const jobCard = apiData.jobs;
        return (
          <div className="job-box">
            {jobCard.map((jobCard, index) =>(
                <div key={index} className="job-item">
                    <div className="job-item-title">{jobCard.title}</div>
                    <div className="job-item-location">{jobCard.location.name}</div>
                    {/* hiding these as don't want to display on table: */}
                    {/* <p>job id: {jobCard.id}</p>
                    <p>link to job:{jobCard.absolute_url}</p> */}
                </div>
            ))}
          </div>
        );
    } else {
        return <div>No data to display</div>;
    }
}

// keeping copy of placeholder code that Katie's CSS was based on:
//  {/* table below contains placeholder values - replace with API logic */}
//                 <table className="tableJobList">
//                     <thead className="tableHeader"></thead>
//                     <tbody className="tableBody">
//                         <trow className="tableRow">
//                             <td className="jobTableTitle">Title here</td>
//                             <td className="jobTableLocation">Location here</td>
//                         </trow>
//                         <trow className="tableRow">
//                             <td className="jobTableTitle">Title here</td>
//                             <td className="jobTableLocation">Location here</td>
//                         </trow>
//                         <trow className="tableRow">
//                             <td className="jobTableTitle">Title here</td>
//                             <td className="jobTableLocation">Location here</td>
//                         </trow>
//                     </tbody>
//                 </table>
