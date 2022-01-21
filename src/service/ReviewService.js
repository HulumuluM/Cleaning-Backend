const reviewsRepository = require("../repositories/ReviewRepository");

class ReviewService {
    async GetAll() {
        return await reviewsRepository.GetAll();
    }

    async GetDetailedById(reviewId) {
        return await reviewsRepository.GetDetailedById(reviewId);
    }

    async CreateOne(review) {
        return await reviewsRepository.Create(review);
    }

    async EditById(reviewId, review) {
        return await reviewsRepository.EditById(reviewId, review);
    }

    async DeleteById(reviewId) {
        return await reviewsRepository.DeleteById(reviewId);
    }
}

module.exports = new ReviewService();
