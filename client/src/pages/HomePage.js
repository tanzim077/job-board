import { useEffect, useState } from "react";

import JobList from "../components/JobList";
import { getAllJob } from "../lib/graphql/queries";

function HomePage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJob().then((data) => {
      setJobs(data.jobs);
    });
  }, []);

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
