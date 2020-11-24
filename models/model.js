const Sequelize = require('sequelize')
const NodeModel = require('../models/node.model')
const config = require('config');

const sequelize = new Sequelize(config.get("db_name"), config.get("db_user"), config.get("db_password"), {
    host: config.get("db_host"),
    dialect: config.get("db_dialect"),
    pool: { max: 10, min: 0, acquire: 30000, idle: 10000 }
});

const Node = NodeModel(sequelize, Sequelize);
Node.hasMany(Node, { foreignKey: 'parent', onDelete: 'cascade' });

// sequelize.sync({ force: true }).then(() => {
//     console.log(`Database & tables created!`)
// });

module.exports = { Node };