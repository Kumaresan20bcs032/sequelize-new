const { DataTypes } = require("sequelize");
const { sequelize } = require("../db-config/postgres_connection");


/**
 * @description It creates a schema for category
 */
const Category = sequelize.define(
    "categories", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sku_code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
}
);


// If table does not exists then create and insert data. 
(async () => {
    await sequelize.sync();
})();

module.exports = Category;