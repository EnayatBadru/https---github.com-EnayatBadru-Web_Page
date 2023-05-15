const db = require('./db')

const Post = db.sequelize.define('usuarios', {
    user: {
        type: db.Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    pass:{
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Post

// executar uma unica vez
// Post.sync({force:true})