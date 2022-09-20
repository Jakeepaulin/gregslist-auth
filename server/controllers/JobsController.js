import { Auth0Provider } from "@bcwdev/auth0provider";
import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router
      .get("", this.getJobs)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("/:id", this.createJob);
  }

  async getJobs(req, res, next) {
    try {
      const jobs = await jobsService.getJobs();
      res.send(jobs);
    } catch (error) {
      next(error);
    }
  }

  async createJob(req, res, next) {
    try {
      const formData = req.body;
      formData.sellerId = req.userInfo.id;
      const job = await jobsService.createJob(formData);
      res.send();
    } catch (error) {
      next(error);
    }
  }
}
