import { useEffect, useState } from "react";
import { useParams } from "react-router";
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
    </div>
  );
}

export default CompanyPage;
