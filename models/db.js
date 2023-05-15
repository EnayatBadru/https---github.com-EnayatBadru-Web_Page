const Sequelize = require('sequelize');

//conexao com banco de dados
const sequelize = new Sequelize('application', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
})

//exportar
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize 
}