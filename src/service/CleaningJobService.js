const CleaningJobRepository = require("../repositories/CleaningJobRepository");

class CleaningJobService {
    async GetAll() {
        return await CleaningJobRepository.GetAll();
    }

    async GetDetailedById(CleaningJobId) {
        return await CleaningJobRepository.GetDetailedById(CleaningJobId);
    }

    async CreateOne(CleaningJob) {
        return await CleaningJobRepository.Create(CleaningJob);
    }

    async EditById(CleaningJobId, CleaningJob) {
        return await CleaningJobRepository.EditById(CleaningJobId, CleaningJob);
    }

    async DeleteById(CleaningJobId) {
        return await CleaningJobRepository.DeleteById(CleaningJobId);
    }
}

module.exports = new CleaningJobService();
