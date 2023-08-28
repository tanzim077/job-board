/*
 * File           : resolver.js
 * Project        : job-board
 * Created Date   : Su 27 Aug 2023 09:22:20
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sun Aug 27 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { GraphQLError } from "graphql";
import { getCompany } from "./db/companies.js";
import { getJob, getJobs, getJobsByCompany } from "./db/jobs.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    job: async (_, { id }) => {
      const job = await getJob(id);
      if (!job) {
        throw handleError("Job not found");
      }
      return job;
    },
    company: (_, { id }) => getCompany(id),
  },

  Job: {
    date: (job) => job.createdAt,
    company: (job) => getCompany(job.companyId),
  },

  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  },
};

function handleError(message) {
  return new GraphQLError(message, {
    extension: { code: "NOT_FOUND" },
  });
}
