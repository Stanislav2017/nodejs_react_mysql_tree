module.exports = (sequelize, type) => {
    return sequelize.define('node', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            notEmpty: true,
            max: 1000
        }
    })
};