import { dbContext } from "../db/DbContext.js";

class JobsService {
  async createJob(formData) {
    const job = await dbContext.Jobs.create(formData);
    return job;
  }
  async getJobs() {
    const jobs = await dbContext.Jobs.find();
    return jobs;
  }
}

export const jobsService = new JobsService();
