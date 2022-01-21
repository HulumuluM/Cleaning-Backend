const Review = require("../models/Review");

class ReviewRepository {
    async GetAll() {
        return await Review.findAll();
    }

    async GetDetailedById(reviewId) {
        return await Review.findOne({
            where: {
                id: reviewId,
            },
        });
    }

    async Create(review) {
        return Review.create(review);
    }

    async EditById(reviewId, review) {
        await Review.update(review, {
            where: {
                id: reviewId,
            },
        });

        return await this.GetDetailedById(reviewId);
    }

    async DeleteById(reviewId) {
        await Review.destroy({
            where: {
                id: reviewId,
            },
        });
    }
}

module.exports = new ReviewRepository();
