const Role = require('../models/Role');

class RoleRepository {
    async GetAll() {
        return await Role.findAll();
    }

    async GetById(roleId) {
        return await Role.findOne({
            where: {
                id: roleId
            }
        });
    }

    async Create(role) {
        return Role.create(role)
    }

    async EditById(roleId, role) {
        await Role.update(role, {
            where: {
                id: roleId
            }
        });

        // Get data for return //
        return await this.GetById(roleId);
    }

    async DeleteById(roleId) {
        await Role.destroy({
            where: {
                id: roleId
            }
        });
    }
}

module.exports = new RoleRepository();