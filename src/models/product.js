const { DataTypes } = require("sequelize");
const { sequelize } = require("../db-config/postgres_connection");
const Category = require("./category");

/**
 * @description It creates a schema for product
 */
const Product = sequelize.define(
    "products", {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
}
);

Product.hasMany(Category,
    {
        foreignKey: "product_id",
        onDelete: "CASCADE",
        onUpdate: 'CASCADE',
    }
);

Category.belongsTo(Product, {
    foreignKey: "product_id"
});


// If table does not exists then create and insert data. 
(async () => {
    await sequelize.sync();
})();

module.exports = Product;