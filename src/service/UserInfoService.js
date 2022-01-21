const UserInfoRepository = require("../repositories/UserInfoRepository");

class UserInfoService {
    async GetAll() {
        return await UserInfoRepository.GetAll();
    }

    async GetDetailedById(userInfoId) {
        return await UserInfoRepository.GetDetailedById(userInfoId);
    }

    async Create(userInfo) {
        return await UserInfoRepository.Create(userInfo);
    }

    async EditById(userInfoId, userInfo) {
        return await UserInfoRepository.EditById(userInfoId, userInfo);
    }

    async DeleteById(userInfoId) {
        return await UserInfoRepository.DeleteById(userInfoId);
    }
}

module.exports = new UserInfoService();
