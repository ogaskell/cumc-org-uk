const {sequelize} = require('../database');
const {Op} = require('sequelize');

function getModel() {
    return sequelize.models.member;
}

function getMember(id) {
    return getModel().findByPk(id);
}

function getCommitteeRole(id) {
    return getModel().findByPk(id).then(member => {
        return member.committee;
    });
}

function getCommittee() {
    return getModel().findAll({
        attributes: ['committee'],
        where: {
            committee: {
                [Op.not]: null
            }
        },
        include: {
            model: sequelize.models.user,
            attributes: ['firstName', 'lastName']
        }
    });
}

function getInfo(id) {
    return getModel().findByPk(id, {
        include: {
            all: true
        }
    });
}

function list() {
    return getModel().findAll({
        include: {
            model: sequelize.models.user,
            attributes: ['firstName', 'lastName', 'college']
        }
    });
}

module.exports = {
    getMember, getCommitteeRole, getCommittee, list, getInfo
}