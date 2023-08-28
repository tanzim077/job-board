import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getCompany } from "../lib/graphql/queries";

function CompanyPage() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCompany(companyId).then((data) => {
      setCompany(data.company);
      setIsLoading(false);
    });
  }, [companyId]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
      <br />
      <h2 className="subtitle">Jobs at {company.name}</h2>
      <ul>
        {company.jobs.map((job) => (
          <li>
            <Link to={`/jobs/${job.id}`} key={job.id}>
              {job.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
