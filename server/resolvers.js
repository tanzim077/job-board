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

import { getCompany } from "./db/companies.js";
import { getJobs } from "./db/jobs.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
  },
  Job: {
    date: (job) => job.createdAt,
    company: (job) => getCompany(job.companyId),
  },
};
