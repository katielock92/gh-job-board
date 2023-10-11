import React from 'react';
import { useContext } from 'react';
import {useFetcher} from "../utils/DataFetcher";
import Loading from "../utils/Loading";
import { MainApiContext } from '../contexts/MainApiContext';
import { Link } from 'react-router-dom';


export default function JobTable(){

    // destructure api from MainApiContext
    const { api } = useContext(MainApiContext)

    const { apiData, loading, error } = useFetcher(api);


    if (loading) {
        return <div><Loading /></div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    

    // need to fix Job Table to render all jobs with completed info from MainApiContext
    if (apiData && apiData.jobs && apiData.jobs.length > 0) {
        console.log(apiData.jobs)
        const jobCard = apiData.jobs;
        return (
          <div className="job-box">
            {jobCard.map((jobCard, index) =>(
                // URL based on job ID for each row, just need to get routing to render expected page
                <Link to={`/jobs/${jobCard.id}`} >
                <div key={index} className="job-item">
                    <div className="job-item-title">{jobCard.title}</div>
                    <div className="job-item-location">{jobCard.location.name}</div>
                    {/* hiding these as don't want to display on table: */}
                    {/* <p>job id: {jobCard.id}</p>
                    <p>link to job:{jobCard.absolute_url}</p> */}
                </div>
                </Link>
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
