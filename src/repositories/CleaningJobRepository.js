const CleaningJob = require("../models/CleaningJob");

class CleaningJobRepository {
    async GetAll() {
        return await CleaningJob.findAll();
    }

    async GetDetailedById(CleaningJobId) {
        return await CleaningJob.findOne({
            where: {
                id: CleaningJobId,
            },
        });
    }

    async Create(CleaningJob) {
        return CleaningJob.create(CleaningJob);
    }

    async EditById(CleaningJobId,CleaningJob) {
        await CleaningJob.update(CleaningJob, {
            where: {
                id: CleaningJobId,
            },
        });

        return await this.GetDetailedById(CleaningJobId);
    }

    async DeleteById(CleaningJobId) {
        await CleaningJob.destroy({
            where: {
                id: CleaningJobId,
            },
        });
    }
}

module.exports = new CleaningJobRepository();
