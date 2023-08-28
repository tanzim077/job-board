import { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJob } from "../lib/graphql/queries";
// import SingleJob from "../components/SingleJob";
const SingleJob = lazy(() => import("../components/SingleJob"));

function JobPage() {
  const { jobId } = useParams();

  // const job = jobs.find((job) => job.id === jobId);
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJob(jobId).then((data) => {
      setJob(data.job);
    });
  }, [jobId]);

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        {job !== null ? (
          <SingleJob job={job} />
        ) : (
          <h1>Loading job details...</h1>
        )}
      </Suspense>
    </>
  );
}

export default JobPage;
