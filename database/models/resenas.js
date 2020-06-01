const Sequelize = require('sequelize');
const sequelize = require('../database/config/config');

const Resena = sequelize.define('resenas', {
    id: Sequelize.INTEGER,
    peliculaId: Sequelize.INTEGER,
    usuarioId: Sequelize.INTEGER,
    textoResena: Sequelize.STRING,
    puntaje: Sequelize.DECIMAL,
},
{tableName:'resenas'});

module.exports = Resena;