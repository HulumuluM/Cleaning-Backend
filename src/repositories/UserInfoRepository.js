const UserInfo = require("../models/UserInfo");

class UserInfoRepository {
    async GetAll() {
        return await UserInfo.findAll();
    }

    async GetByUserId(userId) {
        return await UserInfo.findOne({
            where: {
                userId: userId
            }
        })
    }

    async Create(userInfo) {
        return UserInfo.create(userInfo)
    }

    async EditByUserId(userId, userInfo) {
        await UserInfo.update(userInfo, {
            where: {
                userId: userId
            }
        });

        return await this.GetByUserId(userId);
    }

}

module.exports = new UserInfoRepository();