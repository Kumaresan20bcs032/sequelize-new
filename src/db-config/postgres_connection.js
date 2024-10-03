const { Sequelize } = require("sequelize");

// If need to configure more options need to visit offical documentation and go through configurations optons and configure.
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    sync: { alter: true },
    define: {
        underscored: true,
        freezeTableName: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        }
    },
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    }
});

/**
 * @description It is responsible for authenticate with database and make connection.
 */
const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB connected successfully...");
    }
    catch (error) {
        console.log("DB connection error...");
    }
}


module.exports = {
    dbConnection,
    sequelize
}