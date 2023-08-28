import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleJob from "../components/SingleJob";
import { getJob } from "../lib/graphql/queries";

function JobPage() {
  const { jobId } = useParams();

  // const job = jobs.find((job) => job.id === jobId);
  const [job, setJob] = useState({
    isLoading: true,
    job: null,
    error: null,
  });


  useEffect(() => {
    getJob(jobId)
      .then((data) => {
        setJob({
          isLoading: false,
          error: null,
          job: data.job,
        });
      })
      .catch((err) => {
        setJob({
          isLoading: false,
          job: null,
          error: err.response.errors[0].message,
        });
      });
  }, [jobId]);

  return (
    <>
      {!job.isLoading && !job.error && <SingleJob job={job.job} />}
      {job.isLoading && <h1>Loading job details...</h1>}
      {job.error && <h1>{job.error}</h1>}
    </>
  );
}

export default JobPage;
