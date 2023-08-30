/*
 * File           : queries.js
 * Project        : job-board-client
 * Created Date   : Mo 28 Aug 2023 07:11:05
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

import { GraphQLClient, gql } from "graphql-request";

const endpoint = new GraphQLClient("http://localhost:9000/graphql");

export const getAllJob = async () => {
  const getAllJobs = gql`
    query {
      jobs {
        id
        title
        company {
          id
          name
        }
        date
      }
    }
  `;

  const allJobs = await endpoint.request(getAllJobs);

  return allJobs;
};

export const getJob = async (id) => {
  const getJob = gql`
    query JobQuery($id: ID!) {
      job(id: $id) {
        id
        title
        description
        company {
          id
          name
        }
        date
      }
    }
  `;
  const variables = { id };
  const job = await endpoint.request(getJob, variables);
  return job;
};

export const getCompany = async (id) => {
  const getCompany = gql`
    query CompanyQuery($id: ID!) {
      company(id: $id) {
        id
        name
        description
        jobs {
          id
          title
        }
      }
    }
  `;
  const variables = { id };
  const company = await endpoint.request(getCompany, variables);
  return company;
};

export const createJob = async ({ title, description }) => {
  const createJob = gql`
    mutation createJob($input: JobInput) {
      job: createJob(data: $input) {
        id
      }
    }
  `;
  const inputData = { input: { title, description } }; // here the input is the input variable that needs  to  match with the schema
  const job = await endpoint.request(createJob, inputData); // here the data is the input variable
  return job;
};
