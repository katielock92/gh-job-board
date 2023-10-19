import React from "react";
import { useFetcher } from "../utils/DataFetcher";
import { useContext } from "react";
import { MainApiContext } from "../contexts/MainApiContext";
import { Link } from "react-router-dom";

export default function JobList() {
  // destructure api from LocationApiContext
  const { api } = useContext(MainApiContext);

  // Fetch data using custom hook useFetcher
  const { apiData, loading, error } = useFetcher(api);

  // Loading and error handling logic
  if (loading) {
    return;
  }
  if (error) {
    return <div className="no-jobs">Error: {error.message}</div>;
  }

  // Return if no API data
  if (!apiData || !apiData.departments || apiData.departments.length === 0) {
    return <div className="no-jobs">No API data to display</div>;
  }

  //   Add a function here to check if the job list > 0 and to return a message if it is 0

  console.log(apiData.departments);
}
