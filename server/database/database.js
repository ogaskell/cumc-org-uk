const { Sequelize, QueryTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
});

const models = [
    require('./models/user')
]

module.exports = {
    init: async () => {
        await sequelize.authenticate();
        console.log('Database connection established.');

        models.forEach(model => {
            model(sequelize);
        }); // Initialise models

        await sequelize.sync({force: true}); // 'touch' relevant SQL tables
        console.log("All models synchronized successfully.")
    },

    sequelize: sequelize
}