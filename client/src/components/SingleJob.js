/*
 * File           : SingleJob.js
 * Project        : job-board-client
 * Created Date   : Mo 28 Aug 2023 08:36:55
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Mon Aug 28 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/formatters";

const SingleJob = ({ job }) => {
  return (
    <div>
      <h1 className="title is-2">{job.title}</h1>
      <h2 className="subtitle is-4">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">
        <div className="block has-text-grey">
          Posted: {formatDate(job.date, "long")}
        </div>
        <p className="block">{job.description}</p>
      </div>
    </div>
  );
};

export default SingleJob;
