const { DataTypes } = require("sequelize");
const { sequelize } = require("../db-config/postgres_connection");

/**
 * @description It creates a schema for user
 */
const User = sequelize.define(
    'users', {
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
},
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

// If table does not exists then create and insert data.
(async () => {
    await sequelize.sync();
})();

module.exports = User;