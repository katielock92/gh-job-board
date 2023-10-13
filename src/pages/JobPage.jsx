import { Parser } from "html-to-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function JobPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const htmlParser = new Parser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://boards-api.greenhouse.io/v1/boards/mx51dev/jobs/${id}`
        );
        if (!response.ok) {
          throw new Error("Error with network response");
        }
        const json = await response.json();
        setApiData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  } else if (apiData) {
    const jobCard = apiData;

    return (
      <main>
        <div className="job-page">
          <p className="job-links">
            <Link to="/">All Positions</Link> {`>`} {jobCard.title}
          </p>
          <div className="job-header">
            <div className="job-summary-div">
              <h1 className="job-title">{jobCard.title}</h1>
              <p className="job-attributes">
                {jobCard.location.name} <span> | </span>{" "}
                {jobCard.departments[0].name} team <span> | </span>{" "}
                {jobCard.metadata[0].value}
              </p>
            </div>
            <div className="apply-div">
              <a href={jobCard.absolute_url + `#app`}>
                <button className="apply-button">Apply now</button>
              </a>
            </div>
          </div>
          <div
            className="job-description"
            dangerouslySetInnerHTML={{
              __html: htmlParser.parse(jobCard.content),
            }}
          ></div>
        </div>
      </main>
    );
  } else {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    return (
      <main>
        <div className="id-not-found"><p>Uh oh! We couldn't find a job with an id of {id}.</p>
        <p>Redirecting to the homepage in 5 seconds...</p></div>
      </main>
    );
  }
}
